// fetch('API_URL')
// .then(res=>res.json())
// .then(data=> console.log(data))
// .catch(err=> console.log(err))



fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users=>{
    console.log(users);
    
})