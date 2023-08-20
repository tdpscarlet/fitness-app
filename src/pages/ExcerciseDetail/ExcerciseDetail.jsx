import "./excerciseDetail.scss";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import {
  fetchAsyncDetail,
  getSelectedExercise,
  removeSelectedExercise,
} from "../../features/exercises/exercisesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ExcerciseDetail() {
  const { id } = useParams(); // const id = useParams().id;
  const data = useSelector(getSelectedExercise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncDetail(id));
    return () => {
      dispatch(removeSelectedExercise());
    };
  }, []);
  console.log(data);
  return (
    <div className="wrapper detail-wrapper">
      <NavBar />
      {Object.keys(data).length === 0 ? (
        <div className="loading">Loading</div>
      ) : (
        <div className="ex-detail">
          <img className="detail-img" src={data.gifUrl} alt="" />
          <div className="detail-text">
            <span className="datail-title">{data.name}</span>
            <p>
              Body Part: <span>{data.bodyPart}</span>
            </p>
            <p>
              Target: <span>{data.target}</span>
            </p>
            <p>
              Equipment: <span>{data.equipment}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExcerciseDetail;
