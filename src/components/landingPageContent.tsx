import React, { ReactNode, useEffect, useState } from "react";
import Data from './content.json';
import ContentCard from "./contentCard";

interface LandingPageContentProps {
    
}
 
const LandingPageContent: React.FC<LandingPageContentProps> = () => {
    return (
    <div className="landingPageContent">
        <h1>Specialist Pipe Welding</h1>
        <div className="contentCardsContainer">
        <ContentCard content={Data.content}/>
        </div>
    </div> 
    
    );
}
 
export default LandingPageContent;