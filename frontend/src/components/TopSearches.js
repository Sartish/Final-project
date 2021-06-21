import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles, Container } from "@material-ui/core";

const TopSearches = () => {
  const classes = useStyles();
  // Vad den får tillbaka från första fetchen ({ data: [] }); så när vi sen ska hämta den på nytt
  // i våran funktion så måste vi nå den på rätt sätt
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  // sorting our mapped data in decsending order, then slice to get the first 20 popular searches

  let size = 21;

  const sortDesc = () => {
    return allConcepts.data
      .sort((a, b) => (a.likes > b.likes ? -1 : 1))
      .slice(0, size);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  // in the fetch we collect all data rendered from the API

  return (
    <Container className={classes.container}>
      <TopSearchesHeaderContainer>
        <Header>Top 20 recent searches</Header>
      </TopSearchesHeaderContainer>
      <Container className={classes.container}>
        <List>
          {sortDesc(allConcepts.data)?.map((item) => {
            // console.log(item._id);
            return (
              <Link key={item._id} className={classes.link} to={`/concepts/${item._id}`}>
                <Numbers style={{ textDecoration: "none" }}>
                  {item.concept}
                </Numbers>
              </Link>
            );
          })}
        </List>
      </Container>
    </Container>
  );
};

export default TopSearches;

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif;"
const HotPink = "#FF69B4"
const LightPink = "#FFCFF1"
const Yellow = "#FFF5D1"

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#fff5d1",
    ["@media (min-width:780px)"]: {
      marginTop: "60px",
      marginBottom: "60px",
      padding: "20px",
    },
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#ff69b4;",
    },
  },
}));


const TopSearchesHeaderContainer = styled.div`
  // width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

const Header = styled.h3`
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin 0;
  text-align: center;
  border-bottom: 2px solid ${LightPink};
  font-family: ${HeaderFont};
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  height: 600px;
  width: 400px;
  padding: 0px;

  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 1000px;
    height: 350px;
    padding: 0 80px;
  }
`;

const Numbers = styled.li`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 30px;
  font-size: 16px;
  font-family: ${ParagraphFont}
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-bottom: 40px;
    line-height: 30px;
    padding-left: 30px;
    margin: 0px;
  }
`;

const Border = styled.div`
  display: flex;
  text-align: center;
  width: 300px;
  height: 10px;
  background-color: ${Yellow};
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 500px;
    margin 0;
  }
`;
