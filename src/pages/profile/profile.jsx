import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import foto from "../../assets/img/Ellipse 330 (1).png";
import { getRecipeProfile } from "../../redux/action/recipe";
import { deletedataRecipe } from "../../redux/action/recipe";
import BombChicken from "../../assets/img/Rectangle 314.svg";
import BananasPancake from "../../assets/img/Rectangle 315.svg";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hapus, setHapus] = useState([]);
  const data = JSON.parse(localStorage.getItem("data"));

  const recipeProfile = useSelector((state) => {
    return state.recipe;
  });

  //useEffect hook
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    dispatch(getRecipeProfile(id));
  }, []);

  const logout = () => {
    swal({
      title: "Logout",
      text: "Are you sure that you want to logout?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        localStorage.clear();
        swal({
          title: "Logout",
          text: "Logout Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return navigate("/");
          }
        });
      }
    });
  };

  const deleteRecipe = (id_recipes, e) => {
    e.preventDefault();
    swal({
      title: "Delete",
      text: "Are you sure that you want to delete?",
      icon: "warning",
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        deletedataRecipe(id_recipes);
        const posts = hapus.filter((item) => item.id_recipes !== id_recipes);
        setHapus({ data: posts });
        swal({
          title: "Delete",
          text: "Delete Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return navigate("/LandingPage");
          }
        });
      }
    });
  };

  return (
    <>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      {/* Start Profile User */}
      <section id="profile">
        <div className="container container-custom-profile">
          <div className="profile-user text-center">
            <div className="row">
              <div className="col picture-user text-center">
                <img src={foto} alt="" />
              </div>
            </div>
            <span>{data.name}</span>
            <button
              className="btn btn-custom"
              data-bs-toggle="collapse"
              href="#editprofile"
              role="button"
              aria-expanded="false"
              aria-controls="editprofile"
            >
              <i className="fa fa-user-pen" />
            </button>
            <div
              className="collapse multi-collapse text-center"
              id="editprofile"
            >
              <div className="row">
                {/* <div className="col-12 change_profile">
                  <label htmlFor="addImage">
                    <a className="btn btn-edit-photo">Change Photo Profile</a>
                  </label>
                  <input type="file" name="addImage" id="addImage" />
                </div> */}
                <div className="col-12">
                  <Link to={`/EditProfile/${data.id_user}`}>
                    <button className="btn btn-custom-password">
                      Change Profile
                    </button>
                  </Link>
                </div>
                <div className="col-12">
                  <Link to={`/ResetPassword/${data.id_user}`}>
                    <button className="btn btn-custom-password">
                      Change Password
                    </button>
                  </Link>
                </div>
                <div className="col-12">
                  <button className="btn btn-custom-edit" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Profile User */}
      {/* Start History */}
      <section id="history">
        <div className="container container-custom-history">
          <div className="history-user">
            <p>
              <button
                className="btn btn-custom"
                data-bs-toggle="collapse"
                href="#myrecipe"
                role="button"
                aria-expanded="true"
                aria-controls="myrecipe"
              >
                My Recipe
              </button>
              <button
                className="btn btn-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#savedrecipe"
                aria-expanded="false"
                aria-controls="savedrecipe"
              >
                Saved Recipe
              </button>
              <button
                className="btn btn-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#likedrecipe"
                aria-expanded="false"
                aria-controls="likedrecipe"
              >
                Liked Recipe
              </button>
            </p>
            <hr />
            <div className="collapse multi-collapse show" id="myrecipe">
              <div className="row">
                <div className="col">
                  <h3>My Recipe</h3>
                  {/* <button class="btn btn-custom" type="button" data-bs-toggle="collapse"
                          data-bs-target="#likedrecipe" aria-expanded="false" aria-controls="likedrecipe">
                          <i class="fa-solid fa-eye-slash">
                          </i>
                      </button> */}
                  <p>
                    This is a collection of recipes that you have added
                    previously. keep on sharing your cooking
                  </p>
                </div>

                {recipeProfile.recipe == null
                  ? "data not found"
                  : recipeProfile.recipe.map((data, index) => (
                      <div key={index} className="mb-4 col-md-3">
                        <div className="card">
                          <img src={data.picture_url} alt="" />
                          <div className="card-img-overlay">
                            <h3>{data.title}</h3>
                            <button
                              onClick={(e) => deleteRecipe(data.id_recipes, e)}
                              type="button"
                              className="btn btn-danger my-1"
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning-custom my-1"
                            >
                              <Link to={`/UpdateRecipe/${data.id_recipes}`}>
                                <i
                                  className="fa fa-pencil-square-o"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                {/* <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BananasPancake} alt="" />
                    <div className="card-img-overlay">
                      <h3>Bananas Pancake</h3>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="collapse multi-collapse" id="savedrecipe">
              <div className="row">
                <div className="col">
                  <h3>Saved Recipe</h3>
                  {/* <button class="btn btn-custom" type="button" data-bs-toggle="collapse"
                          data-bs-target="#likedrecipe" aria-expanded="false" aria-controls="likedrecipe">
                          <i class="fa-solid fa-eye-slash">
                          </i>
                      </button> */}
                  <p>
                    The recipe that you have saved before is here, take a look
                    again, who knows you forgot
                  </p>
                </div>
                <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BombChicken} alt="" />
                    <div className="card-img-overlay">
                      <h3>Chicken Kare</h3>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BananasPancake} alt="" />
                    <div className="card-img-overlay">
                      <h3>Sushi Salmon</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse multi-collapse" id="likedrecipe">
              <div className="row">
                <div className="col">
                  <h3>Liked Recipe</h3>
                  {/* <button class="btn btn-custom" type="button" data-bs-toggle="collapse"
                          data-bs-target="#likedrecipe" aria-expanded="false" aria-controls="likedrecipe">
                          <i class="fa-solid fa-eye-slash">
                          </i>
                      </button> */}
                  <p>recipes that you have liked before have been saved here</p>
                </div>
                <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BombChicken} alt="" />
                    <div className="card-img-overlay">
                      <h3>Soup Chicken</h3>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BananasPancake} alt="" />
                    <div className="card-img-overlay">
                      <h3>Sushi</h3>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-3">
                  <div className="card">
                    <img src={BananasPancake} alt="" />
                    <div className="card-img-overlay">
                      <h3>Chicken Spicy</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End History */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Profile;
