import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section>
        <footer className="text-center">
          <h1 className="mb-3">Eat, Cook, Repeat</h1>
          <span>Share Your Best Recipe By Uploading Here!</span>
          <ul>
            <li className="list-inline-item">Product</li>
            <li className="list-inline-item">Company</li>
            <li className="list-inline-item">Learn More</li>
            <li className="list-inline-item">Get in Touch</li>
          </ul>
        </footer>
      </section>
    </>
  );
};

export default Footer;
