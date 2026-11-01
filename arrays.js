let fruits = ["apple", "orange", "mango", "kiwi"];

fruits.push("bannana")

console.log(fruits);



fruits.pop();


console.log(fruits);



fruits.unshift("watermelon");

console.log(fruits);


fruits.shift();
console.log(fruits);



fruits.sort();

console.log(fruits);

fruits.sort().reverse();


console.log(fruits);





//print all the fruits in a given array



for (i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}




fruits.sort();

console.log(fruits);



for (i of fruits) {
    console.log(i)
}




for (i in fruits) {
    console.log(fruits[i])
}




