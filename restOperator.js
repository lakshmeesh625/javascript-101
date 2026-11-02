//allow a function to work with variable number of arguments by bundling them into an array


function sum(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}




console.log(sum(1, 2, 3, 4, 5));


function multiply(multiplier, ...numbers) {
    let total = 1;
    for (let n of numbers) {
        total *= n;
    }
    return total * multiplier;
}

console.log(multiply(2, 3, 4, 5));


