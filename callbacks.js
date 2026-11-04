function hi() {
    console.log("Hello, world!");
}



function hello(hi) {
    console.log("Hello, everyone!");
    return hi();
}




hello(hi);


