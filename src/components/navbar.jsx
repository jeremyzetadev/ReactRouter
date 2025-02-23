import React from 'react'
import logo from '../assets/react.svg'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <imt src={logo} alt />
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/product'><li>Products</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default navbar