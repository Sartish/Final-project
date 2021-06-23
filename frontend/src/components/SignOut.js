import React from "react";
import { useDispatch, batch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import user from "../reducers/user";

const SignOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    batch(() => {
      dispatch(user.actions.setAccessToken(null));
      dispatch(user.actions.setUsername(null));

      localStorage.removeItem("user");
    });
  };

  return (
    <Link to="/">
      <SignoutButton type="submit" onClick={handleClick}>
        Sign out
      </SignoutButton>
    </Link>
  );
};

export default SignOut;

export const SignoutButton = styled.div`
  display: inline-block;
  color: white;
  background-color: #ff69b4;
  width: 100px;
  border: 4px solid #ff69b4;
  text-align: center;
  font-weight: bold;
  padding: 13px;

  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
