import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment";
import styled from "styled-components/macro";

import { CustomButton, LikesButton } from "../components/StyledComponents";

import {
  Card,
  Grid,
  Container,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { API_URL } from "../reusables/urls";
import DescriptionHeader from "../components/DescriptionHeader";
import DescriptionFooter from "../components/DescriptionFooter";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Descriptions() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [myClickedHeartId, setClickedHeartId] = useState([]);
  const [sort, setSort] = useState("none");

  const url = window.location.href;
  const { description, concept } = data;
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

  const sortDesc = () => {
    if (description) {
      if (sort === "likes") {
        return description.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      } else if (sort === "createdAt") {
        return description.sort(function (a, b) {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
      } else return description;
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
      <DescriptionHeader heading={concept} />
      <Container className={classes.container}>
        <WrapperFilter>
          <ButtonContainer>
            <SubHeading>All explanations</SubHeading>
            <FilterButtons>
              <LikesButton
                onClick={() => {
                  setSort("likes");
                }}
              >
                Sort by likes <span>🖤</span>
              </LikesButton>
              <LikesButton
                onClick={() => {
                  setSort("createdAt");
                }}
              >
                Sort by date <span>📅</span>
              </LikesButton>
            </FilterButtons>
          </ButtonContainer>
        </WrapperFilter>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="start"
          color="blue"
        >
          {sortDesc(description)?.map((item) => {
            //console.log(item);
            return (
              <Card className={classes.root} key={item._id}>
                <div className={classes.heading}>
                  <Typography className={classes.user}>
                    {item.user ? item.user.username : "no user"}
                    <span className={classes.span}> added a explanation</span>
                  </Typography>
                  <CardActions disableSpacing>
                    <CopyToClipboard text={url}>
                      <IconButton aria-label="share this page">
                        <ShareIcon className={classes.share} />
                      </IconButton>
                    </CopyToClipboard>
                  </CardActions>
                </div>
                <CardContent>
                  <Typography className={classes.concept}>
                    {item.text}
                  </Typography>
                  <div className={classes.heading}>
                    <Typography className={classes.user}>
                      Created at: {moment(item.createdAt).format("MMM Do YYYY")}
                    </Typography>
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
                    </CardActions>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
        <DescriptionFooter />
      </Container>
      <Footer />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    container: {
      width: "100%",
      marginTop: "200px",
      ["@media (min-width:780px)"]: {
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
      },
    },
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
  heart: {
    fontSize: "40px",
  },
  share: {
    fontSize: "40px",
    display: "flex",
  },

  header: {
    textAlign: "center",
    padding: "5px",
    fontSize: "40px",
  },
  secondheader: {
    fontSize: "16px",
    textAlign: "center",
  },
}));

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  background-color: #FFF5D1;

  @media (min-width: 768px) {
    width: 800px;
    margin-top: 30px;
    justify-content: space-between;
    margin: 10px 80px 5px 80px;
    padding: 20px

`;

const WrapperFilter = styled.div`
width: 90%;
  @media (min-width: 768px) {
    display: flex;
    width: 1200px;
    margin-top: 30px;
    justify-content: space-between;
    margin: 10px 80px 5px 80px;
    padding: 20px
`;
const FilterButtons = styled.div`
  display: flex;
`;

const SubHeading = styled.h2`
  display: flex;
`;
