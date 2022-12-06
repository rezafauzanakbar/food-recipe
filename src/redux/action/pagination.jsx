import axios from "axios";

export const getPagination = (sort, asc, limit, page) => {
  return {
    type: "GET_LIST_RECIPE",
    payload: axios({
      method: "GET",
      url: `${
        process.env.REACT_APP_BACKEND_URL
      }/recipes/listrecipes?sort=${sort}&asc=${asc}&limit=${limit}${
        page ? `&page=${page}` : ""
      }`,
    }),
  };
};
