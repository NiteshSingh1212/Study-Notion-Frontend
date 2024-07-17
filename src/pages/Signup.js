import React from 'react'
import signupImg from "../assets/signup.png"
import Templates from '../components/Templates'
const Signup = ({setIsLoggedIn}) => {
  return (
    <Templates title="Join the millions learning to code with StudyNotiuon for free" desc1="Build skills for today,tomorrow, and beyond." desc2="Eduction to future-proof your career." image={signupImg} formtype="signup" setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Signup