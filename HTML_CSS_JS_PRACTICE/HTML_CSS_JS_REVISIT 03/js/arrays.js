const promptSync = require('prompt-sync');
const prompt = promptSync();
let arr = prompt("Enter five Numbers separated by Commas: ")
            
arr = arr.split(',').map(Number)

// Array.forEach((val,i) => {
//     arr[i] = Number.parseInt(val)
// });
//Prototypal methods
let a = arr.find(x=>x>3)
let b = arr.findIndex(x=> x>=5)
let c = arr.every(x=> x>=2)
let d = arr.some(x=>x!==3)
let e = arr.filter(x=> x<=2)
console.log(arr)
console.log(e)
console.log(`a:${a} b:${b} c:${c} d:${d} e: ${e}`)
arr.sort((a,b)=>a-b)//ascending order
// arr = String(arr)//or arr.toString()
console.log(arr)

//Mutating prototypal methods
/*
push, pop, shift, unshift, splice, sort, reverse
*/
//Not Mutating
/* 
filter,reduce,slice,concat,flat,find,some,every
*/

//Constructor methods are from of isArray and Array