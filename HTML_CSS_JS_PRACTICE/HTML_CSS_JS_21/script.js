let myPromise = new Promise((myResolve,_myReject)=>{
    setTimeout(()=>{
        console.log("This line Will be Written after 2 Secs");
        myResolve(true);
    },2000)
})
myPromise.then((value)=>{
    let p1 = new Promise((myResolve,_myReject)=>{
        setTimeout(()=>{
        console.log("This line Will be Written after 2 Secs");
         return myResolve(value);
    },2000)
    })
}).then()