import React, { useState, useEffect } from "react";

import "./contact.scss";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/users/sendinfo", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setResponseMessage("Submitted Successfully");
        console.log(responseMessage)
      } else {
        setResponseMessage("Submission failed");
      }
    } catch (error) {
      setResponseMessage("Error: " + error.toString());
    }
  };


  return (
    <div className="contact">
      <div className="uppercontact">
        <div className="contatimage">
          <img src="/images/imge.jpeg" alt="" />
        </div>
        <div className="greet">
          <h1>Say hi!</h1>
          <p>Always open to new ideas</p>
        </div>
      </div>
      <div className="lowercontact">
        <div className="leftcontact"></div>
        <div className="rightcontact">
          <form className="formdiv" onSubmit={handleSubmit}>
            <div className="messageform">
              <div className="msgtitle">
                <h1>Message</h1>
                <p>Please inroduce yourself.</p>
              </div>
              <div className="textareadiv">
                <textarea
                  className="longmessage"
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
            </div>
            <div className="emailform">
              <div className="emailtitle">
                <h1>Email Address</h1>
                <p>Where you will receive the response.</p>
              </div>
              <div className="emailareadiv">
                <input
                  className="emailinput"
                  type="email"
                  placeholder="email@provider.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="sendbutton">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
