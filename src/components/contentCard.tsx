import React from "react";
import DairyValveWeld from '../assets/dairyValveWeld.JPEG';


interface ContentCardProps {
    
}
 
const ContentCard: React.FC<ContentCardProps> = () => {
    return ( 
        <div className="contentCard">
            <img src={DairyValveWeld} alt='' ></img>
                <div className="cardsText">
                <h1>Pipe Welding</h1>
                <p>THW is a leading provider of mechanical engineering services, working predominantly in the food, dairy, EfW and pharmaceutical industries.</p>
            </div>
        </div>
     );
}
 
export default ContentCard;