let inputElementPassword =document.querySelector('#password')
let inputElementBtn =document.querySelector('#btn')

inputElementBtn.addEventListener('click',()=>{
    // console.log("Click Here");
    if (inputElementBtn.innerHTML === "Show") {
        inputElementPassword.type = "text"
        inputElementBtn.innerHTML = "Hide"
    } 
    else {
        inputElementPassword.type = "password"
        inputElementBtn.innerHTML = "Show"
    }
    
})