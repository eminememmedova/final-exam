import React from 'react'
import "./index.css"
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <div className="footer">
      <ul className='footerList'>
        <li>
          <ul>
           <li>Marry Byrd</li>
            <li className='sendEmail'><TextField id="standard-basic" label="Your Email" variant="standard" /><button className='send'>Send</button></li>
          </ul>
        </li>
        <li>
          <ul>
            <li className='listTitle'>About</li>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </li>
        <li>
          <ul>
            <li className='listTitle'>Contact</li>
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>Abuot Me</li>
          </ul>
        </li>
        <li className='listTitle'>
          Follow Us
        </li>
      </ul>
    </div>
  )
}

export default Footer