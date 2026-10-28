let display = document.getElementById("display")
let increase = document.getElementById("increase")
let reset = document.getElementById("reset")
let decrease = document.getElementById("decrease")
let score = 0;


increase.onclick = function () {
    score++;
    display.textContent = score

}



reset.onclick = function () {
    score = 0 
    display.textContent = score
}


decrease.onclick = function () {
    score--
    display.textContent = score
}


