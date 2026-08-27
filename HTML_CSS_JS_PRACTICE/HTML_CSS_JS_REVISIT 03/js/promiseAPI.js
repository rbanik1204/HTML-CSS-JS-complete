const p1 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from first Promise Object")
        res("100")
    },1000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from second Promise Object")
        rej("101")
    },5000)
})
const p3 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from third Promise Object")
        rej(new Error("I'm third promise!"))
    },7000)
})
const promise_all = Promise.all([p1, p2, p3])
                    .then((values)=>values.forEach((element)=>console.log(element)))
                    .catch((error)=>console.log(error.message))