import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, makeStyles, Container } from "@material-ui/core";
import styled from "styled-components/macro";

import ConceptCard from "../components/ConceptCard";
import ConceptHeader from "../components/ConceptHeader";
import Footer from "../components/Footer";
import { API_URL, BASE_URL } from "../reusables/urls";
import TopSearches from "../components/TopSearches";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";
import { ui } from "../reducers/ui";

const Concepts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.ui.isLoading);

  const [conceptList, setConceptList] = useState({});
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(ui.actions.setLoading(true));
    fetch(`${BASE_URL}/concepts?page=${pageNumber}&searchText=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setConceptList(data);
        const pages = data.totalPages;
        setTotalPages(pages);
        dispatch(ui.actions.setLoading(false));
      });
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
  };

  const movePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <ConceptHeader inputValue={searchText} handleOnChange={handleChange} />
        <HeaderConcepts>
          <ConceptsParagraph>All Concepts A-Z </ConceptsParagraph>
        </HeaderConcepts>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid container direction="row" justify="center" color="blue">
            {conceptList.data?.map((item) => {
              return (
                <>
                  <ConceptCard
                    key={item._id}
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
        )}
        <ConceptButtonWrapper>
          <CustomButton
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={movePreviousPage}
            disabled={parseInt(pageNumber) === 1}
          >
            Back
          </CustomButton>
          <PageNumber>
            {pageNumber} / {totalPages}
          </PageNumber>
          <CustomButton
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={moveNextPage}
            disabled={parseInt(pageNumber) === parseInt(totalPages)}
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
  },
}));

const HeaderConcepts = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  align-items: center;
  @media (min-width: 1024px) {
    width: 1200px;
    margin-top: 30px;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const ConceptsParagraph = styled.h3`
  display: flex;
  font-size: 24px;
  margin-top: 5px;
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
    border: 4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
  }
  :disabled {
    background-color: grey;
    border: grey;
  }
`;
