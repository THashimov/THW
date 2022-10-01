import React, { useState } from "react";

interface ContactFormProps {
    
}
 
const ContactForm: React.FC<ContactFormProps> = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const updateText = (e: React.ChangeEvent<HTMLInputElement>, arg: string) => {
        const text = e.target.value;

        switch (arg) {
            case 'firstName':
                setFirstName(text);
                break;
            case 'surname':
                setSurname(text);
                break;
            case 'email':
                setEmail(text);
                break;
            case 'phone':
                setPhone(text);
                break;
        }
    }

    const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    return (
        <form id='contactForm' >
            <input type='text' placeholder='First Name' value={firstName} onChange={(e) => {updateText(e, 'firstName')}} />
            <input type='text' placeholder='Surname' value={surname} onChange={(e) => {updateText(e, 'surname')}} />
            <input type='text' placeholder='Email' value={email} onChange={(e) => {updateText(e, 'email')}} />
            <input type='text' placeholder='Phone' value={phone} onChange={(e) => {updateText(e, 'phone')}} />
            <textarea value={message} placeholder='Message' onChange={(e) => {updateMessage(e)}}/>
        </form>
            );
}
 
export default ContactForm;