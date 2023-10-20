
// There are 2 types of daatypes : primitive and non-primitive

// nn ss bb u - remember this for primitive datatypes

// nn - null and number
let a = null;
let b = 365;

// ss - string and symbol
let c = "aarchi";
let d = Symbol("im a nice symbol");

// bb - bool and bigint- represent integers that are too large (Unlike number, the BigInt data type doesn't represent decimal values. It only represents whole numbers.)
let e = true;
let f = BigInt(56778838);

// u - undefined
// let g = undefined;
let g;

console.log(a,b,c,d,e,f,g);

// if i want to know the datatype of any variable
console.log(typeof b);


// non-primitive has objects, arrays and regex
const item = {
    "name" : "aarchi",
    "role" : "student",
    "location" :"mumbai",
    "country" : "india"
}
// prints the whole object with all the key-value pairs
console.log(item);

// prints specific key-value pair
console.log(item["name"]);