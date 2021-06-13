import React from "react";
import {
  FooterWrapper,
  FooterParagraphs,
  Logo,
  Link,
} from "./StyledComponents";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Logo src="./assets/logo.svg" alt="technigo logo" />
        <FooterParagraphs>
          &copy; developed 2021 by Sara Carlstein and Ann-Sofi Jönsson{" "}
        </FooterParagraphs>
        <FooterParagraphs>
          Final Project: Techtionary ❤️ | Technigo bootcamp
        </FooterParagraphs>
        <FooterParagraphs>
          <Link
            href="https://www.linkedin.com/in/sara-carlstein-532b2737/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          |
          <a
            href="https://github.com/Sartish"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </FooterParagraphs>
      </FooterWrapper>
    </>
  );
};
export default Footer;
