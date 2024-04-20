//? singleton
//? Object.create


// **** object literals ****

// const mySym = Symbol("key1")

// const jsUser = {
//     name: 'aman',
//     "full name": "aman Gupta",
//     [mySym]: "key001",
//     age: 18,
//     location: 'Bihar',
//     email: 'aman@gmail.com',
//     isLoggedin : false,
//     lastLogin: ["mon", "tue"]
// }

// console.log(jsUser["full name"]);
// console.log(jsUser["age"]);
// console.log(typeof jsUser[mySym]);
// console.log(typeof mySym);


// jsUser.email = "gupta@gmail.com"

// console.log(jsUser);

// Object.freeze(jsUser)
// jsUser.email = "123@gmail.com"
// console.log(jsUser);



//! function is treated as type one citizen in javascript


// jsUser.gretting = function () {
//  return "hello user";
// }

// console.log(jsUser.gretting());


// jsUser.grettingTwo = function() {
//     return `Hello user ${this["full name"]}`
// }

// console.log(jsUser.grettingTwo());

// console.log(jsUser);


 