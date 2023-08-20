import "./nutritions.scss";

function Result({ data }) {
  let servingSum = 0;
  let caloriesSum = 0;
  let carbSum = 0;
  let proteinSum = 0;
  let fattSum = 0;
  let fatsSum = 0;
  let sugarSum = 0;
  let sodiumSum = 0;
  let fiberSum = 0;
  let cholestSum = 0;

  data.forEach((item) => {
    servingSum += item.serving_size_g;
    caloriesSum += item.calories;
    carbSum += item.carbohydrates_total_g;
    proteinSum += item.protein_g;
    fattSum += item.fat_total_g;
    fatsSum += item.fat_saturated_g;
    sugarSum += item.sugar_g;
    sodiumSum += item.sodium_mg;
    fiberSum += item.fiber_g;
    cholestSum += item.cholesterol_mg;
  });

  return (
    <div className="result">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Serving Size</th>
            <th scope="col">Calories</th>
            <th scope="col">Carbohydrates</th>
            <th scope="col">Protein</th>
            <th scope="col">Total Fat</th>
            <th scope="col">Saturated Fat</th>
            <th scope="col">Sugar</th>
            <th scope="col">Sodium</th>
            <th scope="col">Fiber</th>
            <th scope="col">Cholesterol</th>
          </tr>
        </thead>
        <tbody className="result-body">
          <tr>
            <th>Total</th>
            <th>{servingSum.toFixed(1)}g</th>
            <th>{caloriesSum.toFixed(1)}</th>
            <th>{carbSum.toFixed(1)}g</th>
            <th>{proteinSum.toFixed(1)}g</th>
            <th>{fattSum.toFixed(1)}g</th>
            <th>{fatsSum.toFixed(1)}g</th>
            <th>{sugarSum.toFixed(1)}g</th>
            <th>{sodiumSum.toFixed(1)}mg</th>
            <th>{fiberSum.toFixed(1)}g</th>
            <th>{cholestSum.toFixed(1)}mg</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.serving_size_g}g</th>
              <th>{item.calories}</th>
              <th>{item.carbohydrates_total_g}g</th>
              <th>{item.protein_g}g</th>
              <th>{item.fat_total_g}g</th>
              <th>{item.fat_saturated_g}g</th>
              <th>{item.sugar_g}g</th>
              <th>{item.sodium_mg}mg</th>
              <th>{item.fiber_g}g</th>
              <th>{item.cholesterol_mg}mg</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
