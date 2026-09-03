function Person(name, age) {//Person.__proto__ = Function.prototype again Function.prototype.__proto__ = Object.prototype
    this.name = name; //p1.__proto__ = Person.prototype used for instance methods and Person.prototype.__proto__ = Object.prototype(root prototype Object)
    this.age = age
}
Person.prototype.getData = function () {
    return `${this.name} is ${this.age} years old`
}
//Instantiation using constructor function Person
let p1 = {__proto__:Person.prototype}
p1.name = "abc";p1.age=20

let p2 = {__proto__:Person.prototype}
p2.name = "abcd";p2.age=20
console.log(p1.getData === p2.getData)
console.log(p1.getData)//returns method itself
//p1 = {__proto__:Object.prototype} or p1 = Object.create(Object.prototype)
