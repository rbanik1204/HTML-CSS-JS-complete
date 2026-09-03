// console.log(`Value of X is${x}`)//Value of X is undefined
// var x = 10; 
// console.log('Value of Y is '+y)//ReferenceError
// let y = 20; //Temporal Dead Zone -> Variable binding remians within TDZ thats why ReferenceError
// function Hello(){
//     console.log('Constructor Functions are *FULLY* Hoisted -> Stored into Creation/Memory Phase thats why can be used before declaration!')
// }
console.log(exp())//Compartment of TDZ resulting ReferenceError
const exp = ()=>{
    return 5;
}