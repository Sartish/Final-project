import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";

const DescriptionHeader = ({ heading }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Title>{heading}</Title>
      </Container>
    </div>
  );
};

export default DescriptionHeader;

const HeaderFont = "'Manrope', sans-serif";
const LightPink = "#FFCFF1";
const DarkGray = "#282828";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100px",
    marginTop: "35px",
  },
}));

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 4px ${LightPink};
  font-size: 35px;
  margin: 0px;
  font-family: ${HeaderFont};
  color: ${DarkGray};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
