import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, FILTERS } from "../redux/filtersSlice";

const FilterControls = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filters);

  return (
    <select value={currentFilter} onChange={(e) => dispatch(setFilter(e.target.value))}>
      <option value={FILTERS.ALL}>All</option>
      <option value={FILTERS.ACTIVE}>Active</option>
      <option value={FILTERS.COMPLETED}>Completed</option>
    </select>
  );
};

export default FilterControls;