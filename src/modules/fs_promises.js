export default `
import { resolve as pathResolve } from 'node:path'

export const access = (path, mode) => new Promise((resolve, reject) => {
    __fs.access(pathResolve(path), mode, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const appendFile = (path, data, options) => new Promise((resolve, reject) => {
    __fs.appendFile(pathResolve(path), data, options, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const chmod = (path, mode) => new Promise((resolve, reject) => {
    __fs.chmod(pathResolve(path), mode, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const chown = (path, uid, gid) => new Promise((resolve, reject) => {
    __fs.chown(pathResolve(path), uid, gid, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const close = (fd) => new Promise((resolve, reject) => {
    __fs.close(fd, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const copyFile = (src, dest, mode) => new Promise((resolve, reject) => {
    __fs.copyFile(pathResolve(src), pathResolve(dst), mode, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const createReadStream = (...params) => __fs.createReadStream(...params)
export const createWriteStream = (...params) => __fs.createWriteStream(...params)

export const exists = (path) => new Promise((resolve) => {
    __fs.exists(pathResolve(file), (exists) => {
        resolve(exists)
    })
})

export const fchmod = (path, mode) => new Promise((resolve, reject) => {
    __fs.fchmod(pathResolve(path), mode, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const fchown = (path, uid, gid) => new Promise((resolve, reject) => {
    __fs.fchown(pathResolve(path), uid, gid, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const fdatasync = (fd) => new Promise((resolve, reject) => {
    __fs.fdatasync(fd, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const fstat = (path) => new Promise((resolve, reject) => {
    __fs.fstat(pathResolve(path), (err, stats) => {
        if (err) {
            reject(err)
        } else {
            resolve(stats)
        }
    })
})

export const fsync = (fd) => new Promise((resolve, reject) => {
    __fs.fsync(fd, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const ftruncate = (fd, len) => new Promise((resolve, reject) => {
    __fs.ftruncate(fd, len, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const futimes = (fd, atime, mtime) => new Promise((resolve, reject) => {
    __fs.futimes(fd, atime, mtime, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const lchmod = (path, mode) => new Promise((resolve, reject) => {
    __fs.lchmod(pathResolve(file), mode, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const lchown = (path, uid, gid) => new Promise((resolve, reject) => {
    __fs.lchown(pathResolve(file), uid, gid, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const link = (existingPath, newPath) => new Promise((resolve, reject) => {
    __fs.link(pathResolve(existingPath), pathResolve(newPath), (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const lstat = (path) => new Promise((resolve, reject) => {
    __fs.lstat(pathResolve(file), (err, stats) => {
        if (err) {
            reject(err)
        } else {
            resolve(stats)
        }
    })
})

export const mkdir = (path, options) => new Promise((resolve, reject) => {
    __fs.mkdir(pathResolve(path), options, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const mkdtemp = (prefix, options) => new Promise((resolve, reject) => {
    __fs.mkdtemp(prefix, options, (err, folder) => {
        if (err) {
            reject(err)
        } else {
            resolve(folder)
        }
    })
})

export const open = (path, flags, mode) => new Promise((resolve, reject) => {
    __fs.open(pathResolve(path), flags, mode, (err, fd) => {
        if (err) {
            reject(err)
        } else {
            resolve(fd)
        }
    })
})

export const readdir = (path, options) => new Promise((resolve, reject) => {
    __fs.readdir(pathResolve(path), options, (err, files) => {
        if (err) {
            reject(err)
        } else {
            resolve(files)
        }
    })
})

export const read = (fd, buffer, offset, length, position) => new Promise((resolve, reject) => {
    __fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
        if (err) {
            reject(err)
        } else {
            resolve({ bytesRead, buffer })
        }
    })
})

export const readFile = (path, options) => new Promise((resolve, reject) => {
    __fs.readFile(pathResolve(path), options, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

export const readlink = (path, options) => new Promise((resolve, reject) => {
    __fs.readlink(pathResolve(file), options, (err, linkString) => {
        if (err) {
            reject(err)
        } else {
            resolve(linkString)
        }
    })
})

export const realpath = (path, options) => new Promise((resolve, reject) => {
    __fs.realpath(pathResolve(file), options, (err, resolvedPath) => {
        if (err) {
            reject(err)
        } else {
            resolve(resolvedPath)
        }
    })
})

export const rename = (oldPath, newPath) => new Promise((resolve, reject) => {
    __fs.rename(pathResolve(oldPath), pathResolve(newPath), (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const rmdir = (path) => new Promise((resolve, reject) => {
    __fs.rmdir(pathResolve(path), (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const stat = (path) => new Promise((resolve, reject) => {
    __fs.stat(pathResolve(path), (err, stats) => {
        if (err) {
            reject(err)
        } else {
            resolve(stats)
        }
    })
})

export const symlink = (target, path, type) => new Promise((resolve, reject) => {
    __fs.symlink(target, pathResolve(path), type, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const truncate = (path, len) => new Promise((resolve, reject) => {
    __fs.truncate(pathResolve(file), len, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const unlink = (path) => new Promise((resolve, reject) => {
    __fs.unlink(pathResolve(file), (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const utimes = (path, atime, mtime) => new Promise((resolve, reject) => {
    __fs.utimes(pathResolve(file), atime, mtime, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

export const write = (fd, buffer, offset, length, position) => new Promise((resolve, reject) => {
    __fs.write(fd, buffer, offset, length, position, (err, written, buffer) => {
        if (err) {
            reject(err)
        } else {
            resolve({ written, buffer })
        }
    })
})

export const writeFile = (file, data, options) => new Promise((resolve, reject) => {
  try{
    return resolve(__fs.writeFileSync(pathResolve(file), data, options))
  }catch(err) {
    return reject(err)
  }
 
})
`
