import React from "react";
import "../style/ContactUs.css";

const ContactUs = () => {
    return (
        <div className="modal-overlay">
            <section className="contactus-box">
                <button id = "close-btn">X</button>
                <h1 id = "contactus-greeting">Contact Us</h1>
                <label htmlFor = "name">Name</label>
                <input type = "name" id = "name"/>
                <label htmlFor = "email">Email</label>
                <input type = "email" id = "email"/>
                <label htmlFor = "inquiry">Inquiry</label>
                <textarea id = "contactus-text" type = "text" name = "contactus-inquiry"/>
                <button id = "submit">Submit</button>
            </section>
        </div>
    );
};

export default ContactUs;