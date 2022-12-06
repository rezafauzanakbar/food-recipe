import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Group 697.svg";
import "./edit-profile.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getByPostId();
  }, []);

  //function "getPostById"
  const getByPostId = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/${id}`
    );
    //get response data
    const data = await response.data;
    setUpdate(data);

    //assign data to state
    setForm(data.name);
    setForm(data.email);
    setForm(data.phone);
  };

  //function "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    };
    //send data to server
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`, body)
      .then((response) => {
        const token = localStorage.getItem("token");
        const data = localStorage.getItem("data");
        console.log(response.data);
        localStorage.clear();
        //redirect
        if (!token || !data) {
          return navigate("/");
        }
      })
      .catch((error) => {
        //assign validation on state
        console.log(error);
      });
  };

  return (
    <>
      <section>
        <div className="container-fluid container-custom">
          <div className="row">
            <div className="col-md-6 bg-image align-items-center">
              <div>
                <img className="logo-custom" src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <div className="text-center">
                        <h2 style={{ color: "#efc81a" }}>
                          Make Your Profile Perfect!
                        </h2>
                      </div>
                      <form onSubmit={(e) => updatePost(e)}>
                        <div className="mb-3 form-group">
                          <hr />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Foto Profile
                          </label>
                          <div className="rectangle-custom text-center">
                            <div className="user_upload">
                              <label htmlFor="addImageUser">
                                <a className="btn btn-sm" rel="nofollow">
                                  <div className="icon">
                                    <i className="fa-regular fa-image fa-2x " />
                                  </div>
                                  Add Photo
                                </a>
                              </label>
                              <input type="file" id="addImageUser" />
                            </div>
                          </div>
                        </div>
                        {update.map((data) => (
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              aria-describedby=""
                              defaultValue={data.name}
                              name="name"
                              placeholder="name"
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                            />
                          </div>
                        ))}
                        {update.map((data) => (
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id=""
                              aria-describedby=""
                              defaultValue={data.email}
                              name="email"
                              placeholder="xxxx@gmail.com"
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                            />
                          </div>
                        ))}
                        {update.map((data) => (
                          <div className="mb-3 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Phone Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id=""
                              aria-describedby=""
                              defaultValue={data.phone}
                              name="phone"
                              placeholder="08xxxxxxx"
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                            />
                          </div>
                        ))}
                        <div className="mb-3 form-group">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block mb-2"
                          >
                            Edit Account
                          </button>
                        </div>
                        <hr />
                      </form>
                    </div>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
