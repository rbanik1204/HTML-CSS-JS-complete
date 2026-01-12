const btn = document.getElementsByClassName("btn")[0]
btn.addEventListener('click',(e)=>{
    alert(`Click coordinates:${e.clientX},${e.clientY}\nElement node:${e.currentTarget}`)
})