import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "@lottiefiles/lottie-player";

import {
  Container,
  Button,
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
      <Container role="main">
        <DesktopLogin>
          <Title>TECHTIONARY</Title>
          <Paragraph>
            Here you find difficult tech-concept explained as easy as possible!
            Have a look!
          </Paragraph>
          <StartButtonContainer>
            <Link to="/concepts">
              <Button>Show me!</Button>
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
      </Container>
    </>
  );
};

export default FrontPage;
