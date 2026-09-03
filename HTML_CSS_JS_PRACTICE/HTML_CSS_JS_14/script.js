let elem = document.getElementById("first");
// console.log(elem);
// elem.insertAdjacentHTML('beforebegin','<div class="inside">Hello</div>');
elem.insertAdjacentHTML('afterbegin','<div class="inside">Hello</div>');
// elem.insertAdjacentHTML('beforeend','<div class="inside">Hello</div>');
// elem.insertAdjacentHTML('afterbegin','<div class="inside">Hello</div>');
elem.remove();// removes the element