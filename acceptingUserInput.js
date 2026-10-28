let username = window.prompt("What is your username? ");
let userAge = window.prompt("What is your userage? ")
let userUni = window.prompt("Which UNI did you go to ? ")


console.log(`The user's name is ${username} their age is ${userAge} and they go to ${userUni}`)



//using textbox


let userName;


let submit = document.getElementById("submit")



submit.onclick = function () {
    userName = document.getElementById("userName").value
}
    console.log(userName);










