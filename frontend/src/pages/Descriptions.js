import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment";
import styled from "styled-components/macro";
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
      <Container maxWidth="sm">
        <DescriptionHeader heading={concept} />
        <SubHeadingWrapper>
          <SubHeadingContainer>
            <SubHeading>All explanations</SubHeading>
            <FilterButtons>
              <LikesButton
                onClick={() => {
                  setSort("likes");
                }}
              >
                Sort by likes
                <span role="img" aria-label="calender">
                  {" 🖤"}
                </span>
              </LikesButton>
              <LikesButton
                onClick={() => {
                  setSort("createdAt");
                }}
              >
                Sort by date
                <span role="img" aria-label="calender">
                  {" 📅"}
                </span>
              </LikesButton>
            </FilterButtons>
          </SubHeadingContainer>
        </SubHeadingWrapper>
        <Grid container direction="row" justify="center" color="blue">
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
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => postLikeToBackend(item._id)}
                      >
                        <FavoriteIcon className={classes.heart} />
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

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif;";
const LightPink = "#FFCFF1";
const Yellow = "#FFF5D1";
const DarkGray = "#282828";

const useStyles = makeStyles((theme) => ({
  container: {
    container: {
      width: "100%",
      height: "100%",
      marginTop: "50px",
      marginBottom: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ["@media (min-width:780px)"]: {
        // marginTop: "60px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      },
      ["@media (max-width:1024px)"]: {
        width: "90%",
      },
    },
  },
  root: {
    width: "450px",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
    // "&:hover": {
    //   backgroundColor: "#FFF5D1",
    // },
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: "10px",
    // marginLeft: "10px",
    // marginRight: "8px",
    fontFamily: "'Manrope', sans-serif",
    color: "#282828",
  },
  user: {
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif;",
  },
  span: {
    fontSize: "17px",
  },
  concept: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontFamily: { ParagraphFont },
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

const SubHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  padding: 30px;
  background-color: ${Yellow};

  @media (min-width: 768px) {
    width: 900px;
    margin-top: 30px;
    justify-content: center;
    padding: 20px;
  }
`;

const FilterButtons = styled.div`
  display: flex;
`;

const SubHeading = styled.p`
  display: flex;
  margin: 5px;
  font-family: ${HeaderFont};
  color: ${DarkGray};
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const LikesButton = styled.button`
display: inline-block;
color: ${DarkGray};
background-color: ${LightPink};
width: 150x;
border: 4px solid ${LightPink};
text-align: center;
font-weight: bold;
font-family: ${ParagraphFont},
font-size: 16px;
padding: 13px;
margin: 5px;
border-radius: 10px;
text-decoration: none;
cursor: pointer;
transition: background-color 1s ease-in, color 1s ease-in;
:hover {
  color: white;
  background-color: black;
  border:4px solid black;
  transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
