import Todo from "./Todo"

function App() {
  
  function callFun(){
    alert("Function Called")



  }
  const fruit=()=>{
    alert("Hello")

  }

  return (
    <>
      <h2>Welcome to web pages</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti rerum nostrum, omnis tempore est fugit quam, adipisci ducimus aut libero, consequatur doloremque!</p>
      <Todo/>

      <button onClick={callFun}>Click Me Babe</button>
      <button onClick={fruit}>Click Me </button>
    </>
  )
}

export default App
