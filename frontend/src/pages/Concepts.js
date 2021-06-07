import React, { useState, useEffect } from "react";
import { API_URL } from "../reusables/urls";
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
  //   const descriptionItems = useSelector((store) => store.concepts.items);

  // add useEffect
  useEffect(() => {
    fetch(API_URL("concepts"))
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  });

  return (
    <div>
      <Navigation />
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
        </Grid>
      </Container>
    </div>
  );
};

export default Concepts;

//flow: Concept -> explanation
