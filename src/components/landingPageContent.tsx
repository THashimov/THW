import React, { ReactNode, useEffect, useState } from "react";
import Data from './content.json';
import ContentCard from "./contentCard";

interface LandingPageContentProps {
    
}
 
const LandingPageContent: React.FC<LandingPageContentProps> = () => {
    let contentCards: React.ReactElement [] = [];

    for (let i = 0; i < Data.content.length; i++) {
        contentCards.push(<ContentCard content={Data.content[i]} key={i} />)
    }

    return (
    <div className="landingPageContent">
        <h1>Specialist Pipe Welding</h1>
        <div className="contentCardsContainer">
        {contentCards}
        </div>
    </div> 
    
    );
}
 
export default LandingPageContent;