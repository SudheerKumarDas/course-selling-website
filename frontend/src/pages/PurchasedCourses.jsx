import { useState, useEffect } from "react"

function PurchasedCourses() {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        const fetchPurchasedCourses = async() => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(
                    `http://localhost:3000/users/purchased-courses`,
                    {
                        method:"GET",
                        headers:{
                            "Authorization":`Bearer ${token}`
                        }
                    }
                )
                const data = await response.json();
                if(response.ok){
                    setCourses(data.courses);
                }else{
                    console.log(data.message)
                }                
            } catch (error) {
                console.error(error);
            }
            
        }
        fetchPurchasedCourses();
    },[]);
  return (
    <div>
        <h1>My Purchased Courses</h1>
        {
            courses.length===0? (
                <p>No courses purchased yet</p>
            ) : (
                courses.map((course)=>(
                    <div key={course._id} className="border p-4 m-2">
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p>{course.price}</p>
                        <a href="#">{course.imageLink}</a>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default PurchasedCourses