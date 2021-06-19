import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import {
  StartButtonContainer,
  Paragraph,
  CustomButton,
} from "components/StyledComponents";

const DescriptionHeader = ({ heading }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <Title>{heading}</Title>
      </Container>
    </div>
  );
};

export default DescriptionHeader;

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
  border: solid 2px #ffcff1;
  padding: 10px;
  font-size: 50px;
`;
