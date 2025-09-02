import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
    const form = useRef();
    const recaptchaRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleCaptchaExpired = () => {
        setCaptchaVerified(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        if (!captchaVerified) {
            alert('Please complete the CAPTCHA.');
            setIsSending(false);
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Your message has been sent!');
            form.current.reset();
            recaptchaRef.current.reset();
        }, (error) => {
            console.log('Email sending failed:', error.text);
            alert('An error occurred. Please try again.');
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="user_email">Your Email:</label>
                <input type="email" id="user_email" name="from_email" required />
                <label htmlFor="subject">Title/Subject:</label>
                <input type="text" id="subject" name="subject" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
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