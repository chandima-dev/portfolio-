import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  ${'' /* padding: 10px; */}
  margin-top: -100px;
  position: relative;
  z-index: 10; // Ensure it stays above the slideshow


  @media (max-width: 768px) {
    height: auto; // Adjust height for smaller screens
    margin-top: -250px;
    padding: 10px;
    position: relative;
    z-index: 10;
  }
`;

export const StyledFormWrapperWithBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  border: 3px solid transparent;
  padding: 40px;
  transition: border-color 0.3s ease;
  background-color: black;

  &:hover {
    border-color: #f9690e; // Orange border on hover
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack form below image on mobile
    padding: 20px;
  }
`;

export const StyledFormSection = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #dddddd;

    &:focus {
      border-color: #00ce9e;
    }
  }

  button {
    width: 105%;
    padding: 10px;
    background-color: #f9690e;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }

  label {
    align-self: flex-start;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 90%; // Wider on mobile
    margin-right: 20px;

    button {
      width: 106%;
    }
  }
`;

export const StyledImageSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;

  img {
    max-width: 100%;
    height: auto;
    background-color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1vh;
  }
`;

export const StyledFormHeader = styled.div`
  margin-bottom: 20px;

  h {
    font-size: 2.5rem;
    color: #f9690e;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;


export const StyledSocialSection = styled.div`
  text-align: center;
  margin-top: -40px;
  padding-top: 10px;
  margin-bottom:100px;

  h2 {
    color: #f9690e;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #000000;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    div {
      
      margin-bottom: -75px;
      display:flex;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-size: 1.5rem; /* Adjust heading size for mobile */
      margin-top:50px;
      font-weight: bold;
    }

    p {
      font-size: 1rem; /* Adjust paragraph size for mobile */
    }
  }
`;

export const StyledSocialIcon = styled.a`
  font-size: 2rem;
  margin: 0 15px;
  color: #000000; /* Initial color set to black */
  transition: color 0.3s ease;
  cursor: pointer;


  &:hover {
    color: orange; /* Change to orange on hover */
  }

  @media (max-width: 768px) {
    margin: 10px 5px; /* Adjust spacing for mobile view */
    display:flex;
    justify-content: center;
    align-items: center;
    
  }
`;
