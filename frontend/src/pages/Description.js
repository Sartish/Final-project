import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Grid, makeStyles, Container } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";

import {
  Button,
  HeaderWrapper,
  FirstHeader,
  SecondHeader,
  ConceptButtonWrapper,
} from "components/StyledComponents";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

import SignOut from "../components/SignOut";

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "#223A59",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#223A59",
    width: "100%",
    height: "100%",
  },
}));

// import AddDescription from '../components/AddDescription';

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Description = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({});

  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.
  const { description, user } = data;

  const Loggedin = () => {
    // redirect user to '/' path
    console.log("Checking access token", accessToken);
    if (accessToken) {
      history.push(`/contribute/${location.pathname.substring(1)}`);
    } else {
      history.push("/signin");
    }
  };

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
    console.log();
  };

  return (
    <>
      <Navigation />
      <div className={classes.background}>
        <Container className={classes.container}>
          <HeaderWrapper>
            <SignOut />
            <FirstHeader>API is explained here</FirstHeader>
            <SecondHeader>
              Psst! Do you have a good explanation for this concept? Contribute!
              <span role="img" aria-label="point">
                {"👇"}
              </span>
            </SecondHeader>
            {/* <Link to={`/contribute/${location.pathname.substring(1)}`}> */}
            <Button onClick={Loggedin}>Contribute</Button>
            {/* </Link> */}
          </HeaderWrapper>
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
                <DescriptionCard key={item._id}>
                  <ConceptHeader>Maybe header</ConceptHeader>
                  <DescriptionOfConcept>"{item.text}"</DescriptionOfConcept>
                  <Tags>#React #frontend #cooltags </Tags>
                  <LikeSection>
                    <Contributor>Contributor {item.user}</Contributor>
                    <HeartSection>
                      <HeartButton
                        style={{
                          background: item.likes > 0 ? "#006cde" : "#ffadad",
                        }}
                        onClick={() => postLikeToBackend(item._id)}
                      >
                        <Star role="img" aria-label="star">
                          <GradeIcon />
                        </Star>
                      </HeartButton>
                      <Likes>x {item.likes}</Likes>
                    </HeartSection>
                  </LikeSection>
                </DescriptionCard>
              );
            })}
          </Grid>
          <ConceptButtonWrapper>
            <Button>Back</Button>
            <Button>Next</Button>
          </ConceptButtonWrapper>
        </Container>
      </div>
    </>
  );
};

export default Description;

const Star = styled.span`
  font-size: 18px;
`;

const LikeSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 300px;
  font-style: italic;
`;
const ConceptHeader = styled.h2`
  font-family: Roboto, sans-serif;
`;
const DescriptionOfConcept = styled.h3`
  font-style: italic;
`;

const Tags = styled.p`
  font-family: Roboto, sans-serif;
`;
const Contributor = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;

const HeartSection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto, sans-serif;
`;
const HeartButton = styled.button`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ffe9e9;
  cursor: pointer;
  border: none;
  padding: ;
`;

const Likes = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;

const DescriptionCard = styled.div`
background: #a3ddcb;
border-radius: 2px;
display: inline-block;
height: 200px;
width: 400px;
padding: 20px;
text-decoration: none;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
box-shadow: 3px 5px;
:hover {
  background-color: #f2a154;
`;
