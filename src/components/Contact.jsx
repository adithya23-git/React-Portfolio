import React, { useState } from "react";
import Styles from "./Styles/contact.module.css";
import Sociallinks from "./UI/SocialLinks";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink =
      `mailto:adithya02030@gmail.com` +
      `?subject=${encodeURIComponent(subject || `New message from ${name}`)}` +
      `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={Styles.contactcon}>
      <h1 className={Styles.contacthead}>
        Let's <span>Connect</span>
      </h1>
      <p className={Styles.contactsubhead}>
        I’d love to hear from you. Send me a message and I'll respond as soon as
        possible.
      </p>

      <div className={Styles.contactcontainer}>
        <div className={Styles.contactinfo}>
          <div className={Styles.infocard}>
            <i className={Styles.email}>📧</i>
            <div>
              <h3>Email</h3>
              <p>adithya02030@gmail.com</p>
            </div>
          </div>
          <div className={Styles.infocard}>
            <i className={Styles.phone}>☎️</i>
            <div>
              <h3>Phone</h3>
              <p>+91 8074036329</p>
            </div>
          </div>
          <div className={Styles.infocard}>
            <i className={Styles.location}>📍</i>
            <div>
              <h3>Location</h3>
              <p>Tirupathi , Andhra Pradesh State , India</p>
            </div>
          </div>

          <div className={Styles.socials}>
            <h3>Connect With Me</h3>
            <div className="icons">
              <Sociallinks />
            </div>
          </div>
        </div>

        <div className={Styles.contactform}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              id="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">
              Send Message <i>🚀</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
