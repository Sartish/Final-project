import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function ConceptCard({
  postClickToBackend,
  itemId,
  concept,
  link,
}) {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={link}>
      <Card
        onClick={() => postClickToBackend()}
        className={classes.root}
        key={itemId}
      >
        <CardContent className={classes.container}>
          <Typography className={classes.concept} variant="h5">
            {concept}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "300px",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "#FFF5D1",
      cursor: "pointer",
    },
  },
  concept: {
    color: "black",
    textAlign: "center",
  },

  link: {
    textDecoration: "none",
  },
});
