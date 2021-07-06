import React from 'react'
import './TopSection.css'
import illustration from '../images/illustration.png'

const TopSection = () => {
    return (
        <>
        <div className="container">
        <div className="left-container">
            <h1>Let's build the future of design, now.</h1>
            <p>Create amazing tools and integrations for 1 million users or customise Marvel for your team</p>
            <button>Submit your app</button>
            <button>View API Docs</button>
            
        </div>
        <div className="right-container">
            <img src={illustration} alt="illustration"/>
        </div>
        </div>

            
        </>
    )
}

export default TopSection
