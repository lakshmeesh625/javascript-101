let input = document.getElementById("input");
let cTF = document.getElementById("cTF");
let fTC = document.getElementById("fTC");
let submit = document.getElementById("submit");
let result = document.getElementById("result");  
let convertedResult;



submit.onclick = function () {
    let temperature = Number(input.value);

    if (input.value.trim() === "" || !Number.isFinite(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    if (cTF.checked) {
        convertedResult = (temperature * 9 / 5) + 32;
        result.textContent = `${temperature}°C = ${convertedResult}°F`;
    }
    else if (fTC.checked) {
        convertedResult = (temperature - 32) * 5 / 9;
        result.textContent = `${temperature}°F = ${convertedResult}°C`;
    }
    else {
        result.textContent = "Please select a conversion direction.";
    }
};
