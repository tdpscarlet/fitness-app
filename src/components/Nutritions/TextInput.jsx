import axios from "axios";
import { useState } from "react";
import Result from "./Result";

function TextInput() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;
  const config = {
    headers: {
      "X-Api-Key": "EsPjqbIcOgeWooBUAGJeQw==KIVvSyvnMfkGK7UR",
    },
  };

  const handleCLick = async () => {
    const response = await axios
      .get(url, config)
      .catch((err) => console.log(err));
    setResult(response);
  };

  return (
    <div>
      <div className="textSearch">
        <span className="title">
          <span className="text-yellow">Food </span>&{" "}
          <span className="text-yellow">Nutrition</span>
        </span>
        <input
          className="text-input"
          type="text"
          placeholder="Enter food name"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleCLick}>
          Search
        </button>
      </div>
      {result.data && <Result data={result.data.items} />}
    </div>
  );
}

export default TextInput;
