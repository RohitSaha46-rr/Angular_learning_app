import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard

 
 <SignupForm></SignupForm>
 <h1>Already Logged?</h1>
<p>Login !</p>
<Link to="/login"> <button>Login</button></Link> 

    </div>
  )
}

export default Dashboard
