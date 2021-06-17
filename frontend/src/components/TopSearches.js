import React, { useEffect, useState } from "react";

//We will using the hook “useState” to hold our data returned from the API as well as
//our the data that is returned from the search.

const TopSearches = () => {
  // Vad den får tillbaka från första fetchen ({ data: [] }); så när vi sen ska hämta den på nytt
  // i våran funktion så måste vi nå den på rätt sätt
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  // sorting our mapped data in decsending order, then slice to get the first 20 popular searches

  let size = 20;

  const sortDesc = () => {
    return allConcepts.data
      .sort((a, b) => (a.likes > b.likes ? -1 : 1))
      .slice(0, size);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  // in the fetch we collect all data rendered from the API

  return (
    <div>
      <div>Top 20 recent searches</div>
      {sortDesc(allConcepts.data)?.map((item) => {
        console.log(item._id);
        return (
          // add a grid
          <>
            <ol>
              <li>{item.concept}</li>
            </ol>
          </>
        );
      })}
    </div>
  );
};

export default TopSearches;
