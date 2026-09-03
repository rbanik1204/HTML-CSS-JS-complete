let arr = [1, 2, 3, 4];
let len =  arr.length;
// console.log(len);
arr.pop();
// console.log(arr);
arr.push(4);
// console.log(arr)
arr.unshift(0);
// console.log(arr);
arr.splice(2,1);
// console.log(arr);
// arr.slice(1,3);
let str = arr.join("_");
// console.log(str);
let arr2 = [10, 11, 12];
let arr3 = [20, 21, 22];
let newArr = arr.concat(arr2,arr3);
console.log(newArr);