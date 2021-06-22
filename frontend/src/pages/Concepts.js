import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import styled from "styled-components/macro";

import ConceptCard from "../components/ConceptCard";
import ConceptHeader from "../components/ConceptHeader";
import Footer from "../components/Footer";
import { API_URL } from "../reusables/urls";
import TopSearches from "../components/TopSearches";
import Navigation from "../components/Navigation";

const Concepts = () => {
  const classes = useStyles();
  const [conceptList, setConceptList] = useState({});
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    console.log("hej");
  };

  useEffect(() => {
    fetch(
      // `http://localhost:8080/concepts?page=${pageNumber}&searchText=${searchText}`
      `https://techtionary-project.herokuapp.com/concepts?page=${pageNumber}&searchText=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  }, [pageNumber, searchText]);

  const postClickToBackend = (conceptId) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(API_URL("concepts/concept/" + conceptId + "/addlikes"), options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const moveNextPage = () => {
    setPageNumber(pageNumber + 1);
    console.log("next");
  };

  const movePreviousPage = () => {
    setPageNumber(pageNumber - 1);
    console.log("previous");
  };

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <ConceptHeader inputValue={searchText} handleOnChange={handleChange} />
        <Grid container direction="row" justify="center" color="blue">
          <HeaderConcepts>
            <ConceptsParagraph>All Concepts A-Z </ConceptsParagraph>
          </HeaderConcepts>
          {conceptList.data?.map((item) => {
            return (
              <>
                <ConceptCard
                  postClickToBackend={() => {
                    postClickToBackend(item._id);
                  }}
                  link={`/concepts/${item._id}`}
                  itemId={item._id}
                  concept={item.concept}
                />
              </>
            );
          })}
        </Grid>
        <ConceptButtonWrapper>
          <CustomButton
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={movePreviousPage}
            disabled={pageNumber === 1}
          >
            Back
          </CustomButton>
          <PageNumber>{pageNumber}</PageNumber>
          <CustomButton
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={moveNextPage}
            disabled={pageNumber === 10}
          >
            Next
          </CustomButton>
        </ConceptButtonWrapper>
        <TopSearches />
      </Container>
      <Footer />
    </>
  );
};

export default Concepts;

const ParagraphFont = "'Roboto', sans-serif;";
const HotPink = "#FF69B4";
const LightPink = "#FFCFF1";
const HeaderFont = "'Manrope', sans-serif";
const DarkGray = "#282828";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    marginTop: "50px",
    marginBottom: "0px",
    // ["@media (min-width:780px)"]: {
    //   marginTop: "60px",
    // },
  },
}));

const HeaderConcepts = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 30px;
    width: 500px;
  }
`;

const ConceptsParagraph = styled.h3`
  display: flex;
  font-size: 24px;
  margin: 0px;
  font-family: ${HeaderFont};
  border-bottom: 2px solid ${LightPink};
  color: ${DarkGray};
`;

const PageNumber = styled.p`
  font-family: ${ParagraphFont};
  font-size: 16px;
`;
const ConceptButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

const CustomButton = styled.button`
  display: inline-block;
  color: white;
  background-color: ${HotPink};
  width: 100px;
  border: 4px solid ${HotPink};
  text-align: center;
  font-weight: bold;
  font-family: ${ParagraphFont};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
