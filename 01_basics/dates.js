// Dates

 let myDate = new Date()
 console.log(myDate);


 console.log(myDate.toString());
 console.log(myDate.toDateString());

 console.log(myDate.toLocaleString());
console.log( typeof myDate);

let myCreatedDate = new Date(2024, 0 , 23 , 3, 5)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

console.log(newDate);   
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

let customDate = newDate.toLocaleString('default', {
    weekday: "short",
    hour: "numeric"
})

console.log(customDate);


// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate);


