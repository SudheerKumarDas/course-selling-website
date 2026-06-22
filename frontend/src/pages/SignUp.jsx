import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch(
        "http://localhost:3000/user/signup",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            username,
            email,
            password
          })
        }
      )
      const data = await response.json();
      console.log(data);
      if(response.ok){
        localStorage.setItem("token",data.token);
        alert("sign up successful")
        console.log(localStorage.getItem("token"));
        navigate("/dashboard");
      }else{
        alert(data.message)
      }
    }catch(error){
      console.error(error);
    }
  }
  
  return (
    <div>
        <h1>Course Selling App</h1>
        <form onSubmit={handleSubmit}>

            <label>Username : </label>
            <input type="text" placeholder="Enter username" className="border-2 p-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>

            <br />

            <label>Email : </label>
            <input type="text" placeholder="Enter email" className="border-2 p-2" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <br />

            <label>Password : </label>
            <input type="password" placeholder="Enter password" className="border-2 p-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <br />

            <button className="cursor-pointer border-2 p-2" type="submit"> User Sign Up</button>

        </form>
    </div>
  )
}

export default SignUp