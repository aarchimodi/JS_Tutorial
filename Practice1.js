//1) create a variable with type string and try to add number to it
let a = "aarchi";
let b = 89;
console.log (a + b);   //when u add 2 things to the string they will concatenate
console.log( typeof b);
console.log(typeof (a+b)); //when u want to know the type of the a + b, put it into the brackets



// 2) create a const object in js. can u change it to hold a number later?
// ans : no

// here obj is also known as the reference of the object
const obj = {
    name : "aarchi",
    no : 217288,  //dont put nos in quotes 
    section : "f1"
}
console.log(obj);
// const obj = 3456; (this will throw error and hence u cannot chnage it to the number)



// 3)add a key value pair to the previous object
obj["friend"] = "nyra";
obj["subject"] = "Computer science";

console.log(obj);

// when u want to change one of the key value pair
// in objects u can change the key value pair just like we did in name but u cannot assign a new value the obj as it is a const
obj["name"] = "ram";
console.log(obj);


// also u can freeze the object value,  if u dont want anyone to change it
Object.freeze(obj);

// now if u try to change the name it wont chnage 
obj["name"] = "lakshman";
console.log(obj);


// 4) create a dictionary
const dict = {
    delighted : "very pleased",
    gathered : "brought together",
    ancient : "very old"
}
console.log(dict);

// there are 2 ways access the object values :
console.log(dict.ancient);
console.log(dict["gathered"]);  //we put double quotes bec it is considered as string

