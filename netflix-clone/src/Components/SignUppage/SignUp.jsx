import React, { useState } from 'react'
import logo from '../../assets/image/NetflixLogo.png'
import "./signUp.css"
import Login from '../LoginPage/Login';

function SignUp() {
  const[signIn ,setSignIn]=useState(false);

  return (
 <div>
  
 
    {signIn ? (<Login />):(    <div className='Loginscreen'>
      
    <div className='Loginscreen-background'>
        <img className="logo" src={logo}  alt="" />
         <button onClick ={()=>setSignIn(true)}
          className='button' type="text">Sign In</button>
</div>

<div className='loginScreen_gradient'></div>
<div className='loginScreen_body'>

<h1>
      Unlimited movies, Tv shows, and more
  </h1>
  <h2> Watch anywhere. Cancel anytime</h2>
  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
  <div className='loginScreen_input'>
    <form action="">
      
    <input className='email' type="email" placeholder='Email address'/>
    
    <button onClick ={()=>setSignIn(true)} >Get Started </button>
    
     </form>   
    </div>
</div>
</div> )}
</div> 


   
  )
}

export default SignUp