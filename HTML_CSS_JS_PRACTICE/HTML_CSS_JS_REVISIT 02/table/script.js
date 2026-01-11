let t = document.querySelectorAll(".table")[0].children[0].firstElementChild
console.log(t)
let tBody = t.children[1]
console.log(tBody.rows)
console.log(t.children[0].rows[0].rowIndex);
//SectionRowIndex -> Position of row within its section such as 
//tHead,tBodies,tFoot