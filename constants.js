//  constants are the variables where their values cant be reassigned

const PI = 3.14;
// calculate the circumference of the circle



let radius = window.prompt("Enter the radius of the circle");

radius = Number(radius)

let C = 2 * PI * radius

console.log(`The circumference of the given circle is  ${Math.round(C, 3)}`)




