import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
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
    // fetch(`http://localhost:8080/concepts`)
    fetch(`https://techtionary-project.herokuapp.com/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  // in the fetch we collect all data rendered from the API

  return (
    <Container className={classes.container}>
      <TopSearchesHeaderContainer>
        <Header>Top 20 recent searches</Header>
      </TopSearchesHeaderContainer>
      <List>
        {sortDesc(allConcepts.data)?.map((item) => {
          console.log(item._id);
          return (
            <li style={{ marginBottom: 6, fontSize: 16, color: "black" }}>
              <Link className={classes.link} to={`/concepts/${item._id}`}>
                {item.concept}
              </Link>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
export default TopSearches;

const HeaderFont = "'Manrope', sans-serif";
const LightPink = "#FFCFF1";

const DarkGray = "#282828";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff5d1",
    ["@media (min-width:780px)"]: {
      marginTop: "60px",
      marginBottom: "60px",
      padding: "20px",
      alignItems: "center",
    },
  },
  link: {
    color: "black",
    textDecoration: "none",
    display: "flex",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#ff69b4;",
    },
  },
}));

const TopSearchesHeaderContainer = styled.div`
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
  text-align: center;
  border-bottom: 2px solid ${LightPink};
  font-family: ${HeaderFont};
  color: ${DarkGray};
  @media (min-width: 768px) {
    font-size: 35px;
    margin-left: 0px;
  }
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: "300px";
  height: 520px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 300px;
    margin-left: 0px;
    column-count: 2;
    margin-left: 0px;
  }
`;

// const Numbers = styled.p`
//   display: flex;
//   flex-wrap: wrap;
//   padding-bottom: 0px;
//   flex-direction: column;
//   align-items: flex-start;
//   padding-bottom: 30px;
//   font-size: 16px;
//   font-family: ${ParagraphFont}
//   cursor: pointer;
//   text-decoration: none;
//   height: 50px;
//   box-sizing: border-box;
//   max-width: 50%;
//   color: ${Gray};
//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     align-items: center;
//     margin: 0px;
//     max-width: 0;
//   }
