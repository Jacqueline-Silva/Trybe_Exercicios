import { SELECTED_MOVIE } from '../actions/actionTypes';

export function movieAction(category, movie) { 
  return {
    type: SELECTED_MOVIE,
    category,
    movie,
  }
};