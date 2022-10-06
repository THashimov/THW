import ContactUs from "./contactUs";
import Header from "./header";
import LandingPageContent from './landingPageContent';
import Footer from './footer';
import { useState } from "react";
import MessageSent from "./messageSent";

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    const [messageSent, messageSentSet] = useState<boolean>(false);

    return ( <div className="home">
        <Header />
        <LandingPageContent />
        {!messageSent && <ContactUs messageState={[messageSent, messageSentSet]} />}
        {messageSent && <MessageSent />}
        <Footer />
    </div> );
}
 
export default Home;