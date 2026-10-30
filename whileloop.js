//execute code while some condition is true
let username = "";


while (username == "" || username === null) {
   username =  window.prompt("Enter your username")
}

console.log(username)


//do while loops
//do something when the condition satisfies


let username2 = "";


do {
   username2 = window.prompt("Your username cant be  empty")

} while (username2 == "")
   


let loggedIn = false;
let username3;
let password;   



while (!loggedIn) {
   username3 = window.prompt("What's your your username3")
   password = window.prompt("Whats your password")
    
   if (username3 === "username" && password === "password") {
      loggedIn = true;
      console.log("You are logged in")
   }
   else {
      console.log("Incorrect credentials")
   }
      
}


