// const p1 = {
//     lname : 'iwctl',
//     fname : '204'
// }
// console.log(p1)
// const p2 = Object.create(p1)
// console.log(p2)
// console.log(p2.fname===p2.__proto__.fname)
// let fname = "iwctl"
// //How fname has properties if it is a *string*
// console.log(fname.__proto__) // references to String.prototype -> has the properties and methods of String 
// console.log(String) //Base Class
// console.log(String.prototype)
// console.log(fname.__proto__ === String.prototype)
//------------------------------Prototypal Inheritance-------------------------------
// let p1 = {
//     xp1: "Hello from p1",
// }
// let p2 = {
//     xp2: "Hello from p2",
//     __proto__ : p1,
// }
// let p3 = {
//     xp3: "Hello from p3",
//     __proto__ : p2,
// }
