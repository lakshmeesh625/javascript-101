let string1 = "Abracadabra";

console.log(string1.charAt(0));
console.log(string1.slice(0, 3));
console.log(string1.slice(0, 5));
console.log(string1.slice(0))
console.log(string1.indexOf("c"))
console.log(string1.lastIndexOf("a"))
console.log(string1.length)
console.log(string1.slice(-4, -6))
console.log(string1.substring(4, 2))
console.log(string1.substring(-4, -6))
console.log(string1.slice(4, 2))
//Boolean values

console.log(string1.startsWith("a"))
console.log(string1.includes("z"))
console.log(string1.endsWith("a"))
console.log(string1.replace("a", "b"))
console.log(string1.replaceAll("a", "c"))
console.log(string1.toLowerCase())
console.log(string1.toUpperCase())



let email = "xyz@gamil.com"


console.log(email.indexOf("@"));
console.log(email.slice(0, 3))




//get the email text before the username


console.log(email.slice(0, email.indexOf("@")) + email.slice(email.indexOf("@") + 1))








let string2 = "";

if (string2.startsWith("")){
    console.log("Your username cant be empty")
}
else {
    console.log(`${string2} is your username`)
}


