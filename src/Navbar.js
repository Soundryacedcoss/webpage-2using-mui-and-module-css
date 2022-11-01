import React from 'react'
import img1 from './image/image (7) k(1).png'
export const Navbar = () => {
  return (
    <div className='navPage'>
    <div className='navbar'>
    <div>
        <img src={img1} alt="" />
    </div>
    <div className='navlink'>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About Us</a>
            </li>
            <li>
                <a href="">service</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            <li>
                <a href="">Login</a>
            </li>
        </ul>
    </div>
    </div>
    </div>
  )
}
