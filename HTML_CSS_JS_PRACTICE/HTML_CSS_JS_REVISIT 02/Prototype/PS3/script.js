function Animal(name){
    this.name = name
}
Animal.prototype.walks = function (){
    return `${this.name} can walk freely`
}
function Bear(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
Bear.prototype.__proto__ = Animal.prototype
//Or Bear.prototype = Object.create(Animal.prototype)
//Bear.prototype.constructor = Bear;
const b1 = new Bear('Bear','snow')
console.log(b1.breed + ' '+b1.walks());
console.log(b1 instanceof Bear === b1 instanceof Animal)//Properties of Animal inherited by Bear