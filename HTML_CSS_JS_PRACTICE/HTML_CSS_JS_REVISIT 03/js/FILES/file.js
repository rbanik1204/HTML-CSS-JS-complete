const fs = require("fs");
//Synchronous Blocking request
fs.writeFileSync("./test.txt","Hey there!")

// Asynchronous request
// fs.writeFile("./test.txt","Hello from async",(err)=>{
    
// })