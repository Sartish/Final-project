import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab";
import styled from "styled-components/macro";

import user from "../reducers/user";
import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Signin = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState(null);

  const error = useSelector((store) => store.user.errors);

  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputMin = { minLength: 5 };

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    fetch(API_URL(mode), options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "No user with this username or password, please try again"
          );
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.username));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));

            localStorage.setItem(
              "user",
              JSON.stringify({
                username: data.username,
                accessToken: data.accessToken,
              })
            );
          });
        } else {
          dispatch(user.actions.setErrors(data));
        }
      })
      .catch((error) => {
        dispatch(user.actions.setErrors(error.message));
      });
  };

  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <WriteHere>Sign in or Sign up</WriteHere>
          <ParagraphInstructions>
            <HiUser>
              Sign in or Sign up to to contribute with a concept and your unique
              description.
            </HiUser>
          </ParagraphInstructions>
          <form onSubmit={onFormSubmit}>
            <WrapperForInput>
              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputProps={inputMin}
              />

              <FormButton
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                onClick={() => setMode("signin")}
              >
                Sign in
              </FormButton>
              <FormButton
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                onClick={() => setMode("signup")}
              >
                Sign up
              </FormButton>
              <div className={classes.error}>
                {error && (
                  <Alert
                    severity="error"
                    className={classes.error}
                  >{`${error}`}</Alert>
                )}
              </div>
            </WrapperForInput>
          </form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Signin;

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif";
const LightPink = "#FFCFF1";
const Gray = "#404040;";
const DarkGray = "#282828";

const useStyles = makeStyles((theme) => ({
  error: {
    fontSize: "30px",
  },
  input: {
    display: "flex",
    width: "350px",
    ["@media (min-width:780px)"]: {
      width: "550px",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const WriteHere = styled.h3`
  display: flex;
  justify-content: center;
  align-text: center;
  width: 200px;
  text-align: center;
  margin: 40px 15px 15px 5px;
  padding: 5px;
  font-size: 24px;
  color: ${DarkGray};
  font-family: ${HeaderFont};
  border-bottom: 5px solid ${LightPink};
  @media (min-width: 767px) {
    font-size: 35px;
    width: 400px;
  }
`;

const HiUser = styled.p`
  font-size: 16px;
  color: ${Gray};
  width: 300px;
  text-align: center;
  font-family: ${ParagraphFont};
  @media (min-width: 768px) {
    font-size: 24px;
    width: 400px;
  }
`;

const ParagraphInstructions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30px;
  flex-direction: column;
  margin: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const WrapperForInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background-color: #ffcff1;
  border: none;
  color: ${DarkGray};
  text-align: center;
  font-size: 16px;
  padding: 15px;
  width: 350px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  @media (min-width: 767px) {
    width: 550px;
    font-size: 22px;
  }
`;
