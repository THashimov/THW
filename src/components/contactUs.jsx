import ContactForm from "./contactForm";
import emailjs from 'emailjs-com';
import EmailClass from './emailClass';
import { useRef } from "react";

const ContactUs = (prop) => {
    const formDetails = useRef(new EmailClass());

    const handleClick = () => {
        prop.messageState[0] ? prop.messageState[1](false) : prop.messageState[1](true);

    const params = {
        user_name: formDetails.current.userName,
        user_email: formDetails.current.userEmail,
        user_phone: formDetails.current.userPhone,
        message: formDetails.current.message,
    };
    
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            params, 
            process.env.REACT_APP_PUBLIC_KEY
            );
    }

    return (
        <div className="contactContainer">
            <div className="formContainer">
                <h1>Contact us using the form below</h1>
                <ContactForm formDetails={formDetails}/>
            </div>
            <div className="contactInfoContainer">
                <h1>Contact Information</h1>
                <div className="paragraphContainer">
                    <p>Based in North Hampshire, working nationally</p>
                    <p>Email us on info@thweld.co.uk</p>
                    <p>We are open Monday - Friday 0700 - 1700</p>
                    <p>Out of hours contact: 07927406359</p>
                </div>
            </div>
            <div className="btnContainer">
                <button className='submitBtn' onClick={() => {handleClick()}}>Submit</button>
            </div>
        </div>
      );
}
 
export default ContactUs;