import React, { useState } from "react";

function Upload(){
    const [fileName, setFileName] = useState("");
    return(<div>
            <div>
                <p> Upload your image</p>
            </div>
            <div className="input-container">
                <input onChange={(e)=>setFileName(e.target.files[0].name)} type = "file" accept="image/png, image/jpeg, image/jpg"/>
            </div>
            <div className="button-container">
                <button className="button-8" onClick={()=>alert("Your file name is"+fileName)}> Generate Captions </button>
            </div>
            </div>

    );
}

export default Upload;