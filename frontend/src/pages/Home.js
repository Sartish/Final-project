import React from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";
import space from "../assets/space.jpg";
import robots from "../assets/robots.png";
import styled from "styled-components/macro";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#9fd8df",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyConter: "center",
    flexDirection: "row",
    backgroundColor: "#f6dfeb"
  },
  info: {
    backgroundColor: "blue",
    width: "200px"
  }

}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <div className={classes.container}>
        <Paper className={classes.wrapper} variant="outlined">
        <div className={classes.info} variant="outlined">
          <h2>TECHTIONARY</h2>
          <p>Techionary is the ultimate dichionary, which aimes to explains difficult tech-concept to make it easy to understand. </p>
          <p>icon</p>
          <CustomButton text="Show me!" />
        </div>
        <div className={classes.image}>
          <img src={robots}></img>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
