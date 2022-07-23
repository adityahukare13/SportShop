import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    const linkstyle={
        color:"white",
    }
  return (
    <nav>
        <ul className="nav-links">
            <Link style={linkstyle} to="/home">
            <li>Home </li>
            </Link>
            
        
            <Link style={linkstyle} to="/aboutUs">
            <li>About_Us</li>
            </Link>

           

        </ul>
    </nav>

  )
}

export default Nav;
