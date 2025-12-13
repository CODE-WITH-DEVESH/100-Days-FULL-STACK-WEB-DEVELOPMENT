// // filler ( )
// // let l =[10,12,14,16,19,20,69]
// let l =[10,12,14,16,19,20,69]

// const { use } = require("react")

// let fillerArray = l.filter ( (value) =>{
//     if(value%3==0)
//         return true
// })

// console.log(fillerArray);


// // short way 
// let o =[10,12,14,16,19,20,69]






let user=[
    {
        name: "ravi",
        age:23,
    },
    {
        name: "dev",
        age:20,
    },
    {
        name: "pradeep",
        age:43,
    },
    {
        name: "dev",
        age:27,
    },
    {
        name: "hari",
        age:28,
    },
]



let fillerArray=user.filter( (obj)=>obj.age>=18)
console.log(fillerArray)


// find 
let finddata = user.find( ( value ) => value.age==18)
console.log(finddata)