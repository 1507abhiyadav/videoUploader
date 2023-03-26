import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [file, SetFile] = useState("");
  const [uploaded, setUploadeed] = useState(null);

  const handleFileChange = (event) => {
    SetFile(event.target.files[0]);
    // console.log(event.target.files[0])
  };

  const handleApi = () => {
    //call api
    const url = "";
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(url, formData, {
        onUploadProgress: (data) => {
          // console.log(data.loaded, data.total);
          setUploadeed(Math.round((data.loaded / data.total) * 100));

          // Math.round((data.loaded/data.total)* 100)
        },
      })
      .then((res) => {
        console.log(res);
        alert("success");
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="videoUpload">
        <h3>You can upload video</h3>
        <p>CLICK ON THE BUTTON OR DRAG&DROP FILES HERE</p>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          accept=".mkv,.mp4"
        />
        <br></br>
        <br></br>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "120px",
            height: "50px",
          }}
          onClick={handleApi}
        >
          Upload video
        </button>
        {uploaded && (
          <div className="progress mt-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={uploaded}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${uploaded}%` }}
            >
              {`${uploaded}%`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
