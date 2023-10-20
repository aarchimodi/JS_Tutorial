// var variable 
var a1 = 7;
console.log(a1);

// var 5a = 7;
// console.log(5a);
// u cannot start a var name with number it will throw error

// u cannot use reserved words
// let var = 7;


// var is globally scoped and can be accessed from everywhere
{
    var a = 10;
    
}
// var can be redeclared also means can be overwritten which is the problem . let and const overcame this problem
var a = 56;
console.log(a);






// let variable 
// this will throw error bec let is block scoped and wont be accessed outside its block
// {
//     let b = 45; 
// }
// console.log(b);


// let will only work when u access it inside the block
{
    let c = 45;

    // let can be updated but not redeclared means u cannot write let c = 78 , it will throw error
    c = 78;
    console.log(c);
}

// this will also throw error bec const is block scoped and cannot be redeclared
// {
//     const d = 56;

// }
// console.log(d);

// this will work
{
    const d = 56;
    // const can neither be updated nor redeclared means u cant even write d = 99 thwe way we wrote in let
    console.log(d);
}

// note : everytime u declare const u always have to define(initialize) it otherwise it will throw error
// for eg : const a;  no
// const a = 10; yes
// const object can be changed


// let and var wont throw error 
{
    let g;
}



