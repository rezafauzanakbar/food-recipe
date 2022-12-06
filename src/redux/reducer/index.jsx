import { combineReducers } from "redux";

import recipeReducer from "./recipe";
import paginationReducer from "./pagination";
const rootReducer = combineReducers({
  recipe: recipeReducer,
  idrecipe: recipeReducer,
  listrecipe: recipeReducer,
  idupdate: recipeReducer,
  pagination: paginationReducer,
});

export default rootReducer;
