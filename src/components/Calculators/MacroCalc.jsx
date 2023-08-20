import { useState } from "react";
import "./calculators.scss";
import axios from "axios";
import Macros from "./Macros";

function MacroCalc() {
  const [result, setResult] = useState({});
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1");
  const [goal, setGoal] = useState("maintain");
  const [error, setError] = useState("");
  const [tab, setTab] = useState("balanced");
  const arr = ["balanced", "low fat", "low carbs", "high protein"];
  const url = "https://fitness-calculator.p.rapidapi.com/macrocalculator";
  const config = {
    headers: {
      "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
    params: {
      age,
      gender,
      height,
      weight,
      activitylevel: activity,
      goal,
    },
  };

  const getResult = async () => {
    const response = await axios
      .get(url, config)
      .catch((err) => console.log(err));
    setResult(response.data);
    setTab("balanced");
  };

  const handleClick = () => {
    if (!age) setError("Please enter age.");
    else if (Number(age) < 15 || Number(age) > 80)
      setError("Please provide an age between 15 and 80.");
    else if (!height) setError("Please enter height.");
    else if (Number(height) < 130 || Number(height) > 230)
      setError("Please provide a height between 130cm and 230cm.");
    else if (!weight) setError("Please enter weight.");
    else if (Number(weight) < 40 || Number(weight) > 160)
      setError("Please provide a weight between 40kg and 160kg.");
    else {
      getResult();
      setError("");
    }
  };

  return (
    <div className="calc-wrapper">
      <span className="calc-title">
        <span className="text-yellow">Macros </span> Calculator
      </span>
      <div className="calc-container">
        <div className="calc-form">
          <label htmlFor="">Age</label>
          <input
            type="number"
            value={age}
            placeholder="15 - 80"
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label htmlFor="">Gender</label>
          <select
            className="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="">Height (cm)</label>
          <input
            type="number"
            value={height}
            placeholder="130 - 230"
            required
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <label htmlFor="">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            placeholder="40 - 160"
            required
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <label htmlFor="">Activity</label>
          <select
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          >
            <option value="1">BMR (Basal Metabolic Rate)</option>
            <option value="2">Sedentary: little or no exercise</option>
            <option value="3">Exercise 1-3 times/week</option>
            <option value="4">Exercise 4-5 times/week</option>
            <option value="5">
              Daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="6">Intense exercise 6-7 times/week</option>
            <option value="7">
              Very intense exercise daily, or physical job
            </option>
          </select>
          <label htmlFor="">Goal</label>
          <select
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          >
            <option value="maintain">Maintain weight</option>
            <option value="mildlose">Mild weight loss</option>
            <option value="weightlose">Weight loss</option>
            <option value="extremelose">Extreme weight loss</option>
            <option value="mildgain">Mild weight gain</option>
            <option value="weightgain">Weight gain</option>
            <option value="extremegain">Extreme weight gain</option>
          </select>
          <button onClick={handleClick}>Calculate</button>
          {error && <span className="error">{error}</span>}
        </div>
        {result.request_result === "Successful" && (
          <div className="calc-result">
            <span className="result-title">Result</span>
            <p>
              Food Energy: <span>{Math.round(result.data.calorie)} </span>
              (Calories/day)
            </p>
            <div className="tabs">
              {arr.map((item, index) => (
                <button
                  className={
                    item.replace(/\s/g, "") === tab
                      ? "macro-btn active"
                      : "macro-btn"
                  }
                  onClick={(e) => setTab(e.target.value)}
                  key={index}
                  value={item.replace(/\s/g, "")}
                >
                  {item}
                </button>
              ))}
            </div>
            {tab === "balanced" ? (
              <Macros data={result.data.balanced} />
            ) : tab === "lowfat" ? (
              <Macros data={result.data.lowfat} />
            ) : tab === "lowcarbs" ? (
              <Macros data={result.data.lowcarbs} />
            ) : (
              <Macros data={result.data.highprotein} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MacroCalc;
