import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Group 697.svg";
import "./style.css";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  //state
  const [form, setForm] = useState({
    password: "",
    repeatpassword: "",
  });

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getDataById();
  }, []);

  //function "getPostById"
  const getDataById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/${id}`
    );
    //get response data
    const data = await response.data.data;

    //assign data to state
    setForm(data.password);
  };

  //function "updateData"
  const updateData = async (e) => {
    e.preventDefault();
    if (form.password == "" || form.repeatpassword == "") {
      alert("password harus input");
    } else {
      const body = {
        password: form.password,
        repeatpassword: form.repeatpassword,
      };
      if (form.password !== form.repeatpassword) {
        alert("Password dan Repeat password tidak sama");
      } else {
        //send data to server
        await axios
          .put(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`, body)
          .then((response) => {
            //redirect
            console.log(response.data);
            // alert("Update password successfully");
            // return navigate("/Profile");
          })
          .catch((error) => {
            //assign validation on state
            console.log(error);
          });
      }
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid container-custom">
          <div className="row">
            <div className="col-md-6 side-left bg-image align-items-center">
              <div>
                <img className="logo-custom" src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-6 side-right">
              <div className="align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <form onSubmit={(e) => updateData(e)}>
                        <div className="mb-3 form-group">
                          <hr />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Create New Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="New Password"
                            onChange={(e) =>
                              setForm({ ...form, password: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Repeat Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Repeat Password"
                            onChange={(e) =>
                              setForm({
                                ...form,
                                repeatpassword: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            id
                            type="checkbox"
                            className="checkbox-custom"
                          />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-check-label"
                            htmlFor
                          >
                            I agree to terms &amp; conditions
                          </label>
                        </div>
                        <div className="mb-3 form-group">
                          <button
                            type="submit"
                            className="btn btn-warning mb-2"
                          >
                            Reset Password
                          </button>
                        </div>
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

export default ResetPassword;
