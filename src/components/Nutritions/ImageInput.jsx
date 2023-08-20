import { useState } from "react";
import axios from "axios";
import Result from "./Result";

function ImageInput() {
  const [result, setResult] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const url = "https://api.calorieninjas.com/v1/imagetextnutrition";
  const config = {
    headers: {
      "X-Api-Key": "EsPjqbIcOgeWooBUAGJeQw==KIVvSyvnMfkGK7UR",
    },
  };

  const handleCLick = async () => {
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    const response = await axios
      .post(url, formData, config)
      .catch((err) => console.log(err));
    setResult(response);
  };

  console.log(result);

  return (
    <div>
      <div className="textSearch">
        <span className="title">
          <span className="text-yellow">Image </span>
          search
        </span>
        <input
          className="image-input"
          type="file"
          accept="image/png,image/jpeg"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button className="search-btn" onClick={handleCLick}>
          Search
        </button>
      </div>
      {result.data && <Result data={result.data.items} />}
    </div>
  );
}

export default ImageInput;
