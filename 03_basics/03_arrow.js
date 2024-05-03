// const user = {
//   username: "aman",
//   price: 999,
//   website: "https://aman-gupta.me",

//   welcomeMessage: function () {
//     console.log(`${this.username} , Welcome to Website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "gupta";
// user.welcomeMessage();

//  function chai (){
//     let username = "aman"
//     console.log(this.username);
//  }

//  chai()

//  const chai = function () {
//     let name = "aman"
//    console.log(this.name);
//  }

//  chai()

//! **** Arrow Funtion *****

// const chai = () =>{
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => ({ username: "aman" });

// console.log(addTwo(1));

//!  Immediately Invoke Function Expression (IIFE)


//? SomeTime there is a pollution due to global scope variable to avoid this we use IIFE.

// (function chai () {
//   console.log('DB connected');
// })();


// (() =>{
//    console.log("aman");
// })()


//? ********************************


// const user = {
//   username: "aman",
//   price: 999,
//   website: "https://aman-gupta.me",

//   welcomeMessage: function () {
//     console.log(`${this.username} , Welcome to Website`);
//     // console.log(this);
//   },
// };


// user.welcomeMessage()
// user.username = "gupta"
// user.welcomeMessage()

// console.log(this);


// const chai = () => {
//   console.log(this);
// }

// chai()


// const one = (num1, num2 ) =>{
//    return num1 + num2
// }

// console.log(one(2, 3));


const one = (num1, num2 ) =>  (num1 + num2)
  
  
  console.log(one(2, 3));