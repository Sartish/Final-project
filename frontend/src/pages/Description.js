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
      <p>Concept: {concept}</p>
      <p>Desc: {description}</p>
      <p>Number of likes: {likes}</p>

      {/* {descriptionList.data?.map((item) => {
        return (
          <div className="concept-card" key={item._id}>
            <h2>{item.concept}</h2>
            <h2>{item.description}</h2>
            <h2>{item.likes}</h2>
            <h2>{item.createdAt}</h2>
            <button>contribute</button>
          </div>
        );
      })} */}

      <button>Contribute</button>
    </div>
  );
};

export default Description;
