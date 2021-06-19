import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Grid, makeStyles, Container } from "@material-ui/core";
import ConceptCard from "../components/ConceptCard";
import {
  ConceptButtonWrapper,
  CustomButton,
} from "components/StyledComponents";
import ConceptHeader from "../components/ConceptHeader";
import Footer from "../components/Footer";
import { API_URL } from "../reusables/urls";
import TopSearches from "../components/TopSearches";

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

  // add useEffect
  useEffect(() => {
    fetch(
      `http://localhost:8080/concepts?page=${pageNumber}&searchText=${searchText}`
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
  // lagt till key på id, men hjälper inte för att få bort varning om key i consolen
  return (
    <>
      <Navigation />
      <ConceptHeader inputValue={searchText} handleOnChange={handleChange} />
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="start"
          color="blue"
        >
          {conceptList.data?.map((item) => {
            console.log(item._id);
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

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    marginTop: "300px",
    ["@media (min-width:780px)"]: {
      marginTop: "60px",
    },
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
