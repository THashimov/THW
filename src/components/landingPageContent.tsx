import React from "react";
import SeagullTee from '../assets/seagullTee.jpg';
import Huber from '../assets/huber.jpg';

interface LandingPageContentProps {
    
}
 
const LandingPageContent: React.FC<LandingPageContentProps> = () => {
    return (
    <div className="landingPageContent">
        <h1>Specialist Pipe Welding</h1>
        <div className="contentCardsContainer">
            <div className="contentCard">
            <div className="cardsText">
                <h1>Fabrication</h1>
                <p>Armed with a team of talented fabricators, THW can fabricate bespoke components such as seagull tees, swept tees, headers and pipe spools.</p>
            </div>
                <img src={SeagullTee} alt='' ></img>
            </div>
            <div className="contentCard">
                <img src={Huber} alt='' ></img>
            <div className="cardsText">
                <h1>Installation</h1>
                <p>THW is fully mobile ready with a team of welders and fitters ready to go anywhere across the UK and EU to weld, fabricate and install on-site.</p>
            </div>
            </div>
        </div>
    </div> 
    
    );
}
 
export default LandingPageContent;