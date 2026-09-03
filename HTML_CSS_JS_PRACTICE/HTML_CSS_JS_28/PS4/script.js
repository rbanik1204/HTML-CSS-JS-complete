console.log(document.cookie)
document.cookie = "name=Ratul Banik;"
console.log(document.cookie);// Appends the cookie but not overwrites
const key = prompt("Enter key:")
const value = prompt("Enter Value:")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);