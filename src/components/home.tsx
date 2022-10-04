import ContactUs from "./contactUs";
import Header from "./header";
import LandingPageContent from './landingPageContent';
import Footer from './footer';

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( <div className="home">
        <Header />
        <LandingPageContent />
        <ContactUs />
        <Footer />
    </div> );
}
 
export default Home;