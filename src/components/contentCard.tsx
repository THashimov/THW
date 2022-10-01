import React, { useEffect, useState } from "react";

interface ContentCardProps {
    content: {title: string, body: string, imgSrc: string} [];
}
 
const ContentCard: React.FC<ContentCardProps> = (prop) => {
    const x = prop.content.map((title) => {title});

    console.log(x)
    return ( 
        <div className="contentCard">
            {prop.content.map((content) => {
                <div className="cardsText">
            })}
            
            {/* <img src={prop.content.imgSrc} alt='' ></img>
                <div className="cardsText">
                <h1>{prop.content.title}</h1>
                <p>{prop.content.body}</p>
            </div> */}
        </div>
     );
}
 
export default ContentCard;