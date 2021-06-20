import React, { useState, useRef } from "react";
import styled from "styled-components";

const UploadImage = () => {
  const [fileName, setFileName] = useState();
  const fileInput = useRef();

  const uploadImage = ({ id }) => {
    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);
    fetch(`http://localhost:8080/signup/user/${id}/image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Oops! Choose a picture first! (formats: png/jpg/jpeg)"
          );
        }
        return res.json();
      })
      .then(() => {
        console.log("working?");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <PicInput
        type="file"
        ref={fileInput}
        id="profilepic-button"
        onChange={(event) => setFileName(event.target.value)}
        accept="image/png, image/jpeg, image/jpg"
      />
      <button type="submit" onClick={uploadImage}>
        Upload
      </button>
      <FileName>{fileName}</FileName>
    </>
  );
};

export default UploadImage;

const PicInput = styled.input`
  color: transparent;
  width: 400px;
  height: 106px;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: "+";
    color: transparent;
    display: inline-block;
    background-image: url(${process.env.PUBLIC_URL +
    "/assets/profileButton.svg"});
    width: 106px;
    height: 106px;
    border-radius: 50%;
    cursor: pointer;
  }

  &:active::before {
    background-image: none;
  }

  &:focus {
    outline: 2px solid #f56c54;
  }
`;

const FileName = styled.p`
  font-size: 10px;
  width: 100px;
  overflow-wrap: break-word;
  color: #31556d;
`;
