import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
import styled from "styled-components/macro";

import user from "../reducers/user";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import SignInHeader from "../components/SignInHeader";
// import CustomButton from "../components/CustomButton";

const Signin = () => {
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
      });
  };
  console.log(mode);
  return (
    <div>
      <Navigation />
      <SignInHeader />
      <Wrapper>
        <Header>Sign in | Sign up</Header>
        <Form onSubmit={onFormSubmit}>
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="•••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              text="Sign in"
              onClick={() => setMode("signin")}
            >
              Sign in
            </Button>
          </Link>
          <Button type="submit" onClick={() => setMode("signup")}>
            Sign up
          </Button>
        </Form>
      </Wrapper>
    </div>
  );
};

export default Signin;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;

  @media (min-width: 767px) {
    width: 50%;
    margin-top: 35px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Header = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 40px;

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const Input = styled.input`
  width: 70%;
  border-radius: 50px;
  outline: none;
  //border: none;
  padding: 10px 20px;
  margin-bottom: 10px;

  @media (min-width: 767px) {
    font-size: 17px;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #8ca2ab;
  // background-image: linear-gradient(90deg, #006cde 0%, #fc00ff 100%);
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  // width: 30%;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;

  @media (min-width: 767px) {
    font-size: 19px;
  }
`;
