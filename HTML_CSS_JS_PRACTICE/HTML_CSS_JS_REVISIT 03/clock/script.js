const hour_tens = document.querySelector(".hours-tens-hand")
const hour_units = document.querySelector(".hours-tens-hand")
const minute_tens = document.querySelector(".minutes-tens-hand")
const minute_units = document.querySelector(".minutes-units-hand")
const second_tens = document.querySelector(".seconds-tens-hand")
const second_units = document.querySelector(".seconds-units-hand")

let date = new Date();
let seconds_ten = Math.floor(date.getSeconds()/10)
let seconds_unit = date.getSeconds() % 10
console.log(seconds_ten,seconds_unit)

