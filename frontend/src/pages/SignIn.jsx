
function SignIn() {
  return (
    <div>
        <form>

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" className="border-2"/>

            <br />

            <label>Password : </label>
            <input type="password" placeholder="Enter your password" className="border-2"/>

            <br />

            <button className="cursor-pointer border-2">User sign in</button>

            <br />

            <button className="cursor-pointer border-2">Admin sign in</button>

        </form>
    </div>
  )
}

export default SignIn