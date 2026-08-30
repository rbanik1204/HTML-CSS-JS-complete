const p1 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from first Promise Object")
        res("100")
    },1000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from second Promise Object")
        rej("Error:101")
    },5000)
})
const p3 = new Promise((res, rej) => {
    setTimeout(()=>{
        console.log("Hi! I'm from third Promise Object")
        rej(new Error("I'm third promise!"))
    },7000)
})
// const promise_all = Promise.all([p1, p2, p3])
//                     .then((values)=>values.forEach((element)=>console.log(element)))//all resolves!
//                     .catch((error)=>console.log(error))//Any error

// const promise_all = Promise.allSettled([p1, p2, p3])
//                         .then((results)=>results.forEach((result)=>{
//                             if(result.status === "fulfilled")
//                                 console.log(result.value)
//                             else
//                                 console.log(result.reason)
//                         }))
const promise_race = Promise.race([p1, p2, p3]) //First fulfilled promise object
const promise_any = Promise.any([p1, p2, p3]) // returns first resolved promise!
