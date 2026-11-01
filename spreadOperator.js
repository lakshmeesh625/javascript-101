// spread = expands an array into individual elements



let vegetables = ["carrot", "broccoli", "spinach", "pepper"];

console.log(...vegetables);

let number = [1, 2, 3, 4, 5];

console.log(Math.max(...number));

console.log(Math.min(...number));

let fruits = ["apple", "banana", "orange"];

let allFoods = [...vegetables, ...fruits, "milk", "cheese"];


console.log(allFoods);

