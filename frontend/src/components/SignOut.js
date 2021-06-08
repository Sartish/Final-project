import React from 'react';
import { useDispatch, batch  } from 'react-redux';
import styled from "styled-components/macro";

import user from '../reducers/user';


const SignOut = () => {
  const dispatch = useDispatch()


  const handleClick= () => {
    batch(() => {
      dispatch(user.actions.setAccessToken(null))
      dispatch(user.actions.setUsername(null))
    })
  }

  return (
    <Button
      type='submit'
      onClick={handleClick}
      >
      Sign out
    </Button>
  )
};

export default SignOut;

const Button = styled.button`
  border-radius: 8px;
  background-color: #006cde;
  background-image: linear-gradient(90deg, #006cde 0%, #fc00ff 100%);
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;

  :hover {
    background-color: #fc00ff;
    background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  }

  @media (min-width: 767px) {
    font-size: 19px;
  }
`;

