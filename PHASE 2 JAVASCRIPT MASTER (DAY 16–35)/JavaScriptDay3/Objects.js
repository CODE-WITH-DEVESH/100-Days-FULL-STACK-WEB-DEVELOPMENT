// Javascript Object


// const data={
//     user_name: "Devesh",
//     // age:23,
//     user_email: "dksgoogle.com",
//     user_phone: 94233334,
//     user_address:"Bareilly"
// }




// data['age']

// add VALue
// data.age=34


// console.log(data)
// console.log(data.user_address)
// console.log(data['user_phone'])


// data.user_address="bilsi"
// console.log(data)


//Destructuring 


let userName= "Love"
const data={
    user_name: "Devesh",
    age:23,
    user_email: "dksgoogle@.com",
    user_phone: 94233334,
    user_address:"Bareilly",
    

    userdata:{
        cityName: "Bareilly",
        state: "UP",
        country: "India"

    }
}
let {user_email,...otherDetails}=data // Rest Operator

// console.log(otherDetails);


// console.log(cityName);
// console.log(state);


// Nested Destructuring With Operator

let{userdata:{ cityName,state}}=data



// Array Destructuring  


// let color=["red","green", "Yellow"]

// let[firstColor,secondcolor ,ws]= color

// console.log(firstColor,secondcolor);
// console.log(secondcolor ,ws);



// Skipping Item 

// let l =[12,23,45,67,78]


// let [a,...rest]=l
// console.log(a,rest);

// let[, , a]=l
// console.log(a)


// let l =[1,2,3,4,5,6,7]
// let m=l // deep copy

// console.log(l ,"Before L");
// console.log(m , "before M");
// m.push(36)
// console.log(m);
// console.log(l);

let k =[1,2,3,4,5,6,7]
let h =[...k]

console.log(k);




