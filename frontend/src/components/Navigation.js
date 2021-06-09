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

const font =  "'Montserrat', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textDecoration: "none",
    fontFamily: font,
  },
  // hamburger icon make it only for mobile
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },

  // add same styling to two classes
  home: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    fontFamily: font,
  },
  concepts: {
    textDecoration: "none",
    marginRight: "10px",
    color: "white",
    fontFamily: font,
  },
  signin: {
    textDecoration: "none",
    marginRight: "10px",
    color: "white",
    fontFamily: font,
  },
  about: {
    textDecoration: "none",
    color: "white",
    fontFamily: font,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.home}>
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/concepts" className={classes.concepts}>
                Concepts
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="/signin" className={`${classes.signin}` }>
                Sign in
              </NavLink>
            </Typography>
            {/* <Typography>
              <NavLink to="/contribute">Contribute</NavLink>
            </Typography> */}
            <Typography>
              <NavLink to="/about" className={classes.about}>
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
