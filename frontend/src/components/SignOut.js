import React from 'react';
import { useDispatch, batch  } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import user from '../reducers/user';


const SignOut = () => {
  const dispatch = useDispatch()


  const handleClick= () => {
    batch(() => {
      dispatch(user.actions.setAccessToken(null))
      dispatch(user.actions.setUsername(null))

      localStorage.removeItem('user');
    })
  }

  return (
    <Link to="/">
        <Button
        type='submit'
        onClick={handleClick}
        >
        Sign out
      </Button>
    </Link>
  )
};

export default SignOut;

const Button = styled.button`
  border-radius: 8px;
  background-color: #8CA2AB;
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;
  cursor: pointer;

  // :hover {
  //   background-color: #fc00ff;
  //   background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  // }

  @media (min-width: 767px) {
    font-size: 19px;
  }
`;

