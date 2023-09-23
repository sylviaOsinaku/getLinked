import React, { useState } from "react";
import classes from "./ContactsStyles.module.css";
import star from "../../assets/star.svg";
import purpleStar from "../../assets/star pu.svg";
import { Container } from "react-bootstrap";
import IconFacebook from "../../ui/Facebook";
import IconBxlLinkedin from "../../ui/Linkendin";
import IconInstagram from "../../ui/Instagram";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [formData,setFormData] = useState({})

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const userMessageHandler = (e) => {
    setUserMessage(e.target.value);
  };
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.valuej);
  };
  const resetForm = function () {
    setUserEmail("");
    setUserMessage("");
    setUserName("");
    setPhoneNumber("");
    setIsLoading(false);
  };

  const baseUrl = "https://backend.getlinked.ai";

  const SubmitFormHandler = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      first_name: userName,
      message: userMessage,
      email: userEmail,
      phone_number: phoneNumber,
    };

    try {
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsLoading(false);
      console.log(formData);
      if (response.ok) {
        console.log("message successful");
      } else {
        // Handle login failure (e.g., show error message)
        console.error("message failed");
      }
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  return (
    <Container className="pb-5">
      <div className="mt-5 d-flex justify-content-between ">
        <img src={star} alt="" />
        <img src={purpleStar} alt="" />
      </div>

      <div className="d-flex mt-5 justify-content-between align-items-md-start align-items-center">
        <div className="d-none d-md-block">
          <h2 className={`${classes["contact-text"]} mb-3 fs-4 lh-3`}>
            Get In touch
          </h2>
          <div>
            <p>Contact Information</p>
            <address>
              27,Alara Street
              <br /> Yaba 100012 <br />
              Lagos State
            </address>
            <p>Call Us : 07067981819</p>
            <div className="mb-3">
              <p>we are open from Monday-Friday </p>
              <small>08:00am - 05:00pm</small>
            </div>
            <div>
              <h4 className={`${classes["contact-text"]} fs-6 `}>Share on</h4>
              <div>
                <IconInstagram />
                <IconFacebook />
                <IconBxlLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div className={classes["sub-form-wrapper"]}>
          <h3 className={`${classes["contact-text"]} mb-3 mb-md-5 fs-4 lh-3`}>
            Questions or need assistance?
            <br /> Let us know about it!
          </h3>
          <form
            className={classes["form-wrapper"]}
            onSubmit={SubmitFormHandler}
          >
            <input
              type="text"
              name="full-name"
              id=""
              placeholder="First Name"
              onChange={userNameHandler}
              value={userName}
            />
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="phone number"
              onChange={phoneNumberHandler}
              value={phoneNumber}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mail"
              onChange={userEmailHandler}
              value={userEmail}
            />
            <textarea
              name="message"
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
              onChange={userMessageHandler}
              value={userMessage}
            ></textarea>
            <div className="text-center">
              <button className={classes["read-btn"]}>
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>

          <div className="mt-3 d-md-none text-center">
            <h4 className={`${classes["contact-text"]} fs-6 `}>Share on</h4>
            <IconInstagram />
            <IconFacebook />
            <IconBxlLinkedin />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactForm;
