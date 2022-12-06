import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Profile from "../pages/profile/profile";
import AddRecipe from "../pages/add-recipes/add-recipes";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ForgotPassword from "../pages/forgot-password/forgot_password";
import CodeResetPassword from "../pages/code-reset-password/code-reset-password";
import DetailRecipe from "../pages/detail-resep/detail-resep";
import DetailVideoRecipe from "../pages/detail-video-recipes/detail-video-recipes";
import ResetPassword from "../pages/reset-password/reset-password";
import LandingPage from "../pages/landing-page/landing-page";
import Get from "../pages/get-data/get";
import Insert from "../pages/get-data/insert";
import Detail from "../pages/get-data/detail";
import Update from "../pages/get-data/update";
import UpdateRecipes from "../pages/update-recipes/update-recipes";
import EditProfile from "../pages/edit-profile/edit-profile";
import SearchRecipe from "../pages/search-recipe/search-recipe";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    alert("Login dulu yaaa!");
    return <Navigate to="/" />;
  }
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="CodeResetPassword" element={<CodeResetPassword />} />
          <Route path="ResetPassword/:id" element={<ResetPassword />} />
          <Route path="Profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="AddRecipe" element={<PrivateRoute />}>
            <Route index element={<AddRecipe />} />
          </Route>
          <Route path="DetailRecipe/:id" element={<PrivateRoute />}>
            <Route index element={<DetailRecipe />} />
          </Route>
          <Route path="DetailVideoRecipe" element={<DetailVideoRecipe />} />
          <Route path="LandingPage" element={<PrivateRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="Get" element={<Get />} />
          <Route path="Insert" element={<Insert />} />
          <Route path="Detail/:id" element={<Detail />} />
          <Route path="Update/:id" element={<Update />} />
          <Route path="UpdateRecipe/:id" element={<PrivateRoute />}>
            <Route index element={<UpdateRecipes />} />
          </Route>
          <Route path="EditProfile/:id" element={<EditProfile />}>
            <Route index element={<EditProfile />} />
          </Route>
          <Route path="SearchRecipe" element={<SearchRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
