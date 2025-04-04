
//?  **** Primitive ****(call by value)

// string      
// Number
// Boolean
// null
// undefined
// symbol
// BigInt

//? *** Non Primitive type *** (Reference)

// Array 
// Object
// Functions

//! **********************************************

//? What is JavaScript 

// JavaScript is a programming language that allows developers to create interactive web pages. single-threaded, It is also known as the scripting language for webpages.

// JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. 


//? *************************************************

// Stack Memmory - (Primitive)
// Heap Memory - (Non-Primitive)

let myName = "amanG"

let myOtherName = myName
myOtherName = "Bittu"

console.log(myName);
console.log(myOtherName);



let userOne = {
    email: "aman@gmail.com",
    upi: "aman@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);



//? Stack memory(Primitive)
//? Heap memory (non-pri mitive)

let myyname = "aman gupta"
 let anotherrname= myyname
 anotherrname = "abc"

 console.log(myyname);
 console.log(anotherrname);
