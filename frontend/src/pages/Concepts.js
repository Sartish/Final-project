import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { Grid, makeStyles, Container, TextField } from "@material-ui/core";
import ConceptCard from "../components/ConceptCard";
import { Button, ConceptButtonWrapper } from "components/StyledComponents";

import ConceptHeader from "../components/ConceptHeader";
import Footer from "../components/Footer";
import SignOut from "../components/SignOut";
import concepts from "../reducers/concepts";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Concepts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [conceptList, setConceptList] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  // const allConcepts = useSelector((store) => store.concepts.conceptList);

  const handleClick = () => {
    dispatch(
      concepts.actions.setConcept({
        id: Date.now(),
      })
    );
  };

  console.log(conceptList, "conceptList");

  // add useEffect
  useEffect(() => {
    fetch(`http://localhost:8080/concepts?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  }, [pageNumber]);

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
      <ConceptHeader />
      <Container className={classes.container}>
        <h3 className={classes.header}>All Concepts here</h3>
        <form className={classes.search}>
          <TextField
            id="outlined-basic"
            label="search concept"
            variant="outlined"
          />
          <SignOut />
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="start"
          color="blue"
        >
          {/* {allConcepts.map((item) => {
            return (
              <ConceptCard
                id={item.id}
                concept={item.concept}
                link={`/concepts/${item._id}`}
              />
            );
          })} */}
          {conceptList.data?.map((item) => {
            return (
              <>
                <ConceptCard
                  onClick={handleClick}
                  link={`/concepts/${item._id}`}
                  itemId={item._id}
                  concept={item.concept}
                />
              </>
            );
          })}
        </Grid>
        <ConceptButtonWrapper>
          <Button onClick={movePreviousPage} disabled={pageNumber === 1}>
            Back
          </Button>
          <Button onClick={moveNextPage} disabled={pageNumber === 10}>
            Next
          </Button>
        </ConceptButtonWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Concepts;

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    marginTop: "50px",
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
