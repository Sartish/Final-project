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

const font = "'Montserrat', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textDecoration: "none",
    fontFamily: font,
  },
  toolbar: {
    backgroundColor: "#ffdcdc",
  },
  home: {
    flexGrow: 1,
  },
  front: {
    textDecoration: "none",
    color: "#223A59",
    fontFamily: font,
    "&:hover": {
      color: "#ec4646",
    },
  },

  navObject: {
    textDecoration: "none",
    marginRight: "10px",
    color: "#223A59",
    fontFamily: font,
    "&:hover": {
      color: "#ec4646",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.toolbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.home}>
              <NavLink to="/" className={classes.front}>
                Home
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="/concepts" className={classes.navObject}>
                Concepts
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="/signin" className={`${classes.navObject}`}>
                Sign in
              </NavLink>
            </Typography>
            {/* <Typography>
              <NavLink to="/contribute">Contribute</NavLink>
            </Typography> */}
            <Typography>
              <NavLink to="/about" className={classes.navObject}>
                About
              </NavLink>
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
