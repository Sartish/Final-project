import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Description = () => {
  const [data, setData] = useState({});
  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.
  const { description, concept, likes } = data;

  // const description = data.description
  // const concept = data.concept
  //location find what URL the request has, pathName reveals this
  // let slug takes away first string in pathName URL

  const location = useLocation();
  useEffect(() => {
    let slug = location.pathname.substring(1);
    fetch(API_URL(slug))
      .then((res) => res.json())
      // .then((data) => setDescriptionList(data));
      .then((data) => setData(data));
  }, [location.pathname]);

  return (
    <div>
      <Navigation />
      <h1>This is a single concept</h1>
      <h2>Concept: {concept}</h2>

      {description?.map((item)=> {
          return (
            <div key={item._id}>
            <p>Desc: {item.text}</p>
            <p>Number of likes: {item.likes}</p>
            </div>
          )
        })}
      <button>Contribute</button>
    </div>
  );
};

export default Description;
