import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Description = () => {
  const [description, setDescription] = useState("");
  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.

  //location find what URL the request has, pathName reveals this
  // let slug takes away first string in pathName URL
  const location = useLocation();

  console.log(location);
  let slug = location.pathname.substring(1);
  useEffect(() => {
    fetch(API_URL(slug))
      .then((res) => res.json())
      // .then((data) => setDescriptionList(data));
      .then((data) => setDescription(data.description));
  });

  return (
    <div>
      <Navigation />
      <h1>This is a single concept</h1>
      <p>id for item </p>
      <p>Desc: {description}</p>
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
    </div>
  );
};

export default Description;
