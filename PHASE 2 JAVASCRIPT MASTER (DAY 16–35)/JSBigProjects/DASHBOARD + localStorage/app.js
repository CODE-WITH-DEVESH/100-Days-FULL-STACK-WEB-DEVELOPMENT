let usernameInput =document.getElementById('usernameinput')
let saveUserBtn =document.getElementById('saveuser')
let welcomeText =document.getElementById('welcomeText')


let themeBtn =document.getElementById('themeBtn') 
let visitCountText =document.getElementById('visitCount')
let logoutBtn=document.getElementById('logoutBtn')
let clearvisits=document.getElementById('clearvisits')

saveUserBtn.addEventListener('click',()=>{
    if(usernameInput.value ===""){
        alert("Enter Name")
        
        return;

    }

    localStorage.setItem('username',usernameInput.value.toUpperCase())
    showUser();

})
function showUser(){
    let user=localStorage.getItem('username')
    if(user){
        welcomeText.innerText="Welcome " +user
    }
}
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    let isDark =document.body.classList.contains('dark')
    localStorage.setItem('theme',isDark? "dark":"light")

})
let savedTheme =localStorage.getItem('theme')

if(savedTheme==="dark"){
    document.body.classList.add('dark')
}
let visit =localStorage.getItem('visits')
if(!visit){
    visit =0;

}
visit++;
localStorage.setItem('visit',visit)
visitCountText.innerText="Visits"+visit

logoutBtn.addEventListener('click',()=>{
    localStorage.clear()
    location.reload();
})
showUser();
clearvisits.addEventListener('click',()=>{
     localStorage.removeItem('visit')
     visitCountText.innerText='visit 0'
})