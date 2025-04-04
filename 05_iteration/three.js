
//? for each

let coding = ["js", "ruby", "cpp", "react", "java", "python"]


coding.forEach(  function (val) {
    console.log(val);
} )




coding.forEach((item)=>{
   console.log(item);
})


function printme (print) {
    console.log(print);
}

coding.forEach(printme)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCode = [
    {
        langName: "javascript",
        fileName: "js"
    },

    {
        langName: "Java",
        fileName: "java"
    },

    {
        langName: "Python",
        fileName: "py"
    },
]

myCode.forEach((item)=>{
   console.log(item.langName);
})