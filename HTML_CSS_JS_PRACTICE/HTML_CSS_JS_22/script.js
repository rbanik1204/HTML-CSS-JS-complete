let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 11000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("ERROR!"));
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
})
// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })
// p1.then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("value 2");
//         }, 0);
//     });
// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("value 3");
//         }, 0);
//     });
// }).then((value)=>{
//      console.log(value);
// })
let promise_all = Promise.race([p1, p2, p3])// ---> returns a promise
//let promise_all = Promise.allSettled([p1, p2, p3])// ---> returns a promise
// console.log(promise_all);
// promise_all.then((values)=>{
//     values.forEach((value)=>{
//         console.log(value);// So all the values of promises are printed simultaneously why?? because ive already got the array now just printing the values of the array is in the Order of n
//     })
// })

promise_all.then((values)=>{
    console.log(values);
}).catch((err)=>{
    console.log(err)
})
