let p1 = new Promise((myresolve, myreject)=>{
    setTimeout(()=>{
        console.log(`This will be executed for the first after 2 seconds!`)
        myresolve('successful')
    },2000)
})
.then((res)=>{
    console.log(`First Promise resolve :${res}`)
    let p2 = new Promise((resolve,reject)=>
        setTimeout(()=>{
            console.log(`From Second Promise!`)
            resolve(56)
        },2000)
    )
})
.then((val)=>console.log('Resolve of second Promise',val))