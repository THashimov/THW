import { Link } from 'react-router-dom';
import Video from '../assets/slowWelding.mp4';
import Logo from '../assets/thLogo.png';

interface headerProps {
}
    
const Header: React.FC<headerProps> = () => {
    return (
        <div className="headerContainer">
             <div className="headerLogo">
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
            </div>
            <video >
                <source  src={Video} type='video/mp4' />
            </video>
        </div>
    );
}
 
export default Header;