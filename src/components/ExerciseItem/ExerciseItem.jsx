import { Link } from "react-router-dom";
import "./exerciseItem.scss";

function ExerciseItem({ data }) {
  return (
    <div className="exerciseItem">
      <Link to={`/exercises/${data.id}`}>
        <img className="exercise-Img" src={data.gifUrl} alt={data.name} />
        <div className="exercise-tag">
          <span className="exercise-bodyPart">{data.bodyPart}</span>
          <span className="exercise-target">{data.target}</span>
        </div>
        <span className="exercise-name">{data.name}</span>
      </Link>
    </div>
  );
}

export default ExerciseItem;
