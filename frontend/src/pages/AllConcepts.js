import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Container, Grid, TextField, Chip } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    height: "100vh",
  },
  root: {
    minWidth: 200,
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "100px",
    marginRight: "100px",
  },
});

export default function AllConcepts() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h3>All explanations here</h3>
      <div className={classes.filter}>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
        <form>
          <Chip size="medium" label="#frontend" />
          <Chip size="medium" label="#programming" />
        </form>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="start"
        color="blue"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              look up
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              xx contributions of
            </Typography>
            <Typography variant="h5" component="h2">
              Api
            </Typography>
            <Typography variant="body2" component="p">
              latest contribution: date
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
