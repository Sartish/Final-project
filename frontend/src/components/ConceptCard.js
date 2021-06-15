import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
  },
  root: {
    minWidth: 200,
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "#FFF5D1",
    },
  },
  title: {
    fontSize: 14,
  },
  concept: {
    color: "black",
  },
  date: {
    marginBottom: 12,
    textDecoration: "none",
    color: "black",
  },
  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "100px",
    marginRight: "100px",
  },
  link: {
    textDecoration: "none",
  },
});

export default function ConceptCard({ id, itemId, concept, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={itemId}>
      <Link className={classes.link} to={link}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            xxx of contributions
          </Typography>
          <Typography className={classes.concept} variant="h5" component="h2">
            {concept}
          </Typography>
          <div>{id}</div>
          <Typography className={classes.date} variant="body2" component="p">
            latest contribution: date
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link className={classes.link} to={link}>
          <Button variant="contained" color="primary">
            Look up
          </Button> */}
        </CardActions>
      </Link>
    </Card>
  );
}
