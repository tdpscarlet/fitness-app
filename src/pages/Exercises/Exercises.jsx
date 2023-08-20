import "./exercises.scss";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncExercises,
  searchExercises,
  filterExercises,
  bodyPartSelector,
  searchSelector,
} from "../../features/exercises/exercisesSlice";
import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import { getAllExercises } from "../../features/exercises/exercisesSlice";
import { useSelector } from "react-redux";
import rolling from "../../assets/svg/rolling-anim.svg";

function Exercises() {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);
  const exercises = useSelector(getAllExercises);
  const bodyPart = useSelector(bodyPartSelector);
  const bodyTexts = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  useEffect(() => {
    dispatch(fetchAsyncExercises());
  }, []);

  const handleSearch = (e) => {
    dispatch(searchExercises(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterExercises(e.target.value));
  };

  return (
    <div className="exercises wrapper">
      <NavBar />
      <div className="searchBar">
        <span>
          <span className="text-yellow">Looking</span> for exercises?
        </span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <div className="bodyParts">
          {bodyTexts.map((bodyText) => (
            <button
              className={bodyText === bodyPart ? "active" : ""}
              value={bodyText}
              onClick={handleFilter}
            >
              {bodyText}
            </button>
          ))}
        </div>
      </div>
      {Object.keys(exercises).length === 0 ? (
        <img src={rolling} alt="" />
      ) : (
        <PaginatedItems />
      )}
    </div>
  );
}

export default Exercises;
