import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "./update-recipes.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { UpdateRecipe } from "../../redux/action/recipe";
import axios from "axios";

const UpdateRecipes = () => {
  //state
  const navigate = useNavigate();
  const { id } = useParams();
  const [update, setUpdate] = useState([]);
  const [preview, setPreview] = useState();

  useEffect(() => {
    getById(id);
  }, []);

  const getById = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`
    );
    const data = await response.data.data;
    //usestate
    setUpdate(data);
  };

  const [updateProfile, setUpdateProfile] = useState({});
  const handleInput = (e) => {
    setUpdateProfile({
      ...updateProfile,
      [e.target.name]: e.target.value,
    });
  };

  const [image, setImage] = useState();
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("addImage").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
    setPreview([URL.createObjectURL(event.target.files[0])]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let inputForm = new FormData();
    if (updateProfile.title) {
      inputForm.append("title", updateProfile.title);
    }
    if (updateProfile.ingredients) {
      inputForm.append("ingredients", updateProfile.ingredients);
    }
    if (updateProfile.video) {
      inputForm.append("video", updateProfile.video);
    }
    inputForm.append("picture", image);
    UpdateRecipe(id, inputForm)
      .then((res) => {
        console.log(res.data);
        alert("Update Success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Start Add Recipes */}
      <section id="add-recipes">
        <div className="container">
          <form className="add-recipes">
            <div className="mb-3 form-group">
              <div className="rectangle text-center">
                <div className="icon">
                  <i className="fa-regular fa-image fa-2x " />
                </div>
                {update.map((data) => (
                  <div className="image_upload">
                    <label htmlFor="addImage">
                      {preview ? (
                        <img
                          className="image-custom-preview"
                          src={preview ? preview : ""}
                          alt=""
                        />
                      ) : (
                        <img
                          className="image-custom-preview"
                          src={`${process.env.REACT_APP_BACKEND_URL}/${data.picture}`}
                          alt=""
                        />
                      )}
                    </label>
                    <input type="file" id="addImage" onChange={handleChange} />
                  </div>
                ))}
              </div>
            </div>
            {update.map((data, index) => (
              <div key={index} className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  defaultValue={data.title}
                  name="title"
                  onChange={handleInput}
                />
              </div>
            ))}
            {update.map((data, index) => (
              <div key={index} className="mb-3 form-group">
                <textarea
                  id=""
                  cols={30}
                  rows={10}
                  defaultValue={data.ingredients}
                  name="ingredients"
                  onChange={handleInput}
                />
              </div>
            ))}
            {update.map((data, index) => (
              <div key={index} className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  defaultValue={data.video}
                  name="video"
                  onChange={handleInput}
                />
              </div>
            ))}
            <div className="mb-3 form-group text-center">
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-warning mb-2"
              >
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
    </>
  );
};

export default UpdateRecipes;
