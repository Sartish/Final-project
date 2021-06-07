import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { API_URL } from "../reusables/urls";
import Navigation from "../components/Navigation";
// import AddDescription from '../components/AddDescription';

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
    getDescriptions()
  }, [location.pathname,]);

const getDescriptions = () => {
  let slug = location.pathname.substring(1)
    fetch(API_URL(slug))
      .then((res) => res.json())
      .then((data) => setData(data));
}
// render POST like on click?
// How do we add toggle, so user can only like once and not spam, FE or BE?
// Also sort, more likes on top of the page, BE, right?
// Pagination FE and BE

  const postLikeToBackend = (descriptionId) => {
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
  }
  fetch(API_URL("concepts/" + descriptionId + "/likes"), options)
    .then(res => res.json())
    .then((data) => getDescriptions());
}


  return (
    <div>
      <Navigation />
      <h1>This is a single concept</h1>
      <h2>Concept: {concept}</h2>

      <button>contribute </button>

      {description?.map((item)=> {
          return (
            <div key={item._id}>
            <p>Desc: {item.text}</p>
            <p>
            Id: {item._id}
              </p>
              <p>Contributor</p>
            <button onClick={() => postLikeToBackend(item._id)}>
              <span role="img" aria-label="heart">
                {"❤️"}</span></button>
            <p>Number of likes: {item.likes}</p>
            </div>
          )
        })}


    </div>
  );
};

export default Description;
