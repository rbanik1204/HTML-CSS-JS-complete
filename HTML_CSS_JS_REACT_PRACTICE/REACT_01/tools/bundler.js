import fs from "node:fs"
import path from "node:path"
const entry = path.resolve('src/main.jsx')//Entry point -gives absolute path
console.log("Entry:",entry)
const importRegex = /import\s.*?\sfrom\s["'](.+?)["']/g
const source = fs.readFileSync(entry,"utf-8")
let dependencies = []
let modules = new Map()
let nextId = 0
function createModule(filePath){
    const module = fs.readFileSync(filePath,"utf-8")
    const id =nextId++;
    let match;
    let dependencies = []
    while((match=importRegex.exec(module))!==null)
        dependencies.push(match[1])
    
    return {
        id,
        source:module,
        filePath,
        dependencies
    }
}
function resolvePackage(packageName,importerPath){
    let currentDir = path.dirname(importerPath)
    while(true){
        const nodeModulesPath = path.join(currentDir,"node_modules",packageName)
        if(fs.existsSync(nodeModulesPath))
            return nodeModulesPath
        const parentDir = path.dirname(currentDir)//Continue upward
        if(currentDir === parentDir)
            break;
        currentDir = parentDir
    }
    throw new Error(`Cannot find package ${packageName}`)
}
function buildGraph(filePath){
    if(modules.has(filePath)) return  modules.get(filePath)
    const module = createModule(filePath)
    modules.set(filePath,module)
    for(let dependency of module.dependencies){
        if(dependency.startsWith('./')|| dependency.startsWith('../')){
            //Relative dependency
            const dependencyPath =
                                path.resolve(path.dirname(filePath),dependency)
            buildGraph(dependencyPath)
        }
        else{
            //Package Dependency
            const packagePath = resolvePackage(dependency,filePath)
            console.log(`Package: \"${dependency}\" -> \"${packagePath}\"`)
        }
    }
    return module;
}
buildGraph(entry)
console.log(modules)