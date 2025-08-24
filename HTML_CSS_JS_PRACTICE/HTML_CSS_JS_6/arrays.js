const prompt = require('prompt-sync')();
array = []
let n = Number(prompt("Enter range:"));
for(let i=0;i<n;i++){
    // array.unshift(i);
    // array.push(i);
    array+= i;
}
array = array.split("").map(Number);
array = array.map(x => x**2);
console.log(array);
