import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp/>}>Sign Up</Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                       <Dashboard/>
                    </ProtectedRoute>
                  }>
             
            </Route>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
