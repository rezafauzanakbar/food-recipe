import React, { useState } from "react";
import swal from "sweetalert";
import { Link, navigate, useNavigate } from "react-router-dom";
import { UserRegister } from "../../redux/action/user";
import logo from "../../assets/img/Group 697.svg";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    newpass: "",
    level: 1,
  });

  const onSubmit = (e, body) => {
    e.preventDefault();
    // console.log(form);
    if (
      form.name == "" ||
      form.email == "" ||
      form.phone == "" ||
      form.password == "" ||
      form.newpass == ""
    ) {
      swal({
        title: "Register",
        text: "Enter All Input!",
        icon: "error",
        dangerMode: true,
      }).then(async (confirm) => {
        if (confirm) {
        }
      });
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        newpass: form.newpass,
        level: form.level,
      };
      if (form.newpass !== form.password) {
        swal({
          title: "Register",
          text: "Password not match!",
          icon: "error",
          dangerMode: true,
        }).then(async (confirm) => {
          if (confirm) {
          }
        });
      } else {
        UserRegister(body)
          .then((response) => {
            swal({
              title: "Register",
              text: "Register Successfully!",
              icon: "success",
              dangerMode: true,
            }).then(async (confirm) => {
              if (confirm) {
                return navigate("/");
              }
            });
          })
          .catch((err) => {
            swal({
              title: "Register",
              text: "Register Failed",
              icon: "error",
              dangerMode: true,
            }).then(async (confirm) => {
              if (confirm) {
              }
            });
          });
      }
    }
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
                          Let's Get Started !
                        </h2>
                        <span style={{ color: "#8692a6" }} className="mb-3">
                          Create new account to access all features
                        </span>
                      </div>
                      <form onSubmit={(e) => onSubmit(e)}>
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
                            placeholder="Name"
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                          />
                        </div>
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
                            placeholder="Enter email address"
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                          />
                        </div>
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
                            placeholder="08xxxxxxxxxx"
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Create New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="Creare New Password"
                            onChange={(e) =>
                              setForm({ ...form, newpass: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="New Password"
                            onChange={(e) =>
                              setForm({ ...form, password: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            id
                            type="checkbox"
                            defaultChecked
                            className="checkbox-custom"
                          />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-check-label"
                            htmlFor=""
                          >
                            I agree to terms &amp; conditions
                          </label>
                        </div>
                        <div className="mb-3 form-group">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block mb-2"
                          >
                            Register Account
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
                            Already have account?
                          </span>
                          <Link
                            style={{
                              color: "#efc81a",
                              textDecoration: "none",
                              size: 13,
                            }}
                            className="small"
                            to="/"
                          >
                            Log in Here
                          </Link>
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

export default Register;
