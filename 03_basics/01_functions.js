

// function myName() {
//     console.log("Hello");
// }

// myName()

// function addTwoNum (num1, num2){
     // let result= num1 + num2 
    // return result;

//     return num1 + num2;
// }

// const result = addTwoNum(4,5)
// console.log(result);

//? *********************************************


function loginUserMessage (username= "sam") {

    if(!username){
      console.log("Plesae enter userName");
      return;
    }
    return `${username} Just Logged in`
}

console.log(loginUserMessage());

//! **** Rest Parameter ******


//** */ In JavaScript, the rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array. It's useful when you want to work with a function that can accept a varying number of arguments.


function calCartPrice (...num){
   return num
}

console.log(calCartPrice(1,2,6));

const user = {
  username: "Aman",
  price: 199
}

function handleObject (anyobject) {
  console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

handleObject(user)


const myNewArr= [100,200,300,400]

function handleArr (getArr){
  return getArr[1]
}

console.log(handleArr(myNewArr));