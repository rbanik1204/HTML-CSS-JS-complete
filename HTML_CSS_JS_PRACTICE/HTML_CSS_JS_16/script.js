document.write("Hello Brother");
// let YES = setInterval(function(){
//     alert("Hello");
// },5000)
// let str = prompt("Want to Execute the alert?\n1.YES\n2.NO\n");
// if (str === "NO"){
//     clearInterval(YES);
// }
const func = (a,b) =>{
    let set;
    return (set = setInterval((a,b)=>{alert(`Addition:${a+b}`);clearInterval(set);},5000));
}
let str = prompt("Enter your choice:\n1.yes\n2.No");
if(str === "No"){
    clearInterval(set);
}
else{
    set = func(5,6);
}
