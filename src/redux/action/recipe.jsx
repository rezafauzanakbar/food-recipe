import axios from "axios";

// UNTUK GET DATA DENGAN RECUCER
export const getList = () => {
  return {
    type: "GET_LIST_RECIPE",
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/recipes`,
      method: "GET",
    }),
  };
};

export const getRecipeProfile = (id) => {
  return {
    type: "GET_RECIPE_PROFILE",
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/recipes/listrecipesuser/${id}`,
      method: "GET",
    }),
  };
};

export const getIdRecipe = (id) => {
  return {
    type: "GET_ID",
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`,
      method: "GET",
    }),
  };
};

export const addRecipe = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deletedataRecipe = (id_recipes) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id_recipes}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const UpdateRecipe = (id, inputForm) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`, inputForm)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const Searchrecipe = (title) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipes/search/${title}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSearch = (titleSearch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipes/search/${titleSearch}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
