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
    <div>PurchasedCourses</div>
  )
}

export default PurchasedCourses