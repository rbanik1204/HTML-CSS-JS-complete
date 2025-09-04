
// let promise = new Promise(function(resolve,reject){
//     resolve(56);
//     console.log("Hello from promise");
// })
// console.log("Start");
// setInterval(()=>{
//     console.log("This will be printed after Two Seconds")
// },2000);
// console.log(promise);
// console.log("End of promise 1");




// console.log("Start of Promise1");
// let promise = new Promise(function(resolve,_reject){
//     setTimeout(()=>{
//         console.log("Promise is fulfilled!");
//         resolve(true);
//         console.log(promise);
//     },5000);
// })
// console.log(promise);
// console.log("End of Promise 1");
// promise.then((value)=>{
//     console.log(value);
// })



console.log("Start of Promise2");
let myPromise = new Promise(function (_myResolve, myReject) {
    setTimeout(() => {
        console.log("Promise is rejected!");
        myReject(new Error("Promise is rejected due to some errors"));
        console.log(myPromise);
    }, 5000);
})
console.log("End of Promise 2");
myPromise.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error.name, ":", error.message);
})