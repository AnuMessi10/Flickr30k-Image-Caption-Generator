import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoSizeSelectActualTwoToneIcon from "@mui/icons-material/PhotoSizeSelectActualTwoTone";

const Upload = () => {
  const Input = styled("input")({
    display: "none",
  });
  const [fileName, setFileName] = useState("");
  console.info(fileName);

  return (
    <div>
      <div>
        <p>Upload your image</p>
      </div>
      <div className="input-container">
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => setFileName(e.target.files[0].name)}
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
        {fileName !== "" ? (
          <p>{`Your file ${fileName} has been uploaded successfully!`}</p>
        ) : null}
      </div>
      <div className="button-container">
        <button className="button-8">
          Generate Captions
        </button>
      </div>
    </div>
  );
};

export default Upload;
