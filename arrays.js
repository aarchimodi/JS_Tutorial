// creating an array
// false will be printed bec it is on the 2nd index
const a = [7, "apple", false];
console.log(a[2]);
// length property doesnt count from 0 it will count fromm 1
console.log(a.length);

// u can add an element into the array, count from zero and add that specific index u want add element
a[3] = [8];

// [ 7, 'apple', false, [ 8 ] ] will be printed
console.log(a)

// op will be 4
console.log(a.length);


// arrays are mutable means u can also chnage the value, instead of 7 hello will be replaced
a[0] = "hello";
console.log(typeof a)
// array is an object


// array methods
let num = [1, 2, 3];
console.log(typeof num.toString());
// 1.2.3 will be printed and yes this is a string
console.log( num.join("."));

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// op : [ 1, 2 ] 3
console.log(num, num.pop());

// Appends new elements to the end of an array, and returns the new length of the array.
// op : [ 1, 2, 'edf' ] 3
console.log(num, num.push("edf"));

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// op : [ 2, 'edf' ] 1
console.log(num, num.shift());

// Inserts new elements at the start of an array, and returns the new length of the array.
// op : [ 'hi', 2, 'edf' ] 3
console.log(num, num.unshift("hi"));