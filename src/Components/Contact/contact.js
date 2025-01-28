import React, { useRef } from 'react';
import './contact.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w6nnysb', 'template_vnloxht', form.current, {
                publicKey: '6-OmCK7OxrvPze_Wv',
            })
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    return (
        <section id='contactPage'>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                    <textarea rows='5' className='msg' placeholder='Your Message' name='message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={LinkedInIcon} alt='LinkedIn' className='link' onClick={() => { window.location.href = 'https://linkedin.com/in/andrew-hsu-9b1677a5' }}></img>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;