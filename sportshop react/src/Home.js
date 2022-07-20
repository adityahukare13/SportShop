import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
        <Link to={'./login2'}><button id="nav-button">Admin</button></Link><Link to={'./login'}><button id="nav-button">Login</button></Link> 
        <div className='poster'><h1 id='head'>Welcome to the Sports Shop Application</h1></div>
        <h1 id='head1'>------Our Products------</h1>
        </div>

  )
}

export default Home