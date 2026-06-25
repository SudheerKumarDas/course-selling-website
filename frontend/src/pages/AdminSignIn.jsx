import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AdminSignIn() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3000/admins/signin",
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
            )
            const data = await response.json();
            if(response.ok){
                alert("Admin logged in successfully")
                navigate("/admin-dashboard");
            }else{
                alert(data.message);
            }
        } catch (error) {
            console.error(error)
        }
    }
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