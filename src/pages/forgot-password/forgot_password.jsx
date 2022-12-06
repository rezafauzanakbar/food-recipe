import React from "react";
import logo from "../../assets/img/Group 697.svg";
import "./style.css";

const ForgotPassword = () => {
  return (
    <>
      <section>
        <div className="container-fluid vh-100">
          <div className="row">
            <div className="col-md-6 bg-image align-items-center">
              <div>
                <img className="logo-custom" src={logo} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <div className="text-center">
                        <h2 style={{ color: "#efc81a" }}>Forgot Password?</h2>
                        <span style={{ color: "#8692a6" }} className="mb-3">
                          We just need your registered e-mail address to send
                          your password resend
                        </span>
                      </div>
                      <form>
                        <div className="mb-3 mt-3 form-group">
                          <hr />
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="examplexxx@gmail.com"
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block mb-2"
                          >
                            Send E-mail
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

export default ForgotPassword;
