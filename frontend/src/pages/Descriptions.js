import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
  Card,
  Grid,
  Container,
  Chip,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import robotIcon from "@iconify-icons/mdi/robot";
import { Icon } from "@iconify/react";

import { API_URL } from "../reusables/urls";
import DescriptionHeader from "../components/DescriptionHeader";
import Navigation from "../components/Navigation";

export default function Descriptions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState({});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.
  const { description, user } = data;

  const location = useLocation();

  useEffect(() => {
    getDescriptions();
  }, [location.pathname]);

  const getDescriptions = () => {
    let slug = location.pathname.substring(1);
    fetch(API_URL(slug))
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  // render POST like on click?
  // How do we add toggle, so user can only like once and not spam, FE or BE?
  // Also sort, more likes on top of the page, BE, right?
  // Pagination FE and BE

  const postLikeToBackend = (descriptionId) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(API_URL("concepts/" + descriptionId + "/likes"), options)
      .then((res) => res.json())
      .then((data) => getDescriptions());
  };

  return (
    <>
      <Navigation />
      <DescriptionHeader />
      <Container className={classes.container}>
        <div className={classes.input}>
          <h3>All explanations here</h3>
          <form>
            <TextField
              id="outlined-basic"
              label="search concept"
              variant="outlined"
            />
          </form>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="start"
          color="blue"
        >
          {description?.map((item) => {
            console.log({ item });
            return (
              <Card className={classes.root} key={item._id}>
                <CardHeader
                  action={<Icon className={classes.avatar} icon={robotIcon} />}
                  subheader="Sara added explanation"
                />
                <div className={classes.header}>API</div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.text}
                  </Typography>
                  <Chip size="#JavaScript" label="#programming" />
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon onClick={() => postLikeToBackend(item._id)} />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      x {item.likes}
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      share
                    </Typography>
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    height: "100%",
  },
  root: {
    width: "300px",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
  },

  header: {
    height: "50px",
    textAlign: "center",
    fontSize: "30px",
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    borderRadius: "50%",
    fontSize: "30px",
  },

  sort: {
    width: 500,
  },

  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    paddingLeft: "200px",
  },
}));
