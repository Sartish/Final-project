import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
    <div className={classes.root}>
      <CircularProgress color="#FF69B4" />
    </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    width: "500px",
    marginTop: "50px",
    
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
