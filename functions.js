// functions are made to separate the logic and provides code reusabilty


// x and y are local variables  
function myFunc(x,y){
    return 1+(x+y)/2
}

let a = 2;
let b = 3;
let c = 4;

// whenever u want use the function u need to call/invoke the function
console.log("one plus avg of a and b", myFunc(a,b));
console.log("one plus avg of b and c", myFunc(b,c));
console.log("one plus avg of c and a", myFunc(c,a));
    
// another way of creating functions is known as arrow method
let sum = (p,q) =>{
    return p +q
}

console.log(sum(1,3));

// function w/o parameters
const hello = () =>{
    return console.log("hi");
}

hello(); //// this is how a function is called so wtv is the vslue in console will come into the hello() and op printed will be hi

