import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


function handleform() {
    toast.success('Message sent successfully!');
}

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nzulw1n', 'template_vhxukxd', form.current, {
                publicKey: 'MCw079fqhVw6Q6xoo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="text-xl flex flex-col font-bold font-urbanist">

            <label className="mt-5">Name</label>
            <input type="text" name="user_name" className="border-black border mt-[3%]" />
            <label>Email</label>
            <input type="email" name="user_email"  className="border-black border" />
            <label>Message</label>
            <textarea name="message"  className="border-black border"  />
            <Toaster position="top-center" />
            <input type="submit" onClick={handleform} value="Send" className="bg-orange-500 border-none rounded-full w-[100px] ml-[30%] mt-[6%]" />
        </form>
    );
};