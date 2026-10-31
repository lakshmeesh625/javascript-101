for (i = 1; i < 10; i++){
    console.log(i)
}




//print all the nummbers from 1 to 20 except 13


for (j = 1; j <= 20; j++){
    if (j === 13) {
        continue
    }
    else {
        console.log(j)
    }
}



//stop printing number when it meets 13


for (k = 1; k <= 20; k+=5) {
    if (k === 13) {
        break
    }
    else {
        console.log(k)
    }
}


//Print the first 5 natural numbers


for (i = 1; i <= 5; i++){
    console.log(i)
}

//print first 10 even numbers;


for (i = 0; i <= 40; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
    
}



let count = 10;


for (i = 0; count < 20; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
    count++
}





