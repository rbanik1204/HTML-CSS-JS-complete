console.log(document,"Perfectly Working!");
let elem = document.getElementsByClassName("first")[0];
elem.hasAttribute("att_one");//giving true
console.log(elem.getAttribute("att_one"));//prints att value i.e., anything here
elem.setAttribute("att_one","thing");
console.log(elem.getAttribute("att_one"))
elem.removeAttribute("att_one");
// elem.getAttribute("att_one")
// null --> so now as the attribute is removed hence printing null
//attributes returns namedNodeMap