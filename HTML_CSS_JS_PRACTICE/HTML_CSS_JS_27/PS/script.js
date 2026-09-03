// const hack = ()=>{
//     setTimeout(()=>{
//         let elem =  document.createElement("div");
//         elem.innerText = "Initialising Hack Program";
//         elem.style.color = "green";
//         elem.style.fontSize = "10px";
//         document.getElementById("container").appendChild(elem);
//     },1000);
//     setTimeout(()=>{
//         let elem =  document.createElement("div");
//         elem.innerHTML = "Hacking Ratul <b>instagram</b> username...";
//         elem.style.color = "green";
//         elem.style.fontSize = "10px";
//         document.getElementById("container").appendChild(elem);
//     },2000);
//     setTimeout(()=>{
//         let elem =  document.createElement("div");
//         elem.innerText = "username:rb1204";
//         elem.style.color = "green";
//         elem.style.fontSize = "10px";
//         document.getElementById("container").appendChild(elem);
//     },3000);
//     setTimeout(()=>{
//         let elem =  document.createElement("div");
//         elem.innerText = "Hacking facebook...";
//         elem.style.color = "green";
//         elem.style.fontSize = "10px";
//         document.getElementById("container").appendChild(elem);
//     },4000);
// }
// hack();  ---> This wasnt that good

let obj = {
    msg1:"ratul",
    msg2: "Hacking:"+this.msg1+" IP:192.168.2.29",
    msg3: "Connectiong to Facebook,Instagram,Linkdin,gmail...",
    msg4: "Brute Force Successful!",
    msg5: "1M password compared",
    msg6: "Breach Successful!",
    msg7: "Match Found",
    msg8: "Gmail password:1234567"
};
const Sleep = async (seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },seconds*1000);
    });
}
const hackGame = async (seconds,message)=>{
    await Sleep(seconds);
    console.log(message);
}

// function main(){
//         obj.entries.forEach(([key,value]) => {
//         hackGame(2,value);
//     });
// }
//main()
// There is Another method to do this We have IIFE async meaning Immediately invoked Async
(async ()=>{
    for (let [key, value] of Object.entries(obj)) {
        await hackGame(4, value);
    }
})();