import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

import {
  StartButtonContainer,
  LottieContainer,
  Button,
} from "components/StyledComponents";

import "@lottiefiles/lottie-player";

const ContributeHeader = () => {
  const classes = useStyles();
  const location = useLocation();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const history = useHistory();

  const Loggedin = () => {
    // redirect user to '/' path
    console.log("Checking access token", accessToken);
    if (accessToken) {
      history.push(`/contribute/${location.pathname.substring(1)}`);
    } else {
      history.push("/signin");
    }
  };

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <StartButtonContainer>
          <div className={classes.filter}>
            <div className={classes.contribute}>
              {/* <p className={classes.contributeText}>
                Welcome {username}! You want to contribute, awesome!{" "}
                <span role="img" aria-label="star">
                  {"✨"}
                </span>
              </p> */}
              <Button
                className={classes.button}
                variant="contained"
                onClick={Loggedin}
              >
                Contribute
              </Button>
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

export default ContributeHeader;

const useStyles = makeStyles((theme) => ({
  // background: {
  //   backgroundColor: "#8CA2AB",
  //   width: "100%",
  // },
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
    margin: "10px",
    padding: "20px",
  },
  contribute: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
  },
  contributeText: {
    fontSize: "24px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
  },
}));
