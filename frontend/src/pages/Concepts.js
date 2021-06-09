import React, { useState, useEffect } from "react";
import { PAGE_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import {
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  // Button,
  Container,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import SignOut from '../components/SignOut';

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "none",
    width: 200,
    height: 200,
    margin: "10px",
    '&:hover': {
      backgroundColor: "#f05945",
    }
  },
  card: {
    padding: "20px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  concept: {
    display: "flex"
  }
}));

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Concepts = () => {
  const classes = useStyles();
  const [conceptList, setConceptList] = useState({});
  const [pageNumber, setPageNumber] = useState(1)
  //   const descriptionItems = useSelector((store) => store.concepts.items);

  // add useEffect
  useEffect(() => {
    fetch(`http://localhost:8080/concepts?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  }, [pageNumber]);

  const moveNextPage = () => {
    setPageNumber(pageNumber + 1)
    console.log("next")
  }

  const movePreviousPage = () => {
    setPageNumber(pageNumber -1)
    console.log("previous")
  }

  return (
    <div>
      <Navigation />
      <SignOut />
      <Container>
        <h1>Here we list all of the concepts</h1>
        <Grid container direction="row" justify="center" alignItems="start">
          {conceptList.data?.map((item) => {
            return (
              <>
              <Link className={classes.link} to={`/concepts/${item._id}`}>
                <Card className={classes.root} key={item._id}>
                  <CardContent className={classes.card}>
                    <h2 className={classes.concept}>{item.concept}</h2>
                    {/* <Typography variant="body2" component="p">
                      5 Contributions
                    </Typography> */}
                    </CardContent>
                  </Card>
                </Link>
              </>
            );
          })}

        </Grid>
        <div>
          <Button onClick={movePreviousPage} disabled={pageNumber === 1} >Previous page</Button>
          <Button onClick={moveNextPage} disabled={pageNumber === 10} >Next page</Button>
        </div>
      </Container>
    </div>
  );
};

export default Concepts;

//flow: Concept -> explanation

const Button = styled.button`
  border-radius: 15px;
  margin: 10px;
`;

// const ButtonDiv = styled.div`

// `;
