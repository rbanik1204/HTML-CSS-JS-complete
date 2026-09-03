const intervalId = setTimeout(Clock ,1000)
function Clock(){
    const date = new Date();
    console.log(date.toLocaleTimeString())
}