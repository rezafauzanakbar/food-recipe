import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <div className="container mb-5">
          <nav className="mt-4 navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-icon"
              aria-controls="navbar-icon"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar-icon">
              <ul>
                <li className="list-inline-item">
                  <Link to="/LandingPage" className="active">
                    Home
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/AddRecipe">Add Recipe</Link>
                </li>
                <li className="list-inline-item">
                  <Link to={`/Profile`}>Profile</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Navbar;
