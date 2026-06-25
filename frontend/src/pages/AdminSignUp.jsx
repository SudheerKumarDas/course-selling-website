import { useState } from "react"

function AdminSignUp() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3000/admins/signup",
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
            if(response.ok){
                alert("Admin signed up successfully")
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username : </label>
            <input type="text" name="username" value={username} placeholder="enter your username" onChange={(e)=>setUsername(e.target.value)} className="border p-2.5 m-2"/>

            <br />

            <label htmlFor="email">Email : </label>
            <input type="text" name="email" value={email} placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} className="border p-2.5 m-2"/>

            <br />

            <label htmlFor="password">Password : </label>
            <input type="password" name="password" value={password} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} className="border p-2.5 m-2"/>

            <br />

            <button type="submit" className="border p-2.5 m-2">Admin Sign Up</button>
        </form>
    </div>
  )
}

export default AdminSignUp