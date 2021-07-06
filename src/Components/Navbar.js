import React from 'react';
import "./Navbar.css"
import logowhite from '../images/logo-white.svg'
// import logoblue from '../images/logo-blue.svg'

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="left-header">
                <img src={logowhite} alt="logo-white"/> <p>| Developers </p>
            </div>
            <div className="right-header">
                <span>Why Marvel</span>
                <span>Enterprise</span>
                <span>Pricing</span>
                <span>Sign in</span>
                <span>Sign up free</span>
            </div>
        </nav>
        
            
        </>
    )
}

export default Navbar
