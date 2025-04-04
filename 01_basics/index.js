
console.log("Aman");

//! ----Primitive data type

// Number = 2 to the power 53
// BigInt
// String 
// Boolean
// null
// undefined
// symbol

//! ----Non primitive data type

// array
// object

//? ---------------------------------------------------------


 let score = "100"

 console.log(typeof score);
 console.log(typeof(score));


 let valueInNum = Number(score)
 console.log(valueInNum);


console.log(typeof valueInNum);


// console.log(Number(false));
// "33" => 33 
// "12ss0" => NaN
//true ==> 1 false == 0

//? ===============================================

let isLoggedIn = "aman"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
//"aman" => true

//? ===============================================



let someNumber = 33

let stringNum = String(someNumber)
console.log(typeof stringNum);
console.log(stringNum);


//? **************** Oprations **********************

let value = 3
let negValue = -value
console.log(negValue);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "3");
console.log(true);
console.log(+true);
console.log(+"");


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

console.table([num1, num2, num3])


//? prefix postfix

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);


// Prefix operator (++ or --): It first increments or decrements the value of the variable and then returns the updated value.

// let x = 5;
// let y = ++x; // Increment x by 1, then assign it to y
// console.log(x); // Output: 6
// console.log(y); // Output: 6


let  x = 5
console.log(x++  +  ++x)

// Postfix operator (++ or --): It first returns the current value of the variable and then increments or decrements it by 1.

// let a = 5;
// let b = a++; // Assign the current value of a to b, then increment a by 1
// console.log(a); // Output: 6
// console.log(b); // Output: 5



// let x = 5;
// console.log(++x + x++); 
// console.log(x);


// let y = 10;
// console.log(y-- + --y);
// console.log(y);

// let a = 3;
// let b = ++a + a++; 
// console.log(b);
// console.log(a); 


// let m = 2;
// let n = m++ + ++m + m-- - --m;
//      2 + 4 + 4 - 2

// console.log(n);


// let p = 5;
// let q = p++ - ++p + p-- + --p;

// console.log(q);
// console.log(p);

//? *******************************************************

//! comparison operator

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// == loose check
// ===  strict check 

//? *********************************************************



 