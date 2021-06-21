import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterParagraphs>
          &copy; developed 2021 by Sara Carlstein and Ann-Sofi Jönsson{" "}
        </FooterParagraphs>
        <FooterParagraphs>
          Techtionary <span role="img" aria-label="heart">
                {"🖤"}</span> | Technigo bootcamp
        </FooterParagraphs>
        <FooterParagraphs></FooterParagraphs>
      </FooterWrapper>
    </>
  );
};
export default Footer;

const ParagraphFont = "'Roboto', sans-serif;"

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
  margin-bottom: 10px;
  padding: 0;
  font-size: 16px;
  background-color: white;
  border-top: 2px solid black;
  color: black;
  height: 100px;
  @media (min-width: 767px) {
    font-size: 17px;
  }
`;

export const FooterParagraphs = styled.div`
  width: 250px;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-family: ${ParagraphFont};
  @media (min-width: 767px) {
    width: 500px;
  }
`;
