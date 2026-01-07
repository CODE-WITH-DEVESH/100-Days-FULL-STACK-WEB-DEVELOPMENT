
// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data Loaded")
//         },2000)
//     })
// }

// const { jsx } = require("react/jsx-runtime");

// async function loadData() {
//     let result =await fetchData()
//     console.log(result)
// }
// loadData()

// async function loadData() {

//     try {
//         let res =await fetchData()
//         console.log(res);
        
//     } catch (err) {
//         console.log(err);
        
//     }
    
// }










// let arr1 =[1,2,4,5]
// let arr2 =[...arr1]
// console.log(arr2);

// let frontend = ['HtmL','CSS']
// let backend = ['Node','DB']

// let FullStack = [...frontend,...backend]
// console.log(FullStack);

// let students = ["Amna","Rohit"]
// let newStu =[...students,"DEvesh"]
// console.log(newStu);



// function add (...number){
//     console.log(number);

    
// }
// add(1,2,3)

// function total(...num){
//     let sum =0;
//     for(let n of num){
//         sum+=n
//     }
//     return sum;

// }
// console.log(total(10,20,30))


// function student(name,...marks){
//     console.log(name);
//     console.log(marks);
    
// }
// student("Devesh",89,67,55)


// function addStudents(course,...student){
//     console.log(course,student);
    
// }
// addStudents("MCA Web JS Java", "Devesh","Aman")




// // Default Parameters


// function greet(name ="Guest"){
//     console.log("Hello " +name);
    
// }
// greet()
// greet()

// function multiply(a,b=3){
//     console.log(a*b);
    
// }
// multiply(6)
// multiply(6,2)

// function calculatePrice(price,discount=0){
//     return price -(price*discount)
// }

// console.log(  
// calculatePrice(1000),

// calculatePrice(1000,0.1)
// );


// function createUser(name,role="User"){
//     console.log(name,role);
    
// }
// createUser("Devesh")
// createUser("Aman","Admin")


// Optional Chaining (?)

// let user={}
// console.log(user.profile.city)

// let user={}
// console.log(user.profile?.city);


// let student ={
//     name:"Devesh",
//     marks:{
//         math:90
//     }

// }
// console.log(student.marks?.math);
// console.log(student.marks?.science);

// let apiData={
//     user:{
//         name:"Amna"
//     }
// }
// console.log(apiData.user?.email);

// let users =[]
// console.log(users[0]?.name);

// let obj ={}
// obj.show?.();

// localStorage vs sessionStorage
// save data 
// localStorage.setItem('name','Devesh')

// Get data
// let name=localStorage.getItem('name')
// console.log(name);


// localStorage.removeItem('name')

// localStorage.clear()

// let user ={name:"Devesh",city:"Bareilly"}
// localStorage.setItem('user',JSON.stringify(user))

// let data =JSON.parse(localStorage.getItem('user'))
// console.log(data.name);


// function login(username){
//     localStorage.setItem('LoggedUser',username)

// }
// function showUser(){
//     let user =localStorage.getItem("loggedUser")
//     if(user){
//         console.log("Welcome"+ user);

        
//     }
// }

// sessionStorage.setItem("OPT","1234")
// console.log(sessionStorage.getItem("OTP"));



// localStorage.setItem('age',21)
// console.log(localStorage.getItem('age'));



// try {
//     console.log(User.name)
// } catch (err) {
//     console.log("Somethig went wrong")
// }
// // function login(password){
// //     if(password.length<6){
// //         throw new Error("Password too short")
// //     }
// //     return "Login Succes"
// // }


// try{
//     let res =login('123')
//     console.log(res);

    
// } catch(err){
//     console.log(err.message);
    

// }


async function loadData() {
    try{
        let res =await fetchData()
        console.log(res);

        
    }catch(err){
        console.log("Failed To load Data")
    }

    
}