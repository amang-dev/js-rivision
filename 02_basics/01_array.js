
//! ******* Arrays *************


//? The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name



//! Shallow copy

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//! Deep copy

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made


// const myarr = [1,2,3,4,5]

// console.log(typeof myarr)

//? ***** Array Methods ********
 


// console.log(myarr.includes(2));
// console.log(myarr.indexOf(8));


// const newArr = myarr.join()
// console.log(myarr);
// console.log(newArr);


//? **** slice, splice ***


// const arr = [1,2,3,4,5,6]

// const myn1 = arr.slice(1,3)

// console.log(arr);
// console.log( myn1);


// const myn2= arr.splice(1,3)
// console.log(arr);
// console.log(myn2);






// slice do not modifie the original array
// splice modify the original array


let myarr1 =[1,2,3,5,4,8,9,7]

console.log(myarr1.slice(1, 3));
console.log(myarr1);

console.log(myarr1.splice(1,3));
console.log(myarr1);


 