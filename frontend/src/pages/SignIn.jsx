import { useState } from "react"

function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div>
        <form>

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" className="border-2" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <br />

            <label>Password : </label>
            <input type="password" placeholder="Enter your password" className="border-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <br />

            <button className="cursor-pointer border-2">User sign in</button>
            
        </form>
    </div>
  )
}

export default SignIn