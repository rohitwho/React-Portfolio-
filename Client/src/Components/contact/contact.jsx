import React, { useState } from "react";
import FormInput from "../../reusable/form";
import { Button } from "@nextui-org/react";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Lottie from "lottie-react";
import Modal from "react-modal";
import sentAnimation from "../../pages/About-Animation/sentAnimation.json";
import axios from "axios";

// backgroundColor: 'rgba(255, 255, 255, 0.75)
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(75, 75, 75, 0.75)",
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "50%",
    outline: "none",
    padding: "20px",
  },
};

export default function contact() {
  const [input, setInput] = useState({
    email: "",
    fullname: "",
    subject: "",
    message: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    // e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3001/SendMessage",
        input
      );

      if (response.status === 200) {
      
        setIsOpen(true);

        let interval = setInterval(function () {
          setIsOpen(false); 
          clearInterval(interval);
        }, 3700);


  
        console.log(response.data); 
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

 

    setInput({
      email: "",
      fullname: "",
      subject: "",
      message: "",
    });
  }

  function closeModal() {
    setIsOpen(false);

  }

  return (
    <div id="Contact">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        // onRequestClose={closeModal}
      >
        <Lottie animationData={sentAnimation}></Lottie>

      
      </Modal>

      <section className="Contact-Left">
        <h2 className="About-Me">Contact Form</h2>

        <FormInput
          inputLabel="Full Name:"
          labelFor="fullname"
          inputType="text"
          inputId="name"
          inputName="fullname"
          placeholdertext="Name"
          value={input.fullname}
          ariaLabelName="Name"
          onChange={handleForm}
        />
        <FormInput
          inputLabel="Email :"
          labelFor="email"
          inputType="email"
          inputId="email"
          inputName="email"
          placeholdertext="email"
          value={input.email}
          ariaLabelName="Email"
          onChange={handleForm}
        />
        <FormInput
          inputLabel="Subject :"
          labelFor="subject"
          inputType="text"
          inputId="subject"
          inputName="subject"
          placeholdertext="Subject"
          value={input.subject}
          ariaLabelName="Subject"
          onChange={handleForm}
        />
        <FormInput
          inputLabel="Message :"
          labelFor=" message"
          inputType="textarea"
          inputId="Message"
          inputName="message"
          placeholdertext="Message"
          ariaLabelName="Message"
          value={input.message}
          onChange={handleForm}
          cols="70"
          rows="8"
        />

        <Button onClick={handleSubmit} color="primary" className="Submit">
          Submit
        </Button>
      </section>

      <section className="Contact-Right">
        <h2 className="text-black underline">Contact Detail</h2>

        <p className="Contact-Details">
          <MapIcon /> 123 Front Street,NY
        </p>

        <p className="Contact-Details">
          <EmailIcon /> Rohitnayyar54@gmail.com
        </p>

        <p className="Contact-Details">
          <CallIcon /> +1 123-456-7891
        </p>
      </section>
    </div>
  );
}
