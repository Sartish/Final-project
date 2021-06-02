import React from "react";
import Button from "@material-ui/core/Button";

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
