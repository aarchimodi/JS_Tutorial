// Any valid program could be (set of literals, variables, operators) is known as expression 


// basic arithmetic operators
// here a and b are operands, the sign btw them is operator, the whole expression is opearation
let a = 45;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// exponentiation means 45*45*45*45 - 45 to the power 3
console.log(a ** b);

// modulus is the remainder means when u divide 45 by 4  , 1 will be the remainder
console.log(a % b);



// increment / decrement operators

// when u do a++ the op will be 45 only because it will print first and then the value will be incremented
console.log("a++ :" + a++);
// now u see the value of a will be 46
console.log(a);

// but when u do ++b the op will be 5 because the value will be incremneted first and then printed
console.log("++b :" + ++b);
// the value of b will be 5
console.log(b);

// op will be 4
console.log("--b :" + --b);
// op will be 4 only but the value is 3
console.log("b-- :" + b--);
// op will be 3
console.log("b :" + b);



// assignment operators

a += 5;   //same as a = a+5 
console.log(a);

b -= 5;   //same as b = b-5 
console.log(b);

let c = 10;
c *= 5;
console.log(c);


let d = 10;
d **= 3;
console.log(d);

let e = 10;
e %= 3;
console.log(e);


// comparison operators
// gives op in bool
// == checks for the values only
let comp1 = 6;
let comp2 = 7;

// op will be false beac the values are not same 
console.log(comp1 == comp2);

// op will be true bec they are not equal to
console.log(comp1 != comp2);

// op will be false beac neither the value is same nor the datatype
// === checks for both values as well as datatype, both has to be same
console.log(comp1 === comp2);

// op will be true beacuse neither the value is same nor the datatype  and op becomes false when both datatype and values are same
// checks for both value as well as datatype 
console.log(comp1 !== comp2);


// logical operators
// logical AND (&&) - both the conditions should be true 
// op will be false beac both the conditions are false
let x = 5;
let y = 6;
console.log(x>y && y<x);

// logical OR (||) - any one condition should be true
// op will be true bec one of the condition is true
console.log(x<y || y<x);

// logical NOT (!) - true ko false bana dega and false ko true
console.log(!true);
console.log(!false);
