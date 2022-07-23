import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";



function Login(){
  return (
    <section id="login">
  <div className="log-div">
    <form onSubmit={movieList}>
      <div >
        <div >
          <div >
            <h3>Sign In</h3>
            <div></div>
          </div>
          <div >
            <div >
              
              <input
                type="text"
                className="form-control"
                formControlName="username"
                placeholder="Username"
                required
              />
            </div><br/>
            <div >

              <input
                type="password"
                className="form-control"
                formControlName="password"
                placeholder="Password"
                required
              />
            </div><br/><br/>
            <div className="form-group">
              <Link to={'/app2'}><button
                type="submit"
                value="Login"
                className="btn float-right login_btn"
              >
                Login   
              </button></Link>
            </div>
          </div><br/>
          <hr />
          <div >
            <div>
              Don't have an account?
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
        
  )
}

export default Login