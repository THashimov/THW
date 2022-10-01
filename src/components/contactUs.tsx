import ContactForm from "./contactForm";

interface ContactUsProps {
    
}
 
const ContactUs: React.FC<ContactUsProps> = () => {
    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <div className="contactContainer">
            <div className="formContainer">
                <h1>Contact us using the form below</h1>
                <ContactForm />
                <button onClick={() => {handleClick()}}>Submit</button>
            </div>
            <div className="contactInfoContainer">
                <h1>Contact Information</h1>
                <p>Based in North Hampshire, working nationally</p>
                <p>Email us on info@thweld.co.uk</p>
                <p>We are open Monday - Friday 0700 - 1700</p>
                <p>Out of hours contact: 07927406359</p>
            </div>
        </div>
      );
}
 
export default ContactUs;