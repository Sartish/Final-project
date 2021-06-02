import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import user from "../reducers/user";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(null);

  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/concepts");
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
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.username));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));
          });
        } else {
          dispatch(user.actions.setErrors(data));
        }
      });
  };
  return (
    <div>
      <Navigation />
      <h1>Sign in or Sign up</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="•••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          variant="contained"
          color="primary"
          type="submit"
          text="Sign in"
          onClick={() => setMode("signin")}
        >
          Sign in
        </button>

        <button type="submit" onClick={() => setMode("signup")}>
          Sign up
        </button>
        <div>
          When you sign up you will be able to contribute with your wasy peasy
          explanation for the concept and like those you understand the most
        </div>
      </form>
    </div>
  );
};

export default Signin;
