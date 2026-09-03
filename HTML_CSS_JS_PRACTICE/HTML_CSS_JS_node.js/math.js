const x = (...arr) =>arr.reduce((acc,currVal)=>acc+currVal,0)
console.log(x(1,2,3,4))