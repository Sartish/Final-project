import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";

const HowToContribute = () => {
  return (
    <div>
      <Navigation />
      <h1>How to contribute</h1>
      <p>1. Create an account.</p>
      <p>Navigate to the concept you want to contribute to.</p>
      <p>Write your stuff.</p>
      <p>Done!</p>
      <Link to="/signin">
        <CustomButton text="To sign in" />
      </Link>
    </div>
  );
};

export default HowToContribute;
