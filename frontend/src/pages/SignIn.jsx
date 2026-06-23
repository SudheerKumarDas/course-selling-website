import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch(
        "http://localhost:3000/users/signin",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        }
      );
      const data = await response.json();
      if(response.ok){
        localStorage.setItem("token",data.token);
        navigate("/dashboard");
      }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" className="border-2" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <br />

            <label>Password : </label>
            <input type="password" placeholder="Enter your password" className="border-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <br />

            <button className="cursor-pointer border-2" type="submit">User sign in</button>
            
        </form>
    </div>
  )
}

export default SignIn