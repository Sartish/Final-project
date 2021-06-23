import React from "react";
import styled from "styled-components/macro";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterParagraphs>
            &copy; developed 2021 by Sara Carlstein and Ann-Sofi Jönsson{" "}
          </FooterParagraphs>
          <FooterParagraphs>Techtionary | Technigo bootcamp</FooterParagraphs>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};
export default Footer;

const ParagraphFont = "'Roboto', sans-serif;";
const Gray = "#404040;";
const DarkGray = "#282828";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 3% 0px 3%;
  padding: 0;
  font-size: 16px;
  background-color: white;
  border-top: 1.8px solid ${DarkGray};
  color: ${Gray};
  height: 20px;
  @media (min-width: 767px) {
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  margin-bottom: 10px;
  padding: 0px;
  width: 300px;
`;
export const FooterParagraphs = styled.div`
  display: flex;
  margin: 0;
  text-align: center;
  font-size: 16px;
  margin-bottom: 2px;
  font-family: ${ParagraphFont};
  @media (min-width: 767px) {
  }
`;
