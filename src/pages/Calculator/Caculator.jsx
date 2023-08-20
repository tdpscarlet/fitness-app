import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import BmiCalc from "../../components/Calculators/BmiCalc";
import BodyFatCalc from "../../components/Calculators/BodyFatCalc";
import CalorieCalc from "../../components/Calculators/CalorieCalc";
import IdealCalc from "../../components/Calculators/IdealCalc";
import MacroCalc from "../../components/Calculators/MacroCalc";
import "./calculator.scss";

function Caculator() {
  const [calcName, setCalcName] = useState("Calorie Calculator");
  const calcs = [
    "Calorie Calculator",
    "BMI Calculator",
    "Macros Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
  ];

  const handleClick = (e) => {
    setCalcName(e.target.value);
  };

  return (
    <div className="calculator wrapper">
      <NavBar />
      <div className="calc-category">
        {calcs.map((calc, index) => (
          <button
            className={calc === calcName ? "calc-btn active" : "calc-btn"}
            onClick={handleClick}
            key={index}
            value={calc}
          >
            {calc}
          </button>
        ))}
      </div>
      <div className="calc-detail">
        {calcName === "Calorie Calculator" ? (
          <CalorieCalc />
        ) : calcName === "BMI Calculator" ? (
          <BmiCalc />
        ) : calcName === "Macros Calculator" ? (
          <MacroCalc />
        ) : calcName === "Body Fat Calculator" ? (
          <BodyFatCalc />
        ) : (
          <IdealCalc />
        )}
      </div>
    </div>
  );
}

export default Caculator;
