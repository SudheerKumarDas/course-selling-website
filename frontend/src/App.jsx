import './App.css'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {

  return (
    <>
      <h1 className='text-red-900 text-center'>Course Selling App</h1>
      <div className='flex justify-center items-center'>
            <SignUp/>
      </div>

          <br />
          <br />
          <br />
          
      <div className='flex justify-center items-center'>
        <SignIn/>
      </div>
      
    </>
  )
}

export default App
