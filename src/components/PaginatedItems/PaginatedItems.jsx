import { useState } from "react";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import {
  getAllExercises,
  searchSelector,
  bodyPartSelector,
} from "../../features/exercises/exercisesSlice";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./paginatedItems.scss";

function PaginatedItems() {
  const search = useSelector(searchSelector);
  const exercises = useSelector(getAllExercises);
  const bodyPart = useSelector(bodyPartSelector);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const bodyPartExercises = exercises.filter((exercise) => {
    if (bodyPart != "all") return exercise.bodyPart.includes(bodyPart);
    else return exercises;
  });

  const searchExercises = bodyPartExercises.filter((exercise) => {
    if (search !== "") {
      return (
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );
    } else return bodyPartExercises;
  });

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = searchExercises.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchExercises.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchExercises.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setItemOffset(newOffset);
  };

  return (
    <div className="paginatedItems">
      <ExercisesList currentItems={currentItems} />
      <ReactPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;
