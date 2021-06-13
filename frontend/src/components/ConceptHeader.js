import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import {
  StartButtonContainer,
  LottieContainer,
  Title,
  Paragraph,
} from "components/StyledComponents";

import "@lottiefiles/lottie-player";

const ConceptHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <StartButtonContainer>
          <div className={classes.filter}>
            <div className={classes.contribute}>
              <Title>TECHTIONARY</Title>
              <Paragraph>
                Here you find difficult tech-concept explained as easy as
                possible! Have a look!
              </Paragraph>
            </div>
          </div>
        </StartButtonContainer>
        <LottieContainer>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets6.lottiefiles.com/packages/lf20_d42Jtf.json"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "85%",
            }}
          ></lottie-player>
        </LottieContainer>
      </Container>
    </div>
  );
};

export default ConceptHeader;

const useStyles = makeStyles((theme) => ({
  //   background: {
  //     backgroundColor: "#8CA2AB",
  //     width: "100%",
  //   },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#8CA2AB",
    width: "100%",
    height: "500px",
    marginTop: "35px",
    ["@media (min-width:780px)"]: {
      flexDirection: "row",
    },
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5px",
  },
  contribute: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contributeText: {
    fontSize: "16x",
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
  },
}));
