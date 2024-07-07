import { Volume } from 'memfs'
import type { JSModuleLoader } from 'quickjs-emscripten-core'

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
// import { fileURLToPath } from 'node:url'
import assertModule from './modules/assert.js'
import fsPromisesModule from './modules/fs-promises.js'
import fsModule from './modules/fs.js'
import pathModule from './modules/path.js'
import utilModule from './modules/util.js'
import type { RuntimeOptions } from './types/RuntimeOptions.js'

export const getModuleLoader = (options: RuntimeOptions) => {
	//const __dirname = dirname(fileURLToPath(import.meta.url))

	const customVol = options?.nodeModules ? Volume.fromNestedJSON(options?.nodeModules) : {}

	const modules: Record<string, any> = {
		'/': {
			node_modules: {
				...customVol,
				path: {
					'index.js': pathModule,
				},
				util: {
					'index.js': utilModule,
				},
				assert: {
					'index.js': assertModule,
				},
			},
		},
	}
	if (options.allowFs) {
		modules['/'].node_modules.fs = { 'index.js': fsModule, promises: { 'index.js': fsPromisesModule } }
	}

	if (options.enableTestUtils) {
		modules['/'].node_modules.test = {
			'index.js': readFileSync(join(__dirname, 'modules', 'build', 'test-lib.js')),
		}
	}

	const vol = Volume.fromNestedJSON(modules)

	const moduleLoader: JSModuleLoader = (name, _context) => {
		if (!vol.existsSync(name)) {
			return { error: new Error(`Module '${name}' not installed or available`) }
		}

		const value = vol.readFileSync(name)?.toString()

		if (!value) {
			return { error: new Error(`Module '${name}' not installed or available`) }
		}
		return { value }
	}

	return moduleLoader
}
