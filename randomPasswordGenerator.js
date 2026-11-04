let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
let allCharacters = alphabets + numbers + specialCharacters;

function generateRandomPassword(length) {   
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}



console.log(generateRandomPassword(12));
console.log(generateRandomPassword(16));



let randomIndex = Math.floor(Math.random() * allCharacters.length)
console.log(randomIndex)

console.log("abcdefghijkl"[12])


