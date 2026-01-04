// let heading = document.getElementById('title')

const { Suspense } = require("react");

// heading.innerHTML ="Hello Devesh"

// let massage = document.querySelector('.msg')
// massage.innerText ="Welcome to JS DOM"

// heading.style.color ='red'
// heading.style.backgroundColor ="yellow"

// let statusText = document.getElementById('status')
// statusText.innerText ="Online"
// statusText.style.color ="green"

//  // 1

// let headingtext = document.getElementById('name')
// headingtext.innerHTML = 'Devesh Kumar '

//  // 2
// let paracolor = document.getElementById('info')
// paracolor.style.color ="blue"


//  3

// let modechange = document.getElementById('mode')
// modechange.innerHTML ="Dark Mode"
// modechange.style.color ="white"
// modechange.style.backgroundColor ="black"

// innerText → sirf text

// innerHTML → text + HTML tags
// Rule yaad rakho

// #id → id

// .class → class

// function sayHello(){
//     alert("Hello Devesh")
// }

// let buttonbtn =document.getElementById('btn')
// let textbtn =document.getElementById('text')

// buttonbtn.addEventListener('click',function(){
//     textbtn.innerText ="Button Clicked"
// })
// buttonbtn.addEventListener('click',function(){
//     textbtn.innerText="Online"
//     textbtn.style.color ="green"
// })

// let modeText =document.getElementById('mode')
// let togglebtn = document.getElementById('toggle')

// togglebtn.addEventListener('click',function(){
//     modeText.innerText ="Dark Mode";
//     modeText.style.color="white";
//     modeText.style.backgroundColor ="black"
//     console.log("click Here");


// })

// let modeText = document.getElementById("mode");
// let toggleBtn = document.getElementById("toggle");

// toggleBtn.addEventListener("click", function () {
//   modeText.innerText = "Dark Mode";
//   modeText.style.color = "white";
//   modeText.style.backgroundColor = "black";


//  if (modeText.innerText === "Light Mode") {
//     modeText.innerText = "Dark Mode";
//     modeText.style.color = "white";
//     modeText.style.backgroundColor = "black";
//   } else {
//     modeText.innerText = "Light Mode";
//     modeText.style.color = "black";
//     modeText.style.backgroundColor = "white";
//   }
// });


//  <h1 id="countadd">0</h1> 
//  <h1 id="count">0</h1> 

//  <button id="add">+</button>
//  <button id="men">-</button>


// let count=0;
// let countText =document.getElementById('countadd')
// let addbtn = document.getElementById('add')

// let mintext =document.getElementById('men')
// let minbtn =document.getElementById('count')

// addbtn.addEventListener('click',function(){

//    addbtn.addEventListener('click',function(){
//     count++;
//     countText.innerText=count;
//    })

//    minbtn.addEventListener('click',function(){
//     count--;
//     countText.innerText =count;
//    })

// })


// let showtext = document.getElementById('show')
// let massageshow =document.getElementById('msg')

// showtext.addEventListener('click',function(){
//     massageshow.innerText="Hello Word !"
// })

// let textChange = document.getElementById('status')
// let buttonBtnText = document.getElementById('onlineBtn')


// buttonBtnText.addEventListener('click',function(){
//     textChange.innerText ="Online"
//     textChange.style.color ="green"

// })


// let count =0;


// let increaseText = document.getElementById('num')
// let increaseBtn =document.getElementById('inc')

// increaseBtn.addEventListener('click',function(){
//     count++;
//     increaseText.innerText =count;



// })




// let count =0;
// setTimeout(()=>{
//   count++;
//   console.log(count)
// },1000)
// console.log("End")


// let count = 1;
// setInterval(() => {
//     console.log('count',count)
//     count++

// }, 1000);


// setInterval(() => {
//     console.log(new Date().toLocaleDateString())
// }, 1000);


// let id =setInterval(()=>{
//     console.log("runing")

// },1000)
// clearInterval(id)

// let x = 1;
// setInterval(() => {
//     console.log(x)
//     x++
// }, 1000);



// setTimeout(() => {
//     console.log("Step 1")

//     setTimeout(() => {
//         console.log("Step 2")

//         setTimeout(() => {
//             console.log("Step 3")

//         }, 1000)

//     }, 1000)
// }, 1000)


// let promise =new Promise((resolve,reject)=>{
//     let success =true;

//     if(success){
//         resolve("Task done")
//     } else{
//         reject("Task Done")
//     }
// })
// console.log(promise);


// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Data Loaded")
//     }, 2000);
// })
// p.then(msg=>console.log(msg))


// let p =new Promise ((resolve,reject)=>{
//     reject("Network Error")
// })

// p.catch(err=> console.log(err))


function loginuser(){
    return new Promise((resolve ,reject)=>{
        let success =true;
        if(success){
            resolve("login Successful")
        } else{
            reject("Invalid user")
        }
    })
}
loginuser()
.then(msg=>console.log(msg))
.catch(err=> console.log(err))

.loginuser()
.then(res =>{
    console.log(res)
    return "DeashBoard Loaded"

})
.then(data=>console.log(console.log(data)))
.catch(err=> console.log(err))

fetchData()
.then(()=>showLoader())
.catch(()=> hideLoader())
.catch(()=>showError())
