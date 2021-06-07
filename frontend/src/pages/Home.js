import React from "react";
import { Paper, makeStyles } from '@material-ui/core';
import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";
import space from "../assets/space.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${space})`,
    width: 500
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation  />
      <Paper className={classes.root} variant="outlined">
      <p>Picture</p>
      <p>icon</p>
      <CustomButton text="Show me!" />
      </Paper>
    </div>
  );
};

export default Home;
