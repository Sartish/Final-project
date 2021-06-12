import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import { Grid, makeStyles, Container } from "@material-ui/core";
import ConceptCard from "../components/ConceptCard";
import {
  Button,
  HeaderWrapper,
  FirstHeader,
  SecondHeader,
  ConceptButtonWrapper,
} from "components/StyledComponents";

import SignOut from "../components/SignOut";
import concepts from "../reducers/concepts";

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    height: "100vh",
  },
  container: {
    backgroundColor: "#e1e8eb",
    width: "100%",
    height: "100vh",
  },
}));
// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Concepts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [conceptList, setConceptList] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = () => {
    dispatch(
      concepts.actions.setConcept({
        id: Date.now(),
      })
    );
  };

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
      <div className={classes.background}>
        <Container className={classes.container}>
          <HeaderWrapper>
            <SignOut />
            <FirstHeader>All concepts</FirstHeader>
            <SecondHeader>Listed from A-Z</SecondHeader>
          </HeaderWrapper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="start"
            color="blue"
          >
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
      </div>
    </>
  );
};

export default Concepts;
