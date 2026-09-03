/* Creating a faulty Calculator
which performs
+ --> -
* --> +
- --> /
/ --> **

also it should give wrong result for only 10% of the times
*/
let input = prompt("Enter two number(separated by comma):");
let [num1,num2] = input.split(',');
num1 = Number(num1);
num2 = Number(num2);
let op = prompt("Enter Operator:");
let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if (Math.random()<0.1){
    faultyCalc(num1, num2);
}
else {
    Calculator(num1, num2);
}

function faultyCalc(x, y){
    alert(`${eval(`${x} ${obj[op]} ${y}`)}`);
}
function Calculator(x,y){
    alert(`${eval(`${x} ${op} ${y}`)}`);
}
