//! *** Scope ****

// let b = 24;

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(b); //20
// }

// console.log(a); 
// console.log(b);  
// console.log(c);  


//? **********************************************

function one() {
  const username = "Aman";

  function two() {

    const website = "aman-gupta.me";
    console.log(username);

  }

  console.log(website);

  two();
}

one();

//? **********************************************************

// if(true) {
//   const username = "aman"

//   if(username === "aman"){
//     const website = " youtube"
//     console.log(username + website);
//   }

// console.log(website);
// }

// console.log(username);

//? ************************************************************

// console.log(addNum(5));

// function addNum (num) {
//    return num + 1;
// }

// console.log(addTwo(5));
// const addTwo = function (num){
//   return num + 2
// }

//? ********** scope rivision *********

// var a = 500

// let b = 300

// if(true){
//   var a = 10
//   let b = 20
//   const c = 30 
//   console.log("inner: " , b);
// }


// console.log(a);
// console.log(b);
// console.log(c);


//?  *** Hoisting ***** 



function one () {
   const username = "aman"


   function two () {
      const website = "aman-g.me"
      console.log(username);
   }

  //  console.log(website);


   two()
}

one()

//! child can access the variable from parents is clouser


if(true){

  const username = "amanG"
  
  if(username === "amanG"){
    const website = " Portfolio"
    console.log(username + website);
  }

  // console.log(website);

}

// console.log(username);


console.log(addOne(2));

function addOne (num) {
   return num + 1
}

console.log(addTwo(5));

const addTwo = function (num) {
 return num + 1
}
