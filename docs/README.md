# Package @sebastianwessel/quickjs

This TypeScript package allows you to safely execute **JavaScript and TypeScript code** within a WebAssembly sandbox using the QuickJS engine. Perfect for isolating and running untrusted code securely, it leverages the lightweight and fast QuickJS engine compiled to WebAssembly, providing a robust environment for code execution.

## Documentation

- [Installation](./installation.md)
- Usage and Best Practice:
  - [Code in the sandbox](./sandboxed-code.md)
  - [Basic understanding](./basic.md)
  - [Fetch in Guest System](./fetch.md)
  - [Custom Node Modules](./custom-modules.md)
  - [Custom File System](./custom-file-system.md)
  - [Usage in browser and on Providers](./usage-in-browser-and-providers.md)
- Compatibility:
  - [Core Javascript](./core-js-compatibility.md)
  - [NodeJS](./node-compatibility.md)
- [Runtime options](./runtime-options.md)
- [Run Tests in QuickJS](./running-tests.md)
- [Credits](./credits.md)
- [Find examples in the repository](https://github.com/sebastianwessel/quickjs/tree/main/example)

## Features

- **Security**: Run untrusted JavaScript and TypeScript code in a safe, isolated environment.
- **Basic Node.js modules**: Provides basic standard Node.js module support for common use cases.
- **File System**: Can mount a virtual file system.
- **Custom Node Modules**: Custom node modules are mountable.
- **Fetch Client**: Can provide a fetch client to make http(s) calls.
- **Test-Runner**: Includes a test runner and chai based `expect`.
- **Performance**: Benefit from the lightweight and efficient QuickJS engine..
- **Versatility**: Easily integrate with existing TypeScript projects.
- **Simplicity**: User-friendly API for executing and managing JavaScript and TypeScript code in the sandbox.

## Version 1: Rolling Release

### Fast Lane - Fast Pace

Welcome to the first version of our npm package! This release follows a rolling release model, prioritizing rapid development and quick iterations. The approach is designed to deliver features swiftly, gather feedback promptly, and implement fixes without delay. This means you get the latest features and improvements as soon as they are ready, ensuring you always have access to the cutting-edge functionality.

Key aspects of our rolling release model:

- **Ship Fast:** Release new features and updates as soon as they are developed.
- **Get Fast Feedback:** Your feedback is crucial. I listen and respond quickly to ensure the package meets your needs.
- **Fix Quickly:** Bugs and issues are addressed promptly, minimizing any disruptions.
- **Fast-Paced Development:** Our development cycle is agile, allowing us to adapt and evolve based on user input.

Stay tuned for frequent updates and enhancements.

## Basic Usage

Here's a simple example of how to use the package:

```typescript
import { type SandboxOptions, loadQuickJs } from '@sebastianwessel/quickjs'

const { runSandboxed } = await loadQuickJs()

// Create a runtime instance each time a js code should be executed
const options: SandboxOptions = {
  allowFetch: true, // inject fetch and allow the code to fetch data
  allowFs: true, // mount a virtual file system and provide node:fs module
  env: {
    MY_ENV_VAR: 'env var value'
  },
}


const code = `
import { join } as path from 'path'

const fn = async ()=>{
  console.log(join('src','dist')) // logs "src/dist" on host system

  console.log(env.MY_ENV_VAR) // logs "env var value" on host system

  const url = new URL('https://example.com')

  const f = await fetch(url)

  return f.text()
}
  
export default await fn()
`

const result = await runSandboxed(async ({ evalCode }) => evalCode(code, undefined, options), options)

console.log(result) // { ok: true, data: '<!doctype html>\n<html>\n[....]</html>\n' }
```

## Credits

This lib is based on:

- [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)
- [quickjs-emscripten-sync](https://github.com/reearth/quickjs-emscripten-sync)
- [memfs](https://github.com/streamich/memfs)
- [Chai](https://www.chaijs.com)

Tools used:

- [Bun](https://bun.sh)
- [Biome](https://biomejs.dev)
- [Hono](https://hono.dev)
- [poolifier-web-worker](https://github.com/poolifier/poolifier-web-worker)
- [tshy](https://github.com/isaacs/tshy)
- [autocannon](https://github.com/mcollina/autocannon)

## License

This project is licensed under the MIT License.

---

This package is ideal for developers looking to execute JavaScript code securely within a TypeScript application, ensuring both performance and safety with the QuickJS WebAssembly sandbox.
