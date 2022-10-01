import Header from "./header";
import LandingPageContent from './landingPageContent';

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( <div className="home">
        <Header />
        <LandingPageContent />
    </div> );
}
 
export default Home;