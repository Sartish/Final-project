import React from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";
import space from "../assets/space.jpg";
import robots from "../assets/robots.png";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "blue",
    alignItems: "center",
    justifyConter: "space-between",
    flexDirection: "column",
  },
  robots: {
    display: "flex",
    backgroundImage: `url(${robots})`,
    backgroundSize: "cover",
    alignItems: "center",
    justifyConter: "center",
    flexDirection: "column",
    width: 500,
    height: 500,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <div
        className={classes.container}
        alignItems="center"
        justifyContent="center"
      >
        <Paper className={classes.robots} variant="outlined">
          <p>Picture</p>
          <p>icon</p>
          <CustomButton text="Show me!" />
        </Paper>
      </div>
    </div>
  );
};

export default Home;
