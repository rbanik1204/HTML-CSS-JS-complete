const obj = {
    lname: 'abc',
    age:22,
}
console.log(obj)
const handler = {
    get(obj,prop){
        if (!Object.hasOwn(obj,prop)) return false
        return obj[prop];
    },
    set(obj,prop,value){
        if(!(prop in obj)) return Reflect.get(obj,prop);
        // switch(prop){
        //     case 'fname':
        //     case 'lname':
        //         if(typeof(value) !== 'string')
        //             throw new Error(`${prop} does not EXIST`)
        //         break;
        //     case 'age':
        //         if(typeof(value) !== 'number') 
        //             throw new TypeError('age must be a Number!')
        //         else if(value <= 0) throw new RangeError('age must be greater than ZERO!')
        //         break;
        // }
        Reflect.set(obj,prop,value);
    },
}
const proxyObj = new Proxy(obj,handler);
// console.log(proxyObj.age)
proxyObj.age = true;
console.log(proxyObj.age)