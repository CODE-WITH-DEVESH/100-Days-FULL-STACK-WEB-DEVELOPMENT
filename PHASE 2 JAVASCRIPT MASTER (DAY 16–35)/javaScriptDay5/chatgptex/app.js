// let heading = document.getElementById('title')

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


let showtext = document.getElementById('show')
let massageshow =document.getElementById('msg')

showtext.addEventListener('click',function(){
    massageshow.innerText="Hello Word !"
})

let textChange = document.getElementById('status')
let buttonBtnText = document.getElementById('onlineBtn')


buttonBtnText.addEventListener('click',function(){
    textChange.innerText ="Online"
    textChange.style.color ="green"

})


let count =0;


let increaseText = document.getElementById('num')
let increaseBtn =document.getElementById('inc')

increaseBtn.addEventListener('click',function(){
    count++;
    increaseText.innerText =count;


    
})