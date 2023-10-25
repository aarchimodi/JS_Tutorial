// Q1) Use logical operators (&& / ||) to find whether the age of a person lies btw 10 and 20
// let age = prompt("whats your age?"); when u want the data from the user
let age = 10;
// age 10 se badi hogi and 20 se choti hogi
if(age > 10 && age < 20){
    console.log(" age lies between 10 and 20")
}
else{
    console.log(" age  doesnt lies between 10 and 20")
}


// Q2) make use of switch statement
let fruit = "apple";
switch(fruit){
    case "mango" :
        console.log("it is mango");
    break;
    case "apple" :
        console.log("it is apple");
    break;
    case "cherry":
        console.log("it is cherry");
    break;
    case "papaya":
        console.log("it is papaya");
    break;
    default :
        console.log("invalid");

}
// in switch if one of the case matches then uske niche k sare case print ho jayenge along with the default case to avoid this we apply break

let cars = "bmw";
switch(cars){
    case "benz" :
        console.log("it is benz");
    break;
    case "lambo":
        console.log("it is mango");
    break;
    case "bmw":
       
           console.log("bmw");
      
        break;
    default :
        {
            console.log("invalid");
        }
}

// Q3) write a js program such that the number should be divisible by 2 and 3

let number = 12;
if(number%2 == 0 && number % 3 == 0){
    console.log("number is divisible by 2 and 3");
}
else {
    console.log("number is not divisible by 2 and 3");
}

// Q4) write a js program such that the number should be either divisible by 2 or 3
let num1 = 2;
if(num1%2 == 0 || num1%3 == 0){
    console.log("number is divisible by either 2 or 3");
}
else{
    console.log("number is not divisible by either 2 or 3");
}


// Q5)make use of ternary opeartor

// (condition) ? "" : "";
let age1 = 21;
let m = (age1 >= 21) ? "u can drive" : "u cannot drive";
console.log(m);
