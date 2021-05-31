import React, { useState, useEffect } from "react";

import { API_URL } from "../reusables/urls";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Description = () => {
  const [descriptionList, setDescriptionList] = useState({});
  //   const descriptionItems = useSelector((store) => store.concepts.items);

  // add useEffect
  useEffect(() => {
    fetch(API_URL("concepts"))
      .then((res) => res.json())
      .then((data) => setDescriptionList(data));
  });

  return (
    <div>
      <h1>This is a single concept</h1>
      {descriptionList.data?.map((item) => {
        return (
          <div className="concept-card" key={item._id}>
            <h2>{item.concept}</h2>
            <h2>{item.description}</h2>
            <h2>{item.likes}</h2>
            <h2>{item.createdAt}</h2>
            <button>contribute</button>
          </div>
        );
      })}
    </div>
  );
};

export default Description;
