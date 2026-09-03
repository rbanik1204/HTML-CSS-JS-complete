// const sum = (a, b)=>{
//     console.log("Summation result:"+`${a+b}`)
// }
// const timerID = setTimeout(sum,4000,3,5);
const IntervalID = (a,b)=>setInterval(()=>console.log(`Addition result:${a+b}`),4000)
const input = prompt("want to stop?\n1.Yes\n2.No\nEnter your choice:")
if(input == 'Yes')
    clearInterval(IntervalID)
else
    IntervalID(5,6)