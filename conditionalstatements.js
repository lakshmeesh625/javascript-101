//conditional statements are the statements that follow one method if  a condition satiesfies or dont follow if a condition doesnt satisfies



let age = 18;
 


if (age >= 18) {
    console.log("You can drive ")
}
else {
    console.log("You cant drive")
}



//if else if
//more than 2 conditions

let isSunny = false;
let isRainy = false;


if (isSunny && isRainy) {
    console.log("Please bring both umrealla and Raincoat")
}
else if (isSunny && !isRainy) {
    console.log("Just bring your umbrella no need of raincoat")
}

else if (isRainy && !isSunny) {
    console.log("Just bring your raincoat no need of bringing your umbrella")
}
else {
    console.log("Come freely")
}



