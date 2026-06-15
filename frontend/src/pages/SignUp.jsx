
function SignUp() {
  return (
    <div>
        <h1>Course Selling App</h1>
        <form>

            <label>Username : </label>
            <input type="text" placeholder="Enter username" className="border-2"/>

            <br />

            <label>Email : </label>
            <input type="text" placeholder="Enter email" className="border-2"/>

            <br />

            <label>Password : </label>
            <input type="password" placeholder="Enter password" className="border-2"/>

            <br />

            <button className="cursor-pointer border-2"> User Sign Up</button>

            <br />

            <button className="cursor-pointer border-2"> Admin Sign Up</button>

        </form>
    </div>
  )
}

export default SignUp