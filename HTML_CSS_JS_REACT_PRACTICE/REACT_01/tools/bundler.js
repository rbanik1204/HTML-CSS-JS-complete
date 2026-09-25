import fs from "node:fs"
import path from "node:path"
const entry = path.resolve('src/main.jsx')//Entry point -gives absolute path
console.log("Entry:",entry)
const importRegex = /import\s+.*?\s+from\s+["'](.+?)["']/g;

//Module Storage
//Every Module discovered by the bundler will be stored here
//Key: Module Absolute path and Value: Module information
const modules = new Map();
let nextId = 0//Unique numeric id of each module
function createModule(filePath){
    const source = fs.readFileSync(filePath,"utf-8")
    const id = nextId++;
    return {
        id,
        filePath,
        source,
        dependencies:[]
    }
}
//Find dependencies of Each module
function findDependencies(source){
    const dependencies = []
    let match
    while((match = importRegex.exec(source))!== null){
        dependencies.push(match[1])
    }
    // RegExp objects with /g maintain lastIndex.
    // Reset it before another independent search.
    importRegex.lastIndex = 0;

    return dependencies;
}
function resolveDependency(request, parentFile){
    const parentDirecory = path.dirname(parentFile)
    //request : "./Button.jsx" and parentFile:"/project/src/main.jsx"
    return path.resolve(parentDirecory, request)
}
function buildGraph(filePath){
    if(modules.has(filePath))
        return modules.get(filePath)
    const module = createModule(filePath)
    modules.set(filePath, module)
    
    //Find imports 
    const dependencyRequests = findDependencies(module.source)
    // Resolve each dependency
    for (const request of dependencyRequests) {
        const dependencyPath =
            resolveDependency(request, filePath);
        const dependency = {
            request,
            filePath: dependencyPath
        };
        module.dependencies.push(dependency);
        // Recursively build dependency graph
        buildGraph(dependencyPath);
    }
    return module;
}
const graph = buildGraph(entry)

console.log("\nMODULE GRAPH:\n");

for (const [filePath, module] of modules) {
    console.log("ID:", module.id);
    console.log("File:", filePath);
    console.log("Dependencies:", module.dependencies);
    console.log("--------------------------------");
}