import React from "react";
import { useDispatch, batch } from "react-redux";
import { Link } from "react-router-dom";

import { SigninButton } from "./StyledComponents";
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
      <SigninButton type="submit" onClick={handleClick}>
        Sign out
      </SigninButton>
    </Link>
  );
};

export default SignOut;
