import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import {
  CardContainer,
  CardInfo,
  CardParagraphOne,
} from "components/StyledComponents";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));

function ConceptCard({ itemId, concept, link }) {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={link}>
      <CardContainer key={itemId}>
        <CardInfo>
          <h2>{concept}</h2>
          <CardParagraphOne>nr x Contributions</CardParagraphOne>
        </CardInfo>
      </CardContainer>
    </Link>
  );
}

export default ConceptCard;
