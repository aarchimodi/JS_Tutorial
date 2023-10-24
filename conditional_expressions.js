let a = "string";
// parseInt is a number's method used to convert string into number 
a = Number.parseInt(a);
console.log(typeof a);

// if statement - in if stmnt if the condition is true only then the op will be printed 
let b = 15;
if(b > 18 ){
    console.log("eligible for driving")
}

// if_else stmnt
if(b > 21){
    console.log("eligible for driving")
}
else{
    console.log("not eligible for driving")
}


// if...else if...else if...else - sometimes we might want to keep rechecking the conditions one by one until one matches
//  there could be multiple if..else conditions could be 50 or 100 or so on, from that only one condition will work
// 
if(b > 21){
    console.log("u can drive")
}
else if (b == 10 && b >= 10){
    console.log("u cannot even think of driving");
}
else if(b > 40){
    console.log("senoir citizen");
}
else{
    console.log("invalid");
}

// ternary operator - works like if else condition
let marks = 65;
console.log(marks > 45? "pass" : "fail");