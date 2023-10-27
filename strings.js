

// can use single or double quotes
let day = "Wednesday" ;
console.log(day.length);
console.log(day[0]);

// using template literals (backticks)
let age = `nineteen`;
console.log(age.length);


// string interpolation
let week1 = "project";
let week2 = "assignment";

let week3 = `i'll complte ${week1} and ${week2}`;
console.log(week3);


// escape sequence charactyers are \, \n, \r

// \' is used to put apostrophe
let beta = "it\' s"
console.log(beta);

// \n will make a new line where s will come to the next line
let alpha = "it\n s"  
console.log(alpha);

// string methods
let myName = "aarchi";
console.log(myName.length);

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// this will print rc as r is on 2nd index and goes till 3rd index , 4th is not included
console.log(myName.slice(2,4));

// when there is one parameter rchi will be shown as from 2nd index to end will be printed
console.log(myName.slice(2));

// string "aarchi" will be replaced by modi
console.log(myName.replace("aarchi","modi"));

// aarchiLord shiv modi will be concatenated
console.log(myName.concat("Lord shiv" + " " + "modi" ));

// trim removes white spaces from the start and end
let d = "   shiv  "
console.log(d.trim());

// The includes() method returns true if a string contains a specified string otherwise false and also it is case sensitive.
// includes can also be used in array
let sentence = "hi how are you";
let word = "how";
console.log(sentence.includes(word));

// extract the amt from sentence
// white spaces are considered and from 15th index string will be printed
let sent = "Please give me 1000";
console.log(sent.slice(15));

// strings are immutable we cannot change them, the methods we used made a new string has not chnaged the string 
// eg : sent[2] = f;
// u cannot do this "Please give me 1000" will only be printed

