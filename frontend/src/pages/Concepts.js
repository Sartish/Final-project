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

import CustomButton from '../components/CustomButton';
import SignOut from '../components/SignOut';

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    height: 200,
    margin: "10px",
  },
  card: {
    padding: "20px",
  },
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
                <Card className={classes.root} key={item._id}>
                  <CardContent className={classes.card}>
                    <h2>{item.concept}</h2>
                    <Typography variant="body2" component="p">
                      5 Contributions
                    </Typography>
                    <Link to={`/concepts/${item._id}`}>
                      <CustomButton
                        type="submit"
                        text="read more"
                        color="Primary"
                        variant="contained"
                      >
                        Read more
                      </CustomButton>
                    </Link>
                  </CardContent>
                </Card>
              </>
            );
          })}
          <button onClick={movePreviousPage} disabled={pageNumber === 1} >Previous page</button>
          <button onClick={moveNextPage} disabled={pageNumber === 10} >Next page</button>
        </Grid>
      </Container>
    </div>
  );
};

export default Concepts;

//flow: Concept -> explanation
