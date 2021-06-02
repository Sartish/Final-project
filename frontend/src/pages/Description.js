import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Description = () => {
  // const [descriptionList, setDescriptionList] = useState({});
  //   const descriptionItems = useSelector((store) => store.concepts.items);
  // const { conceptId } = useParams;
  // do fetch on concepts/conceptid? To get one Id and then do map over all the descriptions.

  useEffect(() => {
    fetch(API_URL(`concepts/60b399098069021797eb4530`))
      .then((res) => res.json())
      // .then((data) => setDescriptionList(data));
      .then((data) => console.log(data));
  });

  return (
    <div>
      <Navigation />
      <h1>This is a single concept</h1>
      <p>id for item </p>
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
