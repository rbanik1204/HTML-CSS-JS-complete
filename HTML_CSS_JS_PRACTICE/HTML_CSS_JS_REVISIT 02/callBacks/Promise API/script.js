let p2 = Promise.reject(new Error('Trial rejection'))
let p1 = Promise.resolve('Value 1')
let p3 = Promise.resolve('Value 3')
// let promise_all = Promise.all([p1, p2, p3])  ---> Each Promise has to resolve otherwise .all method fails
//     .then((val)=>{
//         val.forEach((value,i)=>{
//             console.log(value)
//         })
//     }) 
// let promise_allSettled = Promise.allSettled([p1,p2,p3])//Stores result of all the promises
//     .then((val)=>{
//         val.forEach((value,i)=>{
//             console.log(value)
//         })
//     })
// let promise_race = Promise.race([p1,p2,p3])
//     .then((val)=>console.log(val))//Stores the *first settled*(resolved/rejected) promise result
let promise_any = Promise.any([p1,p2,p3])
    .then((val)=>{
        console.log(val)
    },(err)=>console.log(err))