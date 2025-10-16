let p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Value 1');
    },1000);
});
let p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Value 2');
    },2000);
});
let p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Value 3');
    },3000);
});
let promises = Promise.all([p1,p2,p3])
promises.then((value)=>{
    value.forEach(element => {
        console.log(element);
    });
})
Promise.allSettled([Promise.resolve(1),
                    Promise.reject(2),
                    Promise.resolve(3)
]).then(value=>console.log(value))
//There is also Promise.race(iterable), Promise.any(iterable) 