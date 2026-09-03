let p1 = new Promise((resolve, reject)=>{
    console.log("PromiseState:Pending!")
    setTimeout(()=>{
        console.log("I am a promise and I am fulfilled")
        resolve(true)
    },3000)
})
let p2 = new Promise((resolve, reject)=>{
    console.log("PromiseState:Pending!")
    setTimeout(()=>{
        console.log("I am a second Promise and I am fulfilled")
        resolve(true)
    },3000)
})
p1.then((value)=>{
    console.log("Resolve of first promise:",value)
})
p2.then((value)=>{
    console.log("Resolve of second promise:",value)
})