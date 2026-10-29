//to check whether a checkbox is checked or a radio button is selected


let subscribe = document.getElementById("subscribe")
let visa = document.getElementById("visa")
let rupay = document.getElementById("rupay")
let mastercard = document.getElementById("mastercard")
let submit = document.getElementById("submit")



submit.onclick = function () {
    if (subscribe.checked) {
        console.log("You are subscribed")
    }
    else {
        console.log("You are not subscribed")
    }

    if (visa.checked) {
        console.log("You have chosen visa as your payment method")

    }

    else if (rupay.checked) {
        console.log("You have chosen rupay as your payment method")
    }

    else if (mastercard.checked) {
        console.log("You have chosen mastercard as your payment method")
    }
    else {
        console.log("You ahvent chosen any payment method")
    }
}








