let myPromise = new Promise((myResolve,_myReject)=>{
    setTimeout(()=>{
        console.log("This line Will be Written after 2 Secs");
        myResolve(true);
    },2000)
})
myPromise.then((value)=>{
    let p1 = new Promise((myResolve,_myReject)=>{
        setTimeout(()=>{
        console.log("This line Will be Written after 4 Secs");
        myResolve(value);
    },2000)
    })
    return p1;
}).then((value)=>{
    console.log(value);
})