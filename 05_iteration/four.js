let coding = ["js", "ruby", "cpp", "react", "java", "python"];

const myVal = coding.forEach((item) => {
  console.log(item);
  return item;
});

// console.log(myVal);

//? Filter 

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const filterNum = myNum.filter((num)=> num > 5)

// const filterNum = myNum.filter((num)=> {
//    return num > 5
// })

const newNum = []

myNum.forEach((num) =>{
   if(num > 7){
     newNum.push(num)
   }
})


console.log(newNum);
