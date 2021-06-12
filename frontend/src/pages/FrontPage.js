import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "@lottiefiles/lottie-player";

import {
  ContainerHeader,
  FrontPageButton,
  Title,
  Paragraph,
  DesktopLogin,
  StartButtonContainer,
  LottieContainer,
} from "components/StyledComponents";

const FrontPage = () => {
  return (
    <>
      <Navigation />
      <ContainerHeader role="main">
        <DesktopLogin>
          <Title>TECHTIONARY</Title>
          <Paragraph>
            Here you find difficult tech-concept explained as easy as possible!
            Have a look!
          </Paragraph>
          <StartButtonContainer>
            <Link to="/concepts">
              <FrontPageButton>Show me!</FrontPageButton>
            </Link>
          </StartButtonContainer>
        </DesktopLogin>
        <LottieContainer>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets6.lottiefiles.com/packages/lf20_d42Jtf.json"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          ></lottie-player>
        </LottieContainer>
      </ContainerHeader>
    </>
  );
};

export default FrontPage;
