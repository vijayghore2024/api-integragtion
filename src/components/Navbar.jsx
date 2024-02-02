import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-logo">AmazingQuotes</div>

        <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Quotes by Number</li>
            <li className="nav-item">Search Quotes</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
