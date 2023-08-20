import "./exercisesList.scss";
import ExerciseItem from "../ExerciseItem/ExerciseItem";

function ExercisesList({ currentItems }) {
  return (
    <div className="exercises-list">
      {currentItems.map((exercise, index) => (
        <ExerciseItem data={exercise} key={index} />
      ))}
    </div>
  );
}

export default ExercisesList;
