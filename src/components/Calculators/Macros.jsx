import "./calculators.scss";

function Macros({ data }) {
  return (
    <div className="macros">
      <p>
        Protein: <span>{Math.round(data.protein)} </span>
        grams/day
      </p>
      <p>
        Fat: <span>{Math.round(data.fat)} </span>
        grams/day
      </p>
      <p>
        Carbs: <span>{Math.round(data.carbs)} </span>
        grams/day
      </p>
    </div>
  );
}

export default Macros;
