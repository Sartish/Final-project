import React from "react";

import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <div>
      <Navigation />
      <p>Picture</p>
      <p>icon</p>
      <CustomButton text="Show me!" />
    </div>
  );
};

export default Home;
