// let promise_all = Promise.race(
//     [
//         Promise.reject(new ReferenceError("Error 1")),
//         Promise.reject("Error 2"),
//         Promise.resolve("Promise resolved")
//     ]
// ).then((value)=>{
//     console.log(value);//perfecto
// }).catch((error)=>{
//     console.log(error.name+":"+error.message+error.stack);
// })
// const loadScript = async (src) => {
//     let script = document.createElement("script");
//     script.type = 'text/javascript';
//     script.src = src;
//     const myPromise = new Promise((resolve, reject) => {
//         setInterval(()=>{
//             script.onload = () => {
//                 resolve("Successfully loaded");
//             }
//             script.onerror = () => {
//                 reject(new Error("Script not found!"));
//             }
//             document.head.appendChild(script);
//         },3000)
//     })
//     let val = await myPromise;
//     return val;
// }
// loadScript("script2.js")
//     .then((value) => {
//         alert(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
const myPromises = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7);
        }, 2000);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(0);
        }, 3000)
    })
    return [await p1, await p2, await p3];
}
async function main() {
    myPromises().then((values) => {
        let val = 0;
        values.forEach((value) => {
            if (value > val)
                val = value;
            
        })
        console.log(val + " is the largest among all!");
    })
}
main();

