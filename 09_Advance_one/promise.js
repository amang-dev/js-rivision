const promise = new Promise(function (resolve, reject) {
  //db call

  setTimeout(function () {
    console.log("Task Complete");
    resolve();
  }, 1000);
});

promise.then(function () {
  console.log("Promise Consumed");
});



const mypromise = new Promise(function (resolve, reject) {
    
  setTimeout(()=>{
    console.log("Complete");
    resolve()
  },1000)

})



new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("ASYNC task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "rohit", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ name: "john", email: "jondoe@abc.com" });
    } else {
      reject("Error somthing went Wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=> console.log("promise resolved"))


const promiseFive = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        const error = true

        if(!error){
            resolve({username: "javascript", email:"js@mail.com"})
        } else{
            reject("js Went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
 try {
    const response = await promiseFive
    console.log(response);
 } catch (error) {
    console.log(error);
 }
}

consumePromiseFive()


// async function getAllUser(){

//    try {
//     const response = await fetch("https://api.github.com/users/Aman99344")

//     const data = await response.json()
//     console.log(data);

//    } catch (error) {
//     console.log("e: ", error);
//    }
// }

// getAllUser()


// fetch("https://api.github.com/users/Aman99344")
// .then((function(response){
//     return response.json()
// }))
// .then(function(data){
//    console.log(data);
// }).catch(function(error){
//    console.log(error);
// })
