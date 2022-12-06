import React, { useState, useRef } from "react";
import swal from "sweetalert";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../redux/action/recipe";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

const AddRecipes = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("addImage").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
    setPreview([URL.createObjectURL(event.target.files[0])]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id_user;
    let formData = new FormData(event.target);
    formData.append("picture", image);
    formData.append("id_users", id);
    handlePost(Object.fromEntries(formData));
  };

  const handlePost = (form) => {
    addRecipe(form)
      .then((res) => {
        console.log(res);
        setImage("");
        swal({
          title: "ADD RECIPE",
          text: "Add Recipe Successfully!",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return navigate("/LandingPage");
          }
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add recipe");
      });
  };
  return (
    <div>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Start Add Recipes */}
      <section id="add-recipes">
        <div className="container">
          <form onSubmit={handleSubmit} className="add-recipes">
            <div className="mb-3 form-group">
              <div className="rectangle text-center">
                <div className="icon">
                  <i className="fa-regular fa-image fa-2x " />
                </div>
                <div className="image_upload">
                  <label htmlFor="addImage">
                    {preview ? (
                      <img
                        className="image-custom-preview"
                        src={preview ? preview : ""}
                        alt=""
                      />
                    ) : (
                      <a className="btn btn-sm" rel="nofollow">
                        Add Photo
                      </a>
                    )}
                  </label>
                  <input
                    type="file"
                    src={preview ? preview : ""}
                    id="addImage"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 form-group">
              <input
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
                placeholder="Title"
                name="title"
              />
            </div>
            <div className="mb-3 form-group">
              <textarea
                id=""
                cols={30}
                rows={10}
                placeholder="Ingredients"
                // defaultValue={"Ingredients : "}
                name="ingredients"
              />
            </div>
            <div className="mb-3 form-group">
              <input
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
                placeholder="Video"
                name="video"
              />
            </div>
            <div className="mb-3 form-group text-center">
              <button type="submit" className="btn btn-warning mb-2">
                Post
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* End Add Recipes */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
};

export default AddRecipes;
