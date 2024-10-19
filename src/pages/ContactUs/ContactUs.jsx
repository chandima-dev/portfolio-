import React, { useEffect, useRef } from "react";
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
import { FaFacebook, FaLinkedin, FaWhatsapp, FaViber } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import SubSlider from '../../components/SubSlider/SubSlider';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fb7rcsw', 'template_2up9bic', form.current, 'KKfkGJZKt5unB2lB-')
      .then(
        (result) => {
          console.log('Message sent successfully!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Failed to send message:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubSlider 
        title="Connect with Us" 
        description="We’re Here for Consultations, Collaborations, and Your Inquiries" 
      />

      <StyledContainer>
        <StyledFormWrapperWithBorder>
          <StyledFormSection>
            <StyledFormHeader>
              <h1>We're here to help</h1>
            </StyledFormHeader>
            <p>Whether you have a project in mind or need expert guidance on an upcoming design, we’re here to help.</p>
            <p>Send us a message, and our team will get back to you as soon as possible!</p>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name">Name</label>
              <input id="user_name" type="text" name="user_name" required />
              <label htmlFor="user_email">Email</label>
              <input id="user_email" type="email" name="user_email" />
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
          <StyledSocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`https://wa.me/+94705901816`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <IoLogoWhatsapp size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`viber://chat?number=94705901816`} target="_blank" rel="noopener noreferrer" title="Viber">
            <FaViber size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`imo://chat?number=94705901816`} title="IMO">
            <IoChatbubbleEllipsesOutline size={35} />
          </StyledSocialIcon>
        </div>
      </StyledSocialSection>
    </>
  );
};

export default ContactUs;
