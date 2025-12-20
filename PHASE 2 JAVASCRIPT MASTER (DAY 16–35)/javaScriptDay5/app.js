// let headingElement =document.getElementById("heading")

// let para1 =document.getElementById("para1")

// console.log(headingElement.innerHTML)
// console.log(para1.innerText)
// Query Selector ()

// let inputgmil=document.querySelector('#gmail')
// console.log(inputname.placeholder);
// console.log(inputgmil.type);
// inputname.placeholder="Enter your name"
// inputgmil.placeholder ="Enter your Gmail"
// inputname.type="password"

// console.log(inputgmil.placeholder);

// console.log(inputname.value);

// Qusery All Selecort()


// let allelement = document.querySelectorAll('li')
// console.log(allelement);
// console.log( allelement[0].innerHTML);
// console.log( allelement[1].innerHTML);
// console.log( allelement[2].innerHTML);
// console.log( allelement[3].innerHTML);


// allelement.forEach((item,index)=>{
//     console.log(item.innerHTML)
// })

// allelement.forEach(m=>{
//     console.log(m.innerHTML);

// })


// let inputpassword = document.querySelector('#password')

// let buttonbtn = document.querySelector('#btn')



// function showHidePassword() {

//     if (buttonbtn.innerHTML == "show") {

//         inputpassword.type = "text"
//         buttonbtn.type = "hide"
//     }

//     else {
//         inputpassword.type = "password"
//         buttonbtn.innerHTML = "show"
//     }


// }


let inputpassword = document.querySelector('#password')
let buttonbtn = document.querySelector('#btn')

function showHidePassword() {

    if (buttonbtn.innerHTML === "Show") {
        inputpassword.type = "text"
        buttonbtn.innerHTML = "Hide"
    } 
    else {
        inputpassword.type = "password"
        buttonbtn.innerHTML = "Show"
    }
}





