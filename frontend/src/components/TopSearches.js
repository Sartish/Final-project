import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { makeStyles, Container } from "@material-ui/core";

import { BASE_URL } from "../reusables/urls";

const TopSearches = () => {
  const classes = useStyles();
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  // sorting our mapped data in decsending order, then slice to get the first 20 popular searches
  let size = 20;

  const sortDesc = () => {
    return allConcepts.data
      .sort((a, b) => (a.likes > b.likes ? -1 : 1))
      .slice(0, size);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/concepts`)
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
          return (
            <li
              key={item._id}
              style={{ marginBottom: 6, fontSize: 16, color: "black" }}
            >
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
    width: 600px;
    height: 300px;
    padding-left: 30px;
    align-items: "flex-end";
    margin-left: 70px;
  }
  @media screen and (min-width: 1024px) {
    width: 800px;
    height: 200px;
  }
`;
