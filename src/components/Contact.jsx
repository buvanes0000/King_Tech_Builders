import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './Contact.css'; // Import the CSS stylesheet

const Contact = () => {
  const { register, reset, handleSubmit, setValue } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);

  const accessKey = "2e7e1a68-5524-44b9-b030-64795a4f9cb9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "King Tech Builders Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setHcaptchaToken(null);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const handleHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
    setHcaptchaToken(token);
  };

  const handleFormSubmit = (data) => {
    if (!hcaptchaToken) {
      setResult("Please complete the HCaptcha.");
      setIsSuccess(false);
      return;
    }

    onSubmit(data);
  };

  return (
    <div className="contact-container section" id="contact">
      <h2 className="contact-title">Share Your Thoughts</h2>
      <form className="contact-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-input-wrapper">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="form-input"
          />
        </div>
        <div className="form-input-wrapper">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="form-input"
          />
        </div>
        <div className="form-textarea-wrapper">
          <FontAwesomeIcon icon={faCommentDots} className="input-icon textarea-icon" />
          <textarea
            name="message"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="form-textarea"
          ></textarea>
        </div>
        <div className="hcaptcha-container">
          <HCaptcha
          className="h-captcha"
          size="normal"
          theme="light"
          
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            onVerify={handleHCaptchaChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Send
          <FontAwesomeIcon icon={faPaperPlane} className="submit-icon" />
        </button>
      </form>
      {result && (
        <div className={`result-message ${isSuccess ? "success" : "error"}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default Contact;
