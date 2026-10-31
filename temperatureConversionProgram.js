let input = document.getElementById("input");
let cTF = document.getElementById("cTF");
let fTC = document.getElementById("fTC");
let submit = document.getElementById("submit");
let result = document.getElementById("result");  
let convertedResult;



submit.onclick = function () {
    if (cTF.checked) {
        convertedResult = (input.value * 9 / 5) + 32
        result.textContent = `The converted input when converted into fahreneit is ${convertedResult}`
    }
    else if (fTC.checked) {
        convertedResult = (input.value - 32) * 5 / 9
        result.textContent = `The converted input when converted into fahreneit is ${convertedResult}`
        
    }
    else {
          result.textContent = `You havent selected anything`
    }
}

