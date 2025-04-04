//? for Loop

// for (let i = 0; i <= 10; i++) {
//      const element = i
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  console.log("**********************************");

  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + " = " + i * j);
  }
}

//? While Loop

let index = 1;

while (index <= 10) {
  console.log(`Value is ${index}`);

  index =  index + 1
}

let  arr = 0

let myArr = ["aman", "gupta", "chaman"]

while(arr < myArr.length){
  console.log(`value is ${myArr[arr]}`);

  arr = arr+ 1;
}

//? do while

let score = 11;

do {
  console.log(`value is ${score}`);
  score++;
} while (score <= 10);
