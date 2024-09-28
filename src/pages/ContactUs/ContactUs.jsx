import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledContainer,
  StyledFormSection,
  StyledImageSection,
  StyledFormWrapperWithBorder,
  StyledFormHeader,
  StyledSocialSection,
  StyledSocialIcon,
} from "./ContactUsStyles";
import contactImage from "../../../public/images/contactus.svg";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import SubSlider from '../../components/SubSlider/SubSlider'; // Import the SubSlider component

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",
      "your_template_id",
      form.current,
      "your_user_id"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };


  return (
    <>
      {/* SubSlider Component */}
      <SubSlider 
        title="Connect with Us" 
        description="We’re Here for Consultations, Collaborations, and Your Inquiries" 
        // customStyles={customStyles} // Pass custom styles here
      />

      <StyledContainer>
        <StyledFormWrapperWithBorder>
          <StyledFormSection>
            <StyledFormHeader>
              <h1>We're here to help</h1>
            </StyledFormHeader>
            <p>Whether you have a project in mind or need expert guidance on an upcoming design, we’re here to help</p>
            <p>Send us a message, and our team will get back to you as soon as possible!</p>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name">Name</label>
              <input id="user_name" type="text" name="user_name" required />
              <label htmlFor="user_email">Email</label>
              <input id="user_email" type="email" name="user_email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </StyledFormSection>

          <StyledImageSection>
            <img src={contactImage} alt="Decorative Image" />
          </StyledImageSection>
        </StyledFormWrapperWithBorder>
      </StyledContainer>
      
      {/* Social Media Section */}
      <StyledSocialSection>
        <h2>Follow Our Social Network</h2>
        <p>Stay in touch with our projects and services</p>
        <div>
          <StyledSocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} />
          </StyledSocialIcon>
          <StyledSocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </StyledSocialIcon>
        </div>
      </StyledSocialSection>
    </>
  );
};

export default ContactUs;
