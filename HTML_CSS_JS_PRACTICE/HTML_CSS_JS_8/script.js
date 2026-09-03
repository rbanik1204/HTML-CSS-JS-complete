let obj = document.body.children[1].firstElementChild;
console.log(obj);
// const ChangeBgColor = () =>{
//     obj.style.background = "red";
// }
// console.log("First child of body element node is",obj.firstChild);
// console.log("First element node child of body Element node is",obj.firstElementChild);
console.log("For HTMLcollection of row element nodes:",obj.rows);
console.log("For HTMLcollection of header element nodes:",obj.tHead);
console.log("For HTML collection of Body element nodes:",obj.tBodies);
console.log("For HTML collection of footer element nodes:",obj.tFoot);
console.log("For table caption:",obj.caption);
obj.createCaption().innerText = "This is my new caption";
// obj.createTHead().innerText= "This is my new header";
// obj.deleteCaption();
// console.log(obj.tHead.cells[1]);
console.log(obj.tHead.rows[0].cells[0].innerText);
console.log(obj.tBodies[0].rows[1].cells[1].innerText);
console.log(obj.rows[1].cells[0].innerText);
/*
summerising Every properties of table element
1. rows: HTMLCollection of all row element nodes (tr) - obj.rows
2. tHead: HTMLCollection of all header element nodes (thead) - obj.tHead
3. tBodies: HTMLCollection of all body element nodes (tbody) - obj.tBodies
4. tFoot: HTMLCollection of all footer element nodes (tfoot) - obj.tFoot
5. caption: HTMLCollection of all caption element nodes (caption) - obj.caption
6. To access Cells
   - Use the `.cells[index]` property on the row element (tr) to get all cells (td) in that row.
   - Example: `obj.rows[0].cells[0]` gives the first cell of the first row.
*/