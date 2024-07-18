
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.webp'

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
    return (
      <div className="navbar">
        <img
          className="logo"
          src={logo}
          alt="Food Villa"
        />
        <ul className="navItems">
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
        {isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}} >Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>}
      </div>
    );
  };

export default Header;