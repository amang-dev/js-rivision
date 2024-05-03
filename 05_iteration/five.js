//? map

// const myNum = [1,2,4,5,6,7,8,9,10]

// const mynewNum = myNum.map((num)=> num * 10)
//                       .map((num)=> (num + 1))
//                       .filter((num) => (num > 50))

// console.log(mynewNum);

//? reduce

//  const myNum = [1,2,3]

//  const totalNum = myNum.reduce((acc, currval) => {
//     console.log(`Acc value ${acc} current val ${currval}`);
//    return acc + currval
//  },0)

// console.log(totalNum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 199,
  },

  {
    itemName: "python course",
    price: 599,
  },

  {
    itemName: "DSA",
    price: 999,
  },

  
];

const total = shoppingCart.reduce((acc, item) =>{
      return acc + item.price
},0)

console.log(total);
 