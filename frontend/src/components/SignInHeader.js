import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import {
  StartButtonContainer,
  LottieContainer,
} from "components/StyledComponents";

import "@lottiefiles/lottie-player";

const SignInHeader = () => {
  const classes = useStyles();


  return (
    <Container className={classes.container}>
      <StartButtonContainer>
        <div className={classes.filter}>
          {/* <form>
            <TextField
              id="outlined-basic"
              label="search concept"
              variant="outlined"
            />
          </form> */}
          <div className={classes.contribute}>
            <p className={classes.contributeText}>
              Step 1: Create an account with a username that is unique, just like you!
            </p>
            <p className={classes.contributeText}>
              Step 2: Find a concept and contribute with your own description.
            </p>
            <p className={classes.contributeText}>
              Step 3: Done!
            </p>
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
  );
};

export default SignInHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#8CA2AB",
    width: "100%",
    height: "500px",
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
