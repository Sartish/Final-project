import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { concepts } from "../reducers/concepts";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
import CustomCard from "../components/CustomCard";

// Concept should render all concepts from A-Z
// when clicked render new component with allexplanation
const Concepts = () => {
  const [conceptList, setConceptList] = useState({});
  //   const descriptionItems = useSelector((store) => store.concepts.items);

  // add useEffect
  useEffect(() => {
    fetch(API_URL("concepts"))
      .then((res) => res.json())
      .then((data) => setConceptList(data));
  });

  return (
    <div>
      <Navigation />
      <h1>Here we list all of the concepts</h1>
      {conceptList.data?.map((item) => {
        return (
          <>
            <CustomCard header="A HEADER" paragraph="{item.concept}" />
            <div className="concept-card" key={item._id}>
              <h2>{item.concept}</h2>
              {/* <h2>{item.description}</h2> */}
              <Link to={`/concepts/${item._id}`}>
                {/* <CustomButton type="submit" text="read more" /> */}
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Concepts;

//flow: Concept -> explanation
