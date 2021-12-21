import React from "react";
import "./footerStyle.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "#8a9a5b" }}
      >
        <div className="d-flex justify-content-center py-4">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#22242d" }}
          >
            <FaFacebookSquare size="18px" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#22242d" }}
          >
            <FaYoutube size="18px" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#22242d" }}
          >
            <FaInstagram size="18px" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#22242d" }}
          >
            <FaTwitter size="18px" />
          </button>
        </div>
        <div
          className="text-center text-white pb-3"
          style={{ backgroundColor: "#8a9a5b" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            {" "}
            Bit 3D
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
