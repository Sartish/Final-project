import React from "react";
import { Paper, Button, makeStyles, Card } from "@material-ui/core";
import Navigation from "../components/Navigation";
import robots from "../assets/pinkroboto.png";
import styled from "styled-components/macro";

const font = "'Rubik', 'sans-serif'";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#dbe6fd",
    // background:
    //   "linear-gradient(0deg,rgba(34, 128, 195, 1) 14%, rgba(117, 202, 210, 1) 94%)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyConter: "center",
    flexDirection: "row",
    backgroundColor: "#dbe6fd",
  },
  info: {
    backgroundColor: "#47597e",
    width: "350px",
    marginLeft: "40px",
    color: "white",
    fontFamily: font,
    padding: "20px",
    fontSize: "20px",
    lineHeight: "1.2",
  },
  header: {
    fontFamily: font,
    fontSize: "40px",
  },
  image: {
    width: "800px",
  },
  img: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Container>
        <div className={classes.wrapper} variant="outlined">
          <Card className={classes.info} variant="outlined">
            <h2 className={classes.header}>TECHTIONARY</h2>
            <p>
              Have you heard a techy word ant thought WHAT does that this mean?
              Techionary aimes to explains difficult tech-concept as easy as
              possible. Have a look!
            </p>
            <p>icon</p>
            <Button>Show me</Button>
          </Card>
          <div className={classes.image}>
            <img className={classes.img} src={robots}></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #47597e;
  min-height: 100vh;
  color: white;
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
