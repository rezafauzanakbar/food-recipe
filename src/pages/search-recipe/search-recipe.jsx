import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import "./search-recipe.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import foto from "../../assets/img/Rectangle 313 (1).svg";
import fotoComment from "../../assets/img/Ellipse 128.svg";
import { getSearch } from "../../redux/action/recipe";
import { getSearchDua } from "../../redux/action/recipe";

const SearchRecipe = () => {
  const [queryParam] = useSearchParams();

  const titleSearch = queryParam.get("title");
  const [title, setTitle] = useState([]);
  // const [ingredient, setIngredient] = useState("");
  // const [image, setImage] = useState("");

  useEffect(() => {
    getSearch(titleSearch)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data);
        // setIngredient(res.data[0].ingredients.split("\r\n"));
        // setImage(`${process.env.REACT_APP_BACKEND_URL}/${res.data[0].gambar}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container container-custom-search">
        <div className="container">
          <h3>Keyword : {titleSearch}</h3>
          <hr />
        </div>
        <div className="row">
          {title.map((data, index) => (
            <div key={index} className="mb-4 col-md-4">
              <Link to={`/DetailRecipe/${data.id_recipes}`}>
                <div className="card">
                  <img src={data.picture_url} alt="" />
                  <div className="card-img-overlay">
                    <h3>{data.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <section>
        <div className="container container-detail-recipe">
          <div className="title-recipe text-center">
            <h1>{title}</h1>
          </div>
          <div className="align-items-center image-recipe text-center">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="detail-recipe">
            <h3>Ingredients</h3>
            <ul>
              <li>{ingredient[0]}</li>
              <li>{ingredient[1]}</li>
              <li>{ingredient[2]}</li>
              <li>{ingredient[3]}</li>
              <li>{ingredient[4]}</li>
              <li>{ingredient[5]}</li>
              <li>{ingredient[6]}</li>
              <li>{ingredient[7]}</li>
              <li>{ingredient[8]}</li>
              <li>{ingredient[9]}</li>
              <li>{ingredient[10]}</li>
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
            <textarea name id cols={30} rows={10} defaultValue={"Comment : "} />
            <button className="btn-custom mt-3">Send</button>
          </div>
          <div className="show-comments">
            <div className="row">
              <h3 className="mt-5">Comments</h3>
              <div className="col-md-1 mt-2 side-left-comments text-center">
                <img src={fotoComment} />
              </div>
              <div className="col-md-11 mt-2 side-right-comments">
                <h6>Ayudia</h6>
                <span>Nice Recipe. Simple And Delicious, Thank You</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default SearchRecipe;
