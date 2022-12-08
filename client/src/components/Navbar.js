import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Rotten from '../images/potatohead.jpeg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
          <img src ={Rotten} alt="rotten potato" />
          <span>Rotten Potatoes</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button classname = 'btn'>Logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar