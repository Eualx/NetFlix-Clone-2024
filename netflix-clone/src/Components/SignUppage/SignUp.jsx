import React from 'react'
import logo from '../../assets/image/NetflixLogo.png'

function SignUp() {
  return (
    <div>
        <div className='header'>
<img src={logo} className="signup-logo" alt="" />
<button type="text">Sign In</button>
</div>
<div>
    <h1>
        Unlimited movies, Tv shows, and more
    </h1>
    <p> Watch anywhere. Cancel anytime</p>
    Ready to watch? Enter your email to create or restart your <br /> membership.
</div>
<div>
    <div> <input type="text" placeholder='Email address'/></div>
    <div> <button>Get Started </button> </div>
    
    
</div>

    </div>
  )
}

export default SignUp