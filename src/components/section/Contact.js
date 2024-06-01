import React, { useState } from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    subject: "",
    message: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    window.location.href = `mailto:join2geeks@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Name: ${encodeURIComponent(
      formData.firstname
    )}%0DMessage: ${encodeURIComponent(formData.message)}`;
  };
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form onSubmit={submitForm}>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                ></input>

                <input
                  type="text"
                  id="sub"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleFormChange}
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Email
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Visit Facebok profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.facebook}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Visit Twitter profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        {new Date().getFullYear()} © Copyright{" "}
        <strong>{contact.copyright}</strong>. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
