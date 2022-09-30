import { Link } from 'react-router-dom';
import Video from '../assets/slowWelding.mp4';

interface LandingPageVideoProps {
}
    
const LandingPageVideo: React.FC<LandingPageVideoProps> = () => {
    return (
        <div className="mainLogo">
            <Link to='/'>Logo</Link>
            <div className="videoContainer">
                <video autoPlay loop muted>
                    <source  src={Video} type='video/mp4' />
                </video>
            </div>
        </div>
    );
}
 
export default LandingPageVideo;