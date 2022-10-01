interface ContentCardProps {
    content: {title: string, body: string, imgSrc: string};
}
 
const ContentCard: React.FC<ContentCardProps> = (prop) => {
    return ( 
        <div className="contentCard">
            <img src={prop.content.imgSrc} alt='' ></img>
                <div className="cardsText">
                <h1>{prop.content.title}</h1>
                <p>{prop.content.body}</p>
            </div>
        </div>
     );
}
 
export default ContentCard;