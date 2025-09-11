let promise_all = Promise.race(
    [
        Promise.reject(new ReferenceError("Error 1")),
        Promise.reject("Error 2"),
        Promise.resolve("Promise resolved")
    ]
).then((value)=>{
    console.log(value);//perfecto
}).catch((error)=>{
    console.log(error.name+":"+error.message+error.stack);
})