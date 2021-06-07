import React, {useState} from "react"

import { API_URL } from "../reusables/urls";

const AddedDescription = () => {
    const [description, setDescription] = useState("")


    const onFormSubmit = (e) => {
        e.preventDefault();

        const options = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description }),
        };

        fetch(API_URL("concepts"), options)
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    return(
        <>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        </>
    )
};

export default AddedDescription;