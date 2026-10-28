let roll = document.getElementById("roll")
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")
let result3 = document.getElementById("result3")




roll.onclick = function () {
    result1.textContent = Math.floor(Math.random() * 6) + 1
    result2.textContent = Math.floor(Math.random() * 6) + 1
    result3.textContent = Math.floor(Math.random() * 6) + 1

}