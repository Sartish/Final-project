import React from "react";
import styled from "styled-components/macro";

const CustomButton = ({ onClick, disabled, value, text }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      value={value}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

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
