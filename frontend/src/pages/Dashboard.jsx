import { useEffect, useState } from "react"

function Dashboard() {
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
    </div>
  )
}

export default Dashboard