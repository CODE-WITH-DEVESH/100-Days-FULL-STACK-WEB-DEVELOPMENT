import { useState } from "react";

function App() {
  const [email,setEmail]=useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] =useState("")
  const [message, setMessage] = useState("");

  function handleLogin() {
    if (username === "" || password==="" || email=="") {

      setMessage("Please enter name");
    } else if(password.length<6) {
      setMessage("Password too short")
      
    } else{
      setMessage("Login successful")
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input type="email" placeholder="Enter Email" onChange={(e)=>
        setPassword(e.target.value)
      } />

      <button onClick={handleLogin}>
        Submit
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;
