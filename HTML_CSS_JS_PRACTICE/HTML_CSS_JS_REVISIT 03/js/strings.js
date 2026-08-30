// let name="broke510"
// console.log(name)
// name[1]='c'//strings are immutable
// console.log(name)
let boy1 ='nikhil'
let boy2 = 'pramod'
console.log(`${boy1} is a friend of ${boy2}`)//template literals
boy1 = boy1.toLocaleUpperCase()
boy2 = boy1.concat(boy2," ",boy1.slice(1,4))
console.log(boy2)
// const str = new String("Hello");
// console.log(str)
//Other prototypal methods are
/*
str.charAt(Number)
str.at(-1) //negative indexing possible
str.startsWith("")
str.endsWith("")
str.indexOf("String")
str.includes("String")

however it uses the process of boxing that is the termporary
wrapping of primitive Strings into  String Object
"hello"
--\
--\
--temporary String wrapper
--String.prototype
--Object.prototype
--null
*/