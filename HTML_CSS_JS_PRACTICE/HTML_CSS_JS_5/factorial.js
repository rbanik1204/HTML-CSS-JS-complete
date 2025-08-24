//arr.reduce(callBackFn,IndexValue)
let arr = [2, 3, 4];// i can just take an array and then print its fact
let val = arr.reduce((acc,currVal) =>acc*currVal,1);
console.log(val);