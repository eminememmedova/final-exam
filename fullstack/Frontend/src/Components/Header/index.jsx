import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

const Navbar = () => {

  return (
<nav>
  <div className="logo">Floral Studio</div>
  <div className="links">
   <Link className='link' to="/">Home</Link>
   <Link className='link' to="/add">Add</Link>
   <Link className='link' to="/about">About us</Link>
   <Link className='link' to="/portfolio">Portfolio</Link>
   <Link className='link' to="/pricing">Pricing</Link>
   <Link className='link' to="/contacts">Contacts</Link>
  </div>
</nav>
  )
}

export default Navbar