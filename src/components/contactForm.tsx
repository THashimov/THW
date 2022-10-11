import React, { useState } from "react";
import EmailClass from "./emailClass";

interface ContactFormProps {
    formDetails: React.MutableRefObject<EmailClass>
}
 
const ContactForm: React.FC<ContactFormProps> = (prop) => {

    const [firstName, setFirstName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const updateText = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, arg: string) => {
        const text: string = e.target.value;

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
            case 'msg':
                setMessage(text);
                break;
        }
        
        prop.formDetails.current.userName = firstName + ' ' + surname;
        prop.formDetails.current.userEmail = email;
        prop.formDetails.current.userPhone = phone;
        prop.formDetails.current.message = message;
    }

    return (
        <form id='contactForm'>
            <input type='text' placeholder='First Name' value={firstName} onChange={(e) => {updateText(e, 'firstName')}} />
            <input type='text' placeholder='Surname' value={surname} onChange={(e) => {updateText(e, 'surname')}} />
            <input type='text' placeholder='Email' value={email} onChange={(e) => {updateText(e, 'email')}} />
            <input type='text' placeholder='Phone' value={phone} onChange={(e) => {updateText(e, 'phone')}} />
            <textarea value={message} placeholder='Message' onChange={(e) => {updateText(e, 'msg')}}/>
        </form>
            );
}
 
export default ContactForm;