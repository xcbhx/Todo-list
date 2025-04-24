import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSorting, SORTING } from "../redux/sortingSlice";

const SortingControls = () => {
  const dispatch = useDispatch();
  const currentSorting = useSelector((state) => state.sorting);

  return (
    <select value={currentSorting} onChange={(e) => dispatch(setSorting(e.target.value))}>
      <option value={SORTING.NEWEST_FIRST}>Newest First</option>
      <option value={SORTING.OLDEST_FIRST}>Oldest First</option>
      <option value={SORTING.COMPLETED_FIRST}>Completed First</option>
    </select>
  );
};

export default SortingControls;