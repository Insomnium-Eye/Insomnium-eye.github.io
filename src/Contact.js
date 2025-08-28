import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value); // Set to true if token is present
    };

    const handleCaptchaExpired = () => {
        setCaptchaVerified(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Your message has been sent!');
                form.current.reset();
                setCaptchaVerified(false); // Reset CAPTCHA after submission
            }, (error) => {
                console.log('Email sending failed:', error.text);
                alert('An error occurred. Please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_email">Your Email:</label>
                <input type="email" id="user_email" name="from_email" required />
                <label htmlFor="subject">Title/Subject:</label>
                <input type="text" id="subject" name="subject" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key
                    onChange={handleCaptchaChange}
                    onExpired={handleCaptchaExpired}
                />
                <button
                    type="submit"
                    disabled={isSending || !captchaVerified}
                    title={!captchaVerified ? "Please complete CAPTCHA to submit" : ""}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}

export default Contact;