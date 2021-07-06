import React from 'react'
import logowhite from '../images/logo-white.svg'
import  './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-contents">
                <img src={logowhite} alt="logowhite" />
            </div>
            <div className="footer-contents">
                <h3>Overview</h3>
                <p>Why Marvel</p>
                <p>Enterprise</p>
                <p>Pricing</p>
                <p>Request a demo</p>
                <p>Explore</p>
                <p>Apps</p>
                <p>Developer API</p>
            </div>
            <div className="footer-contents">
            <h3>Features</h3>
                <p>Wireframing</p>
                <p>Design</p>
                <p>Prototyping</p>
                <p>Collaboration</p>
                <p>Handoff</p>
                <p>Integrations</p>
                <p>Sketch Plugin</p>
            </div>
            <div className="footer-contents">
            <h3>Support</h3>
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Security</p>
            </div>
            <div className="footer-contents">
            <h3>Marvel</h3>
                <p>Blog</p>
                <p>Our Team</p>
                <p>Contact Us</p>
                <p>Success Stories</p>
                <p>Brand Guidelines</p>
            </div>
            <div className="footer-contents">
            <h3>Follow</h3>
                <p>Twitter</p>
                <p>Dribble</p>
                <p>Facebook</p>
                <p>Github</p>
                <p>Workable</p>
            </div>
        </div>
            
        </>
    )
}

export default Footer
