import React from "react";
import logo from "../../assets/img/Group 697.svg";
import "./style.css";

const CodeResetPassword = () => {
  return (
    <>
      <section>
        <div className="container-fluid vh-100">
          <div className="row">
            <div className="col-md-6 bg-image align-items-center">
              <div>
                <img className="logo-custom" src={logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <form>
                        <div className="mb-3 mt-3 form-group">
                          <label
                            style={{ color: "#696f79" }}
                            className="form-label"
                          >
                            Code 6 Digit
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="xxxxxx"
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block mb-2"
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

export default CodeResetPassword;
