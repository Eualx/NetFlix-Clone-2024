import React, { useState } from "react";
import logo from "../../assets/image/NetflixLogo.png";
import './Login.css'
function Login() {
    const [SignState ,setSignState]=useState("Sign In")
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form>
            {SignState==="Sign Up"? <input type="text" placeholder="Your Name" />:<></>}
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button> {SignState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p> Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
            {SignState==="Sign In"? <p>New to Netflix <span onClick={()=>{
                setSignState("Sign Up")
            }}>Sign Up Now</span></p> : <p>Already have account? <span onClick={()=>{
                setSignState("Sign In")
            }}>Sign In Now</span></p>}
           
            
        </div>
      </div>
    </div>
  );
}

export default Login;
