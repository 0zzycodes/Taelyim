import React, { useState } from "react";
//Components
import CustomHero from "../../components/custom-hero/custom-hero";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

// Assets
import sendIconPurple from "../../assets/sendIconPurple.svg";
import contactimage from "../../assets/contactimage.svg";

import "./contact.scss";

const Contact = () => {
  const [state, setState] = useState({
    userFullName: "",
    userEmail: "",
    userPhoneNumber: "",
    userMessage: "",
    isSuccess: false,
  });
  const handleChange = (e) => {
    this.name = e.target.name;
    setState({
      [this.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userFullName, userEmail, userPhoneNumber, userMessage } = state;
    const data = {
      name: userFullName,
      email: userEmail,
      phone: userPhoneNumber,
      message: userMessage,
    };
    console.log(data);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const fetchResponse = await fetch(`http://localhost:3030/send`, settings);
      await fetchResponse.json();
      console.log(fetchResponse);
      setState({
        isSuccess: true,
        userFullName: "",
        userEmail: "",
        userPhoneNumber: "",
        userMessage: "",
      });
    } catch (err) {
      setState({ isSuccess: false });
    }
  };
  return (
    <div className="contact">
      <CustomHero title="contact" />
      <div className="contact-container">
        <img src={contactimage} alt="" mail illustration />
        <main>
          <div id="contactForm">
            <form onSubmit={handleSubmit}>
              <h1>CONTACT.</h1>
              <p>
                want to react out? Type and send your message below and we'll be
                in touch asap
              </p>
              <FormInput
                type="text"
                name="userFullName"
                value={state.userFullName}
                label="Name"
                onChange={handleChange}
              />
              <FormInput
                type="email"
                name="userEmail"
                value={state.userEmail}
                label="Email"
                onChange={handleChange}
              />
              <FormInput
                type="number"
                name="userPhoneNumber"
                value={state.userPhoneNumber}
                label="Number"
                onChange={handleChange}
              />
              <div className="text-area">
                <textarea
                  required
                  name="userMessage"
                  value={state.userMessage}
                  onChange={handleChange}
                  className={`${state.userMessage.length ? "expand" : null}`}
                ></textarea>
                <label
                  className={`${
                    state.userMessage.length ? "shrink" : ""
                  } textarea-label`}
                >
                  Message
                </label>
              </div>
              <CustomButton onClick={handleSubmit}>
                <img src={sendIconPurple} alt="Send Icon" /> Send Message
              </CustomButton>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
