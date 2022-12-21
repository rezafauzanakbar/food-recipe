import React, { useState, useEffect } from "react";
import "./style.css";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Searchrecipe } from "../../redux/action/recipe";
import { getPagination } from "../../redux/action/pagination";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";

//import foto
import foto1 from "../../assets/img/—Pngtree—delicious food_568171 1.svg";
import foto2 from "../../assets/img/Rectangle 7.svg";
import foto3 from "../../assets/img/Rectangle 7 (1).svg";
import foto4 from "../../assets/img/Rectangle 313.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pagination = useSelector((state) => {
    return state.pagination;
  });

  // State untuk menampung data
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("id_users");
  const [asc, setAsc] = useState("asc");
  const [title, setTitle] = useState("");
  const data = JSON.parse(localStorage.getItem("data"));

  // Untuk Searching

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title != "") {
      Searchrecipe(title).then((res) => {
        if (res.data.length > 0) {
          navigate(`/SearchRecipe?title=${title}`);
        } else {
          swal({
            title: "Search Recipe",
            text: "Recipe Not Found!",
            icon: "error",
            dangerMode: true,
          }).then(async (confirm) => {
            if (confirm) {
            }
          });
        }
      });
    }
  };

  // Untuk Pagination
  useEffect(() => {
    dispatch(getPagination(sort, asc, 6, page));
  }, [page, sort, asc]);

  const NextPage = () => {
    setPage(page + 1);
    dispatch(getPagination(sort, asc, 6, page));
    console.log(page);
  };

  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
      dispatch(getPagination(sort, asc, 6, page - 1));
    }
  };

  //SORTING
  const handleSorting = () => {
    if (sort == "id_users") {
      setSort("title");
    } else {
      setSort("id_users");
    }
    dispatch(getPagination(sort, asc, 6, page));
  };

  // ASCENDING
  const handleSortingAsc = () => {
    if (asc == "asc") {
      setAsc("desc");
    } else {
      setAsc("asc");
    }
    dispatch(getPagination(sort, asc, 6, page));
  };

  return (
    <>
      <div>
        {/* START PAGE HOME */}
        <section>
          <div className="container-home">
            <div className="row">
              <div className="col-md-10 col-sm-10 side-left-landing">
                <Navbar />
                <div className="container">
                  <div className="content">
                    <h1>Discover Recipe &amp; Delicious Food</h1>
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa-solid fa-magnifying-glass" />
                        </div>
                        <input
                          type="serach"
                          className="search"
                          placeholder="Search Recipe"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2 side-right-landing">
                <div className="container">
                  <nav className="mt-4 navbar-right">
                    <li>
                      <div className="user">
                        <div className="user-custom">
                          <i className="fa fa-user" />
                          <Link to="/Profile"> {data.name}</Link>
                        </div>
                      </div>
                    </li>
                  </nav>
                </div>
              </div>
              <div className="decoration">
                <img src={foto1} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* END PAGE HOME */}
        {/* Start Page Popular */}
        <section>
          <div className="container-popular">
            <div className="popular-title">
              <div className="bg-title">
                <h1>Popular For You</h1>
              </div>
            </div>
            <div className="popular-body">
              <div className="container-card">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="/DetailRecipe/27">
                      <div className="card">
                        <img src={foto2} alt="" />
                        <div className="card-img-overlay">
                          <h2>Pizza Lamoa</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/DetailRecipe/21">
                      <div className="card">
                        <img src={foto3} alt="" />
                        <div className="card-img-overlay">
                          <h2>King Burger</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Page Popular */}

        {/* Start Page New Recipe */}
        <section>
          <div className="container-recipe">
            <div className="recipe-title">
              <div className="bg-recipe-yellow">
                <h1>New Recipe</h1>
              </div>
            </div>
            <div className="recipe-body">
              <div className="row">
                <div className="col-md-6 right-recipe">
                  <div className="bg-recipe">
                    <img src={foto4} />
                  </div>
                </div>
                <div className="col-md-6 left-recipe">
                  <div className="left-recipe">
                    <div>
                      <h2>Chicken Bone Broth Ramen-Healhty</h2>
                      <hr />
                      <span className="mb-3">
                        Quick + Easy Chicken Bone Broth Ramen-Healhty Chicken
                        rame in hurry? That's right!
                      </span>
                    </div>
                    <Link to="/DetailRecipe/17">
                      <button className="btn-custom mt-3">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Page New Recipe */}

        {/* Start Page Popular Recipe */}
        <section>
          <div className="container-popular-recipe">
            <div className="popular-recipe-title">
              <div className="bg-popular-recipe">
                <h1>POPULAR RECIPE</h1>
              </div>
            </div>
            <div className="popular-recipe-body">
              <div className="container-fluid">
                <div class="dropdown">
                  <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SORTING RECIPE
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        class="dropdown-item active"
                        onClick={() => handleSorting()}
                      >
                        {sort.toUpperCase()}
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => handleSortingAsc()}
                      >
                        {asc.toUpperCase()}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container-card">
                <div className="row">
                  {pagination.data == "" ? (
                    <span className="text-center">Data not found!</span>
                  ) : (
                    pagination.data.map((item, index) => (
                      <div key={index} className="mb-4 col-md-4">
                        <div className="card">
                          <Link to={`/DetailRecipe/${item.id_recipes}`}>
                            <img src={item.picture_url} alt="" />
                            <div className="card-img-overlay">
                              <h3>{item.title}</h3>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* Pagination */}
              <div className="d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="btn btn-warning-custom page-link"
                      disabled={page == 1}
                      onClick={() => PreviousPage()}
                    >
                      Previous
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }}>
                    <button className="btn btn-warning-custom page-link">
                      {page}
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }} className="page-item">
                    <button
                      className="btn btn-warning-custom page-link"
                      disabled={pagination.data <= 0}
                      onClick={() => NextPage()}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* End Page Popular Recipe */}

        {/* Start Footer */}
        <Footer />
        {/* End Footer */}
      </div>
    </>
  );
};

export default LandingPage;
