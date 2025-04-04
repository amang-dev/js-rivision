// console.log("value of age is" , age);

// var age = 20

// console.log("value of age is" , age);

/* Hoisting
  
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase



 Execution Context are of two Types:
       1. Global Execution Context
       2. Function Execution Context

  Phases of the JavaScript Execution Context
     
        1. Creation Phase
                1. Memory 
                2. Code
        2. Execution Phase 
 
*/

//?----------------------------------------

// age= 100;

// console.log("value of age is" , age);

// let age = 20;

// console.log("value of age is" , age);

// Let and const Temporal dead zone

//? ***********************************************

// myFun()

// var myFun = function (){
//  console.log("First");
// }

// myFun();

// function myFun() {
//  console.log("Second");
// }

// myFun();

//? **************************************

// var variable = 10;

// (() => {
//   console.log(variable);

//   variable = 20;

//   console.log(variable);
// })(); //iife

// console.log(variable);
// var variable = 30;

// console.log(variable);

// foo = 30;

// console.log("foo", foo);

// var foo = 100;

// console.log("foo", foo);

//? *********************************

// variable = 10;

// (() => {
//         foo =100;
//         console.log(variable);
//         var foo = 100;
//         variable = 20;
//         console.log(variable);
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

//? *******************************\

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// var creates one i for the whole loop, so the final value (10) is printed every time.

// let creates a new i for each loop, so the correct numbers (0-9) are printed.

//? **********************************

// const aman = {
//   name: "aman gupta",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// aman.sayName()

// setTimeout(aman.sayName.bind(aman), 5000);

//? ******************************************

// const obj = {
//  height: 30,
// }
// console.log(obj.height);

// delete obj.height

// console.log(obj.height);

//? 1 . what is javascript

// Javascript is high level programming language. that is widely use to create interactive effect within web browser.

//? 2. What are templet litrels

// it is used to embedded variable and expression directly in to the string.

//? What is hoisting

//? Diff var let const

// if(true){
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var has function scope let and const has block scope

//?  primitive and non primitive

/* Primitive(immutable)can not be modified

   Number
   string 
   boolean
   Null 
   undefine
   symbol
   BigInt

   

Non Primitive
  Array
  Object
  Function
*/

// console.log(isNaN('123'));

//? What is null and undefined

// Both  indicated absense of a value.

//? What is Purpose of the Map Method in javascript?

// const number = [1,2,3,4,5]

// const double = number.map(num => num *2 )
// console.log(double);
// console.log(number);

//? What is Event Bubbling and event Capturing

//? What are higher Order Function?

/* 
A Higher-Order Function is simply a function that:

Takes another function as an argument, OR

Returns another function.

*/

//? IIFE

// (function(){
//    console.log("Hello Word");
// }) ();

//? What is Clouser

// A closure is a function that remembers the variables from its outer function even after the outer function has finished executing.

// function outerFunc(){

//         let outerVar = "i am outer var"

//         function innerFunc(){
//            console.log(outerVar);
//         }

//         return innerFunc
// }

// const clouser = outerFunc()

// clouser()

// function counter() {

//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },

//     decrement: function () {
//       count--;
//       return count;
//     },

//     display: function () {
//       let message = "curr count val " + count;

//       return message;
//     },
//   };

// }

// counter()

// const myCounter = counter()

// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log(myCounter.display());

//? How to SetTimeOut and SetInterval Work?

// const timerId = setTimeout(() =>{
//    console.log("After 2 ");
// },2000)

// clearInterval(timerId)

// const timerId = setInterval(()=>{
//         console.log("Every 2 sec");
// },2000)

// setTimeout(()=>{
//    clearInterval(timerId)
// },5000)

//? Explain the concept of promise in javascript?

/* A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

Pending
Resove
Reject



🚀 Why Use Promises?
✅ Avoids callback hell
✅ Improves readability & maintainability
✅ Works well with APIs & async tasks


.then() → Runs when the Promise is resolved

.catch() → Runs when the Promise is rejected

.finally() → Runs in both cases (optional)

*/

// const data = { name: "john", age: 30 };

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error");
//   });



