import { categories } from "../../data";
import { SELECTED_MOVIE } from "../actions/actionTypes";

const initialState = {
  categories: [...categories],
  selectedMovie: {},
  selectedCategory: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SELECTED_MOVIE:
    return {
      ...state,
      selectedMovie: action.movie,
      selectedCategory: action.category,
    }

  default:
    return state
  }
};

export default movieReducer;