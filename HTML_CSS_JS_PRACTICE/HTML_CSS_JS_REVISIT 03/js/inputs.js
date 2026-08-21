//import promptSync from  'prompt-sync';
const promptSync = require('prompt-sync');
const prompt = promptSync();

const name = prompt("Write your name & title in comma separated values: ");
console.log(`Hello ${name}`);//template literals
let [f_name,l_name] = name.split(',');
console.log("splitted:",f_name+" "+l_name);
let arr = [f_name,l_name];
console.log(arr);
arr = arr.join('-');
console.log(arr)