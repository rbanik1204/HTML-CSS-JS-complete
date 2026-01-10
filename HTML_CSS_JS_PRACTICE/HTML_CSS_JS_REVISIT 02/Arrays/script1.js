/* All contructor functions return an object by default */
function Person(name,age){
    this.name = name;
    this.age = age;
}
const p1 = new Person("Ratul", 22);
/* Here new creates an empty object {}
 internally [[Prototype]] -> Person.prototype
 Binds *this* to that object
 Executes Person()
 Returns the Object
*/
console.log(p1.name + p1.age)
// The type casting of strings -> num =+"22" this is from String to Number Number.parseInt(str) or Number.parseFloat(str) 
//from Number to String -> str = 22 + "" OR num.toString();
console.log([1, 2, 3] instanceof Object)
console.log(typeof Array(5)); //Initializes empty array of size 5
//Array constructors methods 
let arr = Array(5).fill(null);
arr = arr.concat([1, 2, 3])
console.log(arr)
arr.splice(0,5);
console.log(arr);
arr.reverse()
arr.sort()
console.log(arr);