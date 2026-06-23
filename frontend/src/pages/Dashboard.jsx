import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        const getCourses = async() => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(
                "http://localhost:3000/users/courses",
                {
                    method:"GET",
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                }
            )
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setCourses(data.courses)
            }else{
                console.log(data.message);
            }
                
            } catch (error) {
                console.error(error);
            }            
        }
        getCourses();
    },[]);
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    }
  return (
    <div>
        <h1>Dashboard</h1>
        {courses.map((course)=>(
            <div key={course._id}>
                <h2 className="text-3xl font-bold text-blue-600">{course.title}</h2>
                <p>{course.description}</p>
                <p>{course.price}</p>
                <a>{course.imageLink}</a>
            </div>
        ))}
        <button onClick={logout} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">Logout</button>
    </div>
  )
}

export default Dashboard