import React from 'react'
import './BodySection.css';
import apiTeam from '../images/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png';
import graphQL from '../images/graphQL.png';
import superchargeWorkflow from '../images/superchargeWorkflow.png';
import showcase from '../images/showcase.png'
import botbot from '../images/botbot.png'

const BodySection = () => {
    return (
        <>
        <div className="body-first">
            <h1>Experience the freedom to build, features right away.</h1>
            <p>We can now harness components of our platform and build powerful integrations for our 2million users - or simply just for your team.</p>
        </div>
        <div className="body-second">
            <div className="apiTeam features">
                <img src={apiTeam} alt="apiTeam" />
                <h2>Dedicated API Team</h2>
                <p>Our team are available for user's questions via our Slack Developer Community and Email.</p>
            </div>
            <div className="graphQL features">
                <img src={graphQL} alt="graphQL" />
                <h2>Our API uses Graph QL</h2>
                <p>No handling server side. Get many API's responses in a single request.</p>
            </div>
            <div className="superCharge features">
                <img src={superchargeWorkflow} alt="superCharge Work flow" />
                <h2>Supercharge your workflow</h2>
                <p>Automate workflows, integrate and analyse data and take Marvel to the next level.</p>
            </div>

        </div>
        <div className="body-third">
            <div className="left-showcase">
                <h1>Showcase your app in our integrations directory.</h1>
                <p>Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.</p>
                <button>Become a partner</button>
                <button>View Integrations</button>
            </div>
            <div className="right-showcase">
                <img src={showcase} alt="showcase"/>
            </div>
        </div>
        <div className="body-fourth">
            <div className="left-slackbot">
                <img src={botbot} alt="showcase"/>
            </div>
            <div className="right-slackbot">
                <h1>A Slack-bot for creating and managing prototypes</h1>
                <p>Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.</p>
                <button>Become a partner</button>
                <button>View Integrations</button>
            </div>
        </div>
        
        </>
    )
}

export default BodySection
