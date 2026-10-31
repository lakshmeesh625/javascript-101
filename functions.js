// a function is a piee of reusable code


function birthdayWish() {
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log("Happy birthday to you dear")
    console.log("Happy birthday to you")


}



birthdayWish();

function birthdayWish2(age, username) {
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log(`Happy birthday to you dear ${username}`)
    console.log("Happy birthday to you")
    console.log(`Congrats you are ${age} years old`)



}




birthdayWish2(21, "spongbob");




function add(a, b) {
    return a + b
}




function subtract(a, b) {
    return a - b
}


function multiply(a, b) {
    return a * b
}



function divide(a, b) {
    return a / b
}



function evenNumber(a) {
    if (a % 2 === 0) {
        return("It's a even number")
    }
    else {
        return("It's not an even number")
    }
}




console.log(evenNumber(6));
console.log(add(2, 4))
console.log(subtract(6, 4))
console.log(multiply(4, 6))
console.log(divide(6, 2))







let subtractionResult = subtract(4, 2)
console.log(subtractionResult)
