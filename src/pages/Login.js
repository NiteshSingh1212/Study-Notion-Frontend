import React from 'react'
import Templates from '../components/Templates'
import loginImg from "../assets/login.png"
const Login = ({setIsLoggedIn}) => {
  return (
<Templates title="Welcome Back" desc1="Build skills for today,tomorrow, and beyond." desc2="Eduction to future-proof your career." image={loginImg} formtype="login" setIsLoggedIn={setIsLoggedIn}/>

  )
}

export default Login