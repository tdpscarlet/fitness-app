import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./nutrition.scss";
import TextInput from "../../components/Nutritions/TextInput";
import ImageInput from "../../components/Nutritions/ImageInput";

function Nutrition() {
  const [title, setTitle] = useState("Text Search");
  const nutritions = ["Text Search", "Image Search"];
  const handleClick = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="nutrition wrapper">
      <NavBar />
      <div className="calc-category">
        {nutritions.map((item, index) => (
          <button
            className={item === title ? "calc-btn active" : "calc-btn"}
            onClick={handleClick}
            key={index}
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
      {title === "Text Search" ? <TextInput /> : <ImageInput />}
    </div>
  );
}

export default Nutrition;
