// console.log("this is javascript varibales declaration")
// var a =10
// var a = 20
// console.log("Var keyword can redeclare and update the varible in same scope")
// let b = 20
// // let b = 30 // Throws error since identifier 'b' has already been declared!
// const c = 50
// console.log("const declared variable cant be redeclared or changed!")

// {
//     const c =100
//     let b = 100
//     console.log("hello!"+ c+b)
// }

//redeclaration using let

let a = 10
a += 1
{
    let a = 66
    console.log(a)
}
console.log(a)

//redeclaration using `var`

var b = 100
b+=1
{
    var b = 200
    console.log(b)
}
console.log(b)

//Primitive DataTypes
var l;
let m = null;
let n = 345;
let o = true;
let p = BigInt("567");
let q = Symbol("Hey im a nice symbol!")
let s = "it is a string"
console.log(typeof l,typeof m,typeof n,typeof o,typeof p,typeof q)
