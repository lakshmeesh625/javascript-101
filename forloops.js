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


