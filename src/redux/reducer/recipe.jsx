const initialState = {
  recipe: [],
  isLoading: false,
  isError: false,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_RECIPE_PENDING":
      return { ...state, isLoading: true };
    case "GET_LIST_RECIPE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        recipe: action.payload.data.rows,
      };
    case "GET_LIST_RECIPE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_ID_PENDING":
      return { ...state, isLoading: true };
    case "GET_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        recipe: action.payload.data.data,
      };
    case "GET_ID_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_ID_RECIPE_UPDATE_PENDING":
      return { ...state, isLoading: true };
    case "GET_ID_RECIPE_UPDATE_FULFILLED":
      return { ...state, isLoading: false, recipe: action.payload.data };
    case "GET_ID_RECIPE_UPDATE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_RECIPE_PROFILE_PENDING":
      return { ...state, isLoading: true };
    case "GET_RECIPE_PROFILE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        recipe: action.payload.data.data,
      };
    case "GET_RECIPE_PROFILE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export default recipeReducer;
