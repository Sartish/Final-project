import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="#FF69B4" />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "500px",
    marginTop: "50px",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
