// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Aman";
tinderUser.isLoggedInn = false;

// console.log(tinderUser);

// const regularUser = {
//     email : "aman@gmail.com",
//     fullName: {
//         firstName: 'aman',
//         lastName: 'gupta',
//     }
// }

// console.log(regularUser.fullName?.firstName);

// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "a", 5: "b", 6: "c" };
// const obj3 = { 7: "a", 8: "b", 9: "c" };

// const obj4= {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)

// const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

// const user = [
//   {
//     id: "1",
//     email: "a@gmail.com",
//   },
//   {
//     id: "1",
//     email: "a@gmail.com",
//   },
//   {
//     id: "1",
//     email: "a@gmail.com",
//   },
// ];

// console.log(user[1].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

//? ****************************************************************

const course = {
  courseName: "jsHindi",
  price: 999,
  courseInstructor: "Hitesh"
};

console.log(course.courseInstructor);


const {courseInstructor: instructor} = course;

console.log(instructor);



//? ********************************************





