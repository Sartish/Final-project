import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  // Button,
  // IconButton,
  // MenuIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // hamburger icon make it only for mobile
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/concepts">Concepts</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/signin">Sign in</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/contribute">Contribute</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/about">About</NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navigation;

//To do:
// add styling features for letting user know what page we are on
// add hamburger menu