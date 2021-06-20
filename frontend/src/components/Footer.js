import React from "react";
import { FooterWrapper, FooterParagraphs } from "./StyledComponents";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterParagraphs>
          &copy; developed 2021 by Sara Carlstein and Ann-Sofi Jönsson{" "}
        </FooterParagraphs>
        <FooterParagraphs>
          Final Project: Techtionary <span role="img" aria-label="heart">
                {"🖤"}</span> | Technigo bootcamp
        </FooterParagraphs>
        <FooterParagraphs></FooterParagraphs>
      </FooterWrapper>
    </>
  );
};
export default Footer;
