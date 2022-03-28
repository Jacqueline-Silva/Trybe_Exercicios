import { categories } from "../../data";

const initialState = {
  categories: [...categories],
  selectedMovie: {},
  selectedCategory: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'first':
    return {
      ...state,
    }

  default:
    return state
  }
};

export default movieReducer;