
try{
    throw new Error('Test Error')
    //break
    //even if returned to invoker fn
}
catch(err){
    console.log(err)
}
//try-catch block is for synchronous actions i.e, if error is generated in asynchronous block of code then that error will not be catched.
finally{
    console.log('This block will always be executed regardless of any error incurred!')
}
//But finally will not run if there are process level exits ->process.exit(0)