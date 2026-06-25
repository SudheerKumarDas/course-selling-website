import { useState } from "react"

function AdminSignIn() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email : </label>
            <input type="text" name="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} className="border p-2.5 m-2"/>

            <br />

            <label htmlFor="password">Email : </label>
            <input type="password" name="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} className="border p-2.5 m-2"/>

            <br />

            <button type="submit" className="border p-2.5 m-2">Admin Sign In</button>
        </form>
    </div>
  )
}

export default AdminSignIn