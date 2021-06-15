import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FormButton } from "components/StyledComponents";
import Container from "@material-ui/core/Container";

import user from "../reducers/user";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

const Signin = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(null);

  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const onFormSubmit = (e) => {
    console.log("onFormSubmit1")

    e.preventDefault();
    console.log("onFormSubmit2")

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Success")
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
          console.log("Failed")
          dispatch(user.actions.setErrors(data));
        }
      });
  };
  console.log(mode);
  return (
    <>
      <Navigation />
      <div className={classes.background}>
        <div className={classes.wrapper}>
          <Typography className={classes.header}>
            Want to be able to contribute?
          </Typography>
          <Typography className={classes.paragraph}>
            Sign in or create your account
          </Typography>
        </div>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={onFormSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton
                type="submit"
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
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                onClick={() => setMode("signup")}
              >
                Sign up
              </FormButton>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Signin;

const font = "'PT Sans', sans-serif";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100vw",
    height: "100vh",
    // backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontFamily: font,
    fontWeight: "bold",
    fontSize: "38px",
    color: "#4B0082",
    marginTop: "100px",
  },
  paragraph: {
    fontFamily: font,
    fontWeight: "bold",
    fontSize: "24px",
    color: "black",
    marginBottom: "40px",
  },
  paper: {
    //   marginTop: theme.spacing(8),
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
