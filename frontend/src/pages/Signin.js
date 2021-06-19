import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FormButton } from "components/StyledComponents";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab";

import user from "../reducers/user";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

const Signin = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(null);

  const error = useSelector((store) => store.user.errorMessage);

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
    console.log("onFormSubmit1");

    e.preventDefault();
    console.log("onFormSubmit2");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    // version 1, funkar
    // fetch(API_URL(mode), options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       console.log("Success");
    //       batch(() => {
    //         dispatch(user.actions.setUsername(data.username));
    //         dispatch(user.actions.setAccessToken(data.accessToken));
    //         dispatch(user.actions.setErrors(null));

    //         localStorage.setItem(
    //           "user",
    //           JSON.stringify({
    //             username: data.username,
    //             accessToken: data.accessToken,
    //           })
    //         );
    //       });
    //     } else {
    //       console.log("Failed");
    //       dispatch(user.actions.setErrors(data));
    //     }
    //   });
    //version 2, test för att få fram error,funkar ej, fail to compile
    //     fetch(API_URL(mode), options)
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw new Error('Ops, something went wrong.');
    //       }
    //       return res.json();
    //     })

    //     .then((data) => {
    //       if (data.success) {
    //         console.log("Success");
    //         batch(() => {
    //           dispatch(user.actions.setUsername(data.username));
    //           dispatch(user.actions.setAccessToken(data.accessToken));
    //           dispatch(user.actions.setErrors(null));

    //           localStorage.setItem(
    //             "user",
    //             JSON.stringify({
    //               username: data.username,
    //               accessToken: data.accessToken,
    //             })
    //           );
    //         });
    //       } else {
    //         console.log("Failed");
    //         dispatch(user.actions.setErrors(data));
    //       }
    //     });
    //     .catch((error) => {
    //       dispatch(user.actions.setErrors({ errorMessage: error.toString() }));
    //     });

    // };

    //version 3,
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
          console.log("Success");
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
          console.log("Failed");
          dispatch(user.actions.setErrors(data));
        }
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        dispatch(user.actions.setErrors({ errorMessage: error.toString() }));
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
                autoComplete="username"
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
                inputProps={inputMin}
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
              <div className={classes.error}>
                {error && (
                  <Alert
                    severity="error"
                    className={classes.error}
                  >{`${error}`}</Alert>
                )}
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Signin;

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: "40px",
    marginTop: "100px",
  },
  paragraph: {
    fontSize: "24px",
    marginBottom: "40px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FF69B4",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
