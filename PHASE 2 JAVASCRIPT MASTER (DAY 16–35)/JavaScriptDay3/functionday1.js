//   One

// function displayname (){
//     console.log("Welcome")

// }
// displayname()

// Two

// function showcase(){
//     alert("Hey babe")

// }

// Three

// function addnumber(){
//     console.log(10+23)
// }
// addnumber()

// Function with Parameters

// function show_Name(userName){
// console.log(`Welcome to ${userName}`)

// }

// show_Name("Devesh")
// show_Name("Love")
// show_Name("Ravi")

// Add Two Number

// function adddata(num1, num2=9){

//     console.log(`Add Two number : ${num1+num2}`)
// }
// adddata(10,21)
// adddata(310)

// four

// function sumData (...allvalue){
//     console.log(allvalue)

// }
// sumData(12,23,45,67)

// Return Type Function

// function adddata(num1,num2){
//         // console.log(`Add Two number : ${num1+num2}`)

//         return num1+num2

// }
// console.log(adddata(22,22))

// function texcal(price){
//     // console.log(price*.10)
//     return price*.10

// }

// let productPrice = 100

// let total = texcal(productPrice) +productPrice
// console.log(total)

// Anonymous Function

// let displayname =function(){
//     console.log("Welcome to My YT")
// }

// displayname()

// call Back FUnction

// function mondata(num1,num2){
//     return num1-num2
// }

// function adddata(num1,num2){

//     return num1+num2
// }
// function cal(num1,num2,callback){

//     console.log("final Call",callback(num1,num2))

// }
// cal(12,2,adddata)
// cal(12,3,mondata)

// Arrow Function (ES6)

// =()=>{}

// let adddata=()=>{

// console.log("Welcome")
// }

// adddata()

// let addtwonumber=(n,m)=>{
//     return n+m
// }
// console.log(addtwonumber(22,22))

// task 1

// let vowelLatters = "aeiouaAEIOU";

// let checkVowelsCount = (str) => {
//   let count = 0;
//   for (let v of str) {
//     console.log(v, vowelLatters);
//     if (vowelLatters.includes(v)) {
//       // console.log(v)
//       count++;
//     }
//   }
//   return count;
// };

// console.log(checkVowelsCount("Welcometodevesh"));



// tast 2


// let fatorial=(x)=>{

//     let fac=1
//     for(let i=1; i<=x; i++){
//         // console.log(i)
//         fac*=i

//     }
//     return fac

// }
// console.log(fatorial(5))
// console.log(fatorial(6))


// Task 3
function checkWordCount(str){
    console.log(str.split(" ").length)






}
checkWordCount("Welcome to WS Help line")