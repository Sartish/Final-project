import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import moment from "moment";

import {
  Card,
  Grid,
  Container,
  Chip,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
  Button,
  ListItemSecondaryAction,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import robotIcon from "@iconify-icons/mdi/robot";
import { Icon } from "@iconify/react";

import { API_URL } from "../reusables/urls";
import DescriptionHeader from "../components/DescriptionHeader";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Descriptions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState({});
  const [myClickedHeartId, setClickedHeartId] = useState([]);
  const [sort, setSort] = useState("none");
  // const [likes, setLikes] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { description, user, concept } = data;
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

  //Function here to sort by likes

  // const sortLikes = (e) => {
  //   e.preventDefault();
  //   setLikes(data);
  //   console.log(data);
  // };
  const sortDesc = () => {
    if (description) {
      if (sort === "likes") {
        return description.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      } else {
        return description;
      }
    }
    return [];
  };
  // Also sort, more likes on top of the page, BE, right?

  const postLikeToBackend = (descriptionId) => {
    if (myClickedHeartId.includes(descriptionId)) return;
    setClickedHeartId((arr) => [...arr, descriptionId]);
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
      <Link to={`/contribute/${location.pathname.substring(1)}`}>
        <Button>contribute </Button>
      </Link>
      <Button
        onClick={() => {
          setSort("likes");
        }}
      >
        Click to sort by likes
      </Button>
      <DescriptionHeader />
      <Container className={classes.container}>
        <h3 className={classes.header}>All Explanation here</h3>
        <h3 className={classes.header}>{concept}</h3>
        <form className={classes.search}>
          <TextField
            id="outlined-basic"
            label="some kind of filter"
            variant="outlined"
          />
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="start"
          color="blue"
        >
          <Link to={`/contribute/${location.pathname.substring(1)}`}>
            <Button variant="contained" color="secondary">
              contribute
            </Button>
          </Link>
          {sortDesc(description)?.map((item) => {
            //console.log(item);
            return (
              <Card className={classes.root} key={item._id}>
                <div className={classes.heading}>
                  <p className={classes.user}>
                    {item.user ? item.user.username : "no user"}
                    <span className={classes.span}> added a explanation</span>
                  </p>
                  <Icon className={classes.avatar} icon={robotIcon} />
                </div>

                {/* moment().format("MMM Do YY");
                <p>{moment(item.createdAt).format("MMM Do YY")}</p> */}

                <CardContent>
                  <Typography className={classes.concept}>
                    {item.text} Created at:{" "}
                    {moment(item.createdAt).format("MMM Do YYYY")}
                  </Typography>
                  <Chip className={classes.tags} label="#frontend" />
                  <Chip className={classes.tags} label="#backend" />
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon
                      className={classes.heart}
                      onClick={() => postLikeToBackend(item._id)}
                    />
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      x {item.likes}
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon className={classes.share} />
                    <Typography
                      variant="body1"
                      color="textPrimary"
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
      <Footer />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    // height: "1000px",
  },
  root: {
    width: "500px",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "8px",
  },
  user: {
    fontSize: "17px",
  },
  span: {
    fontSize: "17px",
  },
  concept: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  tags: {
    backgroundColor: "pink",
    margin: "5px",
    fontSize: "15px",
  },
  heart: {
    fontSize: "40px",
  },
  share: {
    fontSize: "40px",
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
    fontSize: "30px",
  },

  header: {
    textAlign: "center",
    padding: "20px",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));
