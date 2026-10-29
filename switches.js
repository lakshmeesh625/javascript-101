let day = 5;

switch (day) {
    case 1:
        console.log("It's Sunday")
        break;
    case 2:
        console.log("It's Monday")
        break;       
    case 3:
        console.log("It's  Tuesday")
        break;
    case 4:
        console.log("It's wednesday")
        break;
    case 5:
        console.log("It's Thursday")
        break;
    case 6:
        console.log("It's friday")
        break;
    case 7:
        console.log("It's saturday")
        break;
    default:
        console.log("Invalid day")
}




let marks = 75;
let grade;

switch (true) {
    case marks >= 80:
        grade = "A"
        break;
    case marks >= 60:
        grade = "B"
        break;
    case marks >= 40:
        grade = "C"
        break;
    case marks >= 0 && marks < 40:
        grade: "D"
        
        break;
    default:
        grade ="Invalid marks"
}

console.log(grade)


let grade2 = "A";
let marks2;


switch (true) {
    case grade2 == "A":
        marks2 = "80 to 100"
        break;
    case grade2 == "B":
        marks2 = "60 to 80"
        break;
    case grade2 == "C":
        marks2 = "35  to 60"
        break;
    case grade2 == "F":
        marks2 == "0 to 34"
        break;
    default:
        marks2 == "Invalid grade"
}

console.log(marks2)