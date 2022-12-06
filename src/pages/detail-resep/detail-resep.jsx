import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./detail-recipe.css";
import { useSelector, useDispatch } from "react-redux";
import { getIdRecipe } from "../../redux/action/recipe";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import foto from "../../assets/img/Rectangle 313 (1).svg";
import fotoComment from "../../assets/img/Ellipse 128.svg";
import axios from "axios";

const DetailResep = () => {
  //get ID from parameter URL
  const { id } = useParams();

  //untuk get action
  const dispatch = useDispatch();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    dispatch(getIdRecipe(id));
    getComments(id);
  }, []);

  const data = useSelector((state) => {
    return state.recipe;
  });

  const [comments, setComments] = useState([]);
  const getComments = (id) => {
    axios
      .get(`http://localhost:3001/comment/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [message, setMessage] = useState({
    id_users: "",
    id_recipes: id,
    message: "",
  });
  const addComments = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const body = {
      id_users: data.id_user,
      id_recipes: message.id_recipes,
      message: message.message,
    };
    axios
      .post(`http://localhost:3001/comment`, body)
      .then((res) => {
        alert("Comment Success");
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
      <section>
        {data.recipe == null ? (
          <span className="text-center">Loading...</span>
        ) : (
          <div className="container container-detail-recipe">
            {data.recipe.map((data) => (
              <div className="title-recipe text-center">
                <h1>{data.title}</h1>
              </div>
            ))}
            <div className="align-items-center image-recipe text-center">
              {data.recipe.map((data) => (
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${data.picture}`}
                  className="img-fluid"
                  alt
                />
              ))}
            </div>
            <div className="detail-recipe">
              <h3>Ingredients</h3>
              <ul>
                {data.recipe.map((data) => (
                  <li>{data.ingredients}</li>
                ))}
              </ul>
            </div>
            <div className="video-step">
              <h3 className="mb-3">Video Step</h3>
              <ul>
                <li>
                  <Link to="/DetailVideoRecipe">
                    <button>
                      <i className="fa-solid fa-play" />
                    </button>
                  </Link>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-play" />
                  </button>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-play" />
                  </button>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-play" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="comments text-center">
              <textarea
                name
                id
                cols={30}
                rows={10}
                placeholder={"Comment..."}
                onChange={(e) =>
                  setMessage({ ...message, message: e.target.value })
                }
              />
              <button
                type="submit"
                onClick={addComments}
                className="btn-custom mt-3"
              >
                Send
              </button>
            </div>
            <div className="show-comments">
              <h3 className="mt-5">Comments</h3>
              {comments.data == " " ? (
                <span>No Comments!</span>
              ) : (
                comments.map((data, index) => (
                  <div className="row">
                    <div className="col-md-1 mt-2 side-left-comments text-center">
                      <img src={fotoComment} />
                    </div>
                    <div className="col-md-11 mt-2 side-right-comments">
                      <h6>Reza</h6>
                      <span>{data.message}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </section>
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default DetailResep;
