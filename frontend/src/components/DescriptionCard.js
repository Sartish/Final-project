import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { API_URL } from "../reusables/urls";

import {
  CardContainerDescription,
  CardInfo,
  CardParagraphOne,
} from "components/StyledComponents";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));

function DescriptionCard() {
  const classes = useStyles();
  const [data, setData] = useState({});

  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.
  const { description, concept, likes } = data;

  // const description = data.description
  // const concept = data.concept
  //location find what URL the request has, pathName reveals this
  // let slug takes away first string in pathName URL

  const location = useLocation();

  useEffect(() => {
    getDescriptions();
  }, [location.pathname]);

  const getDescriptions = () => {
    let slug = location.pathname.substring(1);
    fetch(API_URL(slug))
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  // render POST like on click?
  // How do we add toggle, so user can only like once and not spam, FE or BE?
  // Also sort, more likes on top of the page, BE, right?
  // Pagination FE and BE

  const postLikeToBackend = (descriptionId) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(API_URL("concepts/" + descriptionId + "/likes"), options)
      .then((res) => res.json())
      .then((data) => getDescriptions());
  };

  return (
    <CardContainerDescription key={item._id}>
      <CardInfo>
        <h2>{item.description}</h2>
        <CardParagraphOne>number of likes: {item.likes}</CardParagraphOne>
        <div
          className={classes.heart}
          style={{
            background: item.likes > 0 ? "#006cde" : "#ffadad",
          }}
          onClick={() => postLikeToBackend(item._id)}
        >
          <div role="img" aria-label="star">
            {"⭐"}
          </div>
        </div>
      </CardInfo>
    </CardContainerDescription>
  );
}

export default DescriptionCard;
