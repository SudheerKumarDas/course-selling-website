import { useState } from "react"

function AdminCreateCourse() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState(0);
    const [imageLink,setImageLink]=useState("");
    const [published,setPublished]=useState(false);
  return (
    <div>

        <form>

            <label htmlFor="title">Title : </label>
            <input type="text" name="title" value={title} placeholder="Enter course title" onChange={(e)=>setTitle(e.target.value)}/>

            <br />

            <label htmlFor="description">Description : </label>
            <input type="text" name="description" value={description} placeholder="Enter course description" onChange={(e)=>setDescription(e.target.value)}/>

            <br />
            
            <label htmlFor="price">Price : </label>
            <input type="text" name="price" value={price} placeholder="Enter course price" onChange={(e)=>setPrice(e.target.value)}/>

            <br />
            
            <label htmlFor="image-link">ImageLink : </label>
            <input type="text" name="image-link" value={imageLink} placeholder="Enter course image link" onChange={(e)=>setImageLink(e.target.value)}/>

            <br />
            
            <label htmlFor="published">Published : </label>
            <input type="text" name="published" value={published} placeholder="Enter course published status" onChange={(e)=>setPublished(e.target.value)}/>

            <br />
            
        </form>
    </div>
  )
}

export default AdminCreateCourse