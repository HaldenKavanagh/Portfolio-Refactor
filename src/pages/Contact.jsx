import "../styles/Contact.css";
import React, { useState, useRef } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [show, setShow] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      emailRegex.test(email) ? "" : "Please enter a valid email address"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    emailjs
      .sendForm(
        "service_shrk3d6",
        "template_icawtzj",
        formRef.current,
        "xfey81O3WACFTbeIT"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setShow(true); // Show the alert upon successful submission
          setTimeout(() => setShow(false), 5000);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
        <label htmlFor="name">Name:</label>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control custom-input"
            required
          />
        </div>
        <label htmlFor="email">Email:</label>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control custom-input"
            required
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>
        <label htmlFor="message">Message:</label>
        <div className="message-div">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-control custom-input"
            rows="10"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {/* <Alert className="my-custom-alert" variant="success">
        This is a success alert — check it out!
      </Alert> */}
      {show && (
        <Alert
          className="my-custom-alert"
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          Thank You for your response!
        </Alert>
      )}
    </div>
  );
}
