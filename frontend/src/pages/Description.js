import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
    <>

      <Navigation />
      <Wrapper>
      {/* <h1>This is a single concept</h1> */}
      {/* <Concept>Concept: {concept}</Concept> */}
      <Concept>{concept}</Concept>
      <ContributeInvite>
        <h3>Do you have a good explanation for this concept? Contribute!<span role="img" aria-label="point">{"👇"}</span></h3>
          <Link to={`/contribute/${location.pathname.substring(1)}`}>
          <Button>contribute </Button>
        </Link>
        <h4>Is there an explanation you like? Give it a <span role="img" aria-label="star">{"⭐"}</span> </h4>
      </ContributeInvite>


      {description?.map((item)=> {
          return (

            <DescriptionCard key={item._id}>
              <h3>{item.text}</h3>
              <p>Contributor</p>
              <LikeSection>
                <HeartButton
                  style={{ background: item.likes > 0 ? "#006cde" : "#ffadad"  }}
                  onClick={() => postLikeToBackend(item._id)}>
                  <Star role="img" aria-label="star">{"⭐"}</Star>
                </HeartButton>
                  <p>x {item.likes}</p>
              </LikeSection>
            </DescriptionCard>

          )
        })}
    </Wrapper>
    </>
  );
};


export default Description;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 `;

const Star = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #006cde;
  background-image: linear-gradient(90deg, #006cde 0%, #fc00ff 100%);
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;

  :hover {
    background-color: #fc00ff;
    background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  }

  @media (min-width: 767px) {
    font-size: 19px;
  }
`;

const LikeSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const HeartButton = styled.button`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ffe9e9;
  cursor: pointer;
  border: none;
`;

const ContributeInvite = styled.div`
  text-align: center;
`;

const Concept = styled.h2`
text-align: center;
font-size: 40px;
`;

const DescriptionCard = styled.div`
border: 1px solid #000;
box-shadow: 10px 12px 0 -6px #000;
width:80%;
padding-left: 10px;
padding-right: 10px;
background-color: azure;
margin:10px;
text-align: center;

@media (min-width: 767px){
  width: 50%;
}

@media (min-width: 1025px){
 width: 20%;
}
`;
