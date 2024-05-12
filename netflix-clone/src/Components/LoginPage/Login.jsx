import React, { useState } from "react";
import logo from "../../assets/image/NetflixLogo.png";
import "./Login.css";
import { login, signup } from "../../Firebase/FirBaseL";
// import netflix_spinner from '../../assets/image/netflix_spinner.gif'

function Login() {
  const [SignState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(true)
  const user_auth = async (event) => {
    event.preventDefault();
    // setLoading(true)
    if (SignState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    // setLoading(false)
  };
  return (
    //  <div className="login-spinner">
    //   <img src={netflix_spinner} alt="" />
    // </div>
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form>
          {SignState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {" "}
            {SignState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <labela htmlFor="">Remember Me</labela>
            </div>
            <p> Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignState === "Sign In" ? (
            <p>
              New to Netflix{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
