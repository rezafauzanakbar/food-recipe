import React from "react";
import "./style.css";
import Navbar from "../../component/navbar/navbar";
import foto1 from "../../assets/img/Rectangle 90.svg";
import foto2 from "../../assets/img/Rectangle 91.svg";
import foto3 from "../../assets/img/Rectangle 330.svg";

const DetailVideoRecipe = () => {
  return (
    <>
      <section id="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 container-side-left"></div>
            <div className="col-md-11 container-side-right">
              <div className="container">
                <div className="row">
                  <Navbar />
                  <div className="mt-5 col-md-8 side-right-video">
                    <iframe
                      width="100%"
                      height="50%"
                      src="https://www.youtube.com/embed/zBHCMy1avAY"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <h3>
                      Hot Dog - [Step 4] Cut the condiment and then mix it
                    </h3>
                    <h6>3 Month Ago</h6>
                  </div>
                  <div className="mt-5 col-md-4 side-right-video-list">
                    <h3>Next</h3>
                    <div className="mb-2 card">
                      <img src={foto1} className="card-img-top" />
                      <div className="card-body">
                        <h6>
                          Beef Steak with Curry Sauce - [Step 5] Saute
                          condiments together until turn brown
                        </h6>
                        <span>HanaLohana - 3 month ago</span>
                      </div>
                    </div>
                    <div className="mb-2 card">
                      <img src={foto2} className="card-img-top" />
                      <div className="card-body">
                        <h6>
                          Beef Steak with Curry Sauce - [Step 6] Roast beef
                          until it's medium rare
                        </h6>
                        <span>HanaLohana - 3 month ago</span>
                      </div>
                    </div>
                    <div className="mb-2 card">
                      <img src={foto3} className="card-img-top" />
                      <div className="card-body">
                        <h6>
                          Beef Steak with Curry Sauce - [Step 7] Roast beef
                          until it's medium rare
                        </h6>
                        <span>HanaLohana - 3 month ago</span>
                      </div>
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

export default DetailVideoRecipe;
