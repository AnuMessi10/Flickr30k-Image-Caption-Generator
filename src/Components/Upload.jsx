import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoSizeSelectActualTwoToneIcon from "@mui/icons-material/PhotoSizeSelectActualTwoTone";

const Upload = () => {
  const Input = styled("input")({
    display: "none",
  });
  const [data, setData] = useState([{}]);

  const [fileName, setFileName] = useState("");
  console.info(fileName);
  console.log(data);

  const generateCaption = (e) => {
    // e.preventDefault();
    // const temp = new FormData();
    // temp.append('file', this.uploadInput.files[0]);
    // temp.append('filename', this.fileName.value);
    fetch("http://localhost:5000/api/caption", {
      method: "POST",
      body: fileName,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <p>Upload your image</p>
      </div>
      <form onSubmit={generateCaption()}>
        <div className="input-container">
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) =>
                setFileName(URL.createObjectURL(e.target.files[0]))
              }
            />
            <Button
              variant="contained"
              endIcon={<PhotoSizeSelectActualTwoToneIcon />}
              component="span"
            >
              Upload
            </Button>
          </label>
        </div>
        <div>
          {fileName && (
            <img src={fileName} alt="uploaded" height={300} width={300} />
          )}
        </div>
        <div>
          {fileName && <p>{`Your image has been uploaded successfully!`}</p>}
        </div>
        <div className="button-container">
          <button className="button-8" type="submit">
            Generate Captions
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
