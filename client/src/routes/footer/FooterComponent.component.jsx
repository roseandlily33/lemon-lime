import { FooterContainer } from "./footer.styles";
import Logo from "../../images/Lemon - Lime-New.png";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <img
        src={Logo}
        alt="Lemon Lime Logo"
        // className="logoImage"
        style={{ marginInline: "2rem", height: '100px', width: '300px', objectFit: 'contain' }}
      />
      <h6>
        Created by Victoria:{" "}
        <Link to="https://github.com/roseandlily33">roseandlily33</Link>
      </h6>
    </FooterContainer>
  );
};

export default Footer;
