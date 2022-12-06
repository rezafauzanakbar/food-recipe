import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../../redux/action/user";
import logo from "../../assets/img/Group 697.svg";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    UserLogin(form)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("data", JSON.stringify(response.data.token.data));
        localStorage.setItem("token", response.data.token.token);
        swal({
          title: "Login",
          text: "Login Successfully",
          icon: "success",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
            return navigate("/LandingPage");
          }
        });
      })
      .catch((err) => {
        swal({
          title: "Login",
          text: "Login Failed",
          icon: "error",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
          }
        });
      });
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
            <div className="col-md-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <div className="text-center">
                        <h2 style={{ color: "#efc81a" }}>Welcome</h2>
                        <span style={{ color: "#8692a6" }} className="mb-3">
                          Log in into your exiting account
                        </span>
                      </div>
                      <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3 form-group">
                          <hr />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id=""
                            aria-describedby
                            placeholder="examplexxx@gmail.com"
                            onChange={(e) =>
                              setform({ ...form, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="Password"
                            onChange={(e) =>
                              setform({ ...form, password: e.target.value })
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
                          <button className="btn btn-warning mb-2">
                            Log in
                          </button>
                        </div>
                        <div style={{ textAlign: "right" }} className="mt-3">
                          <Link
                            style={{
                              color: "#999999",
                              textDecoration: "none",
                              size: 12,
                            }}
                            className="small"
                            to="/ForgotPassword"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <hr />
                        <div className="mt-3 text-center">
                          <span
                            style={{ color: "#999999", size: 13 }}
                            className="mb-3"
                          >
                            Don't have an account?
                          </span>
                          <Link
                            style={{
                              color: "#efc81a",
                              textDecoration: "none",
                              size: 13,
                            }}
                            className="small"
                            to="/Register"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
