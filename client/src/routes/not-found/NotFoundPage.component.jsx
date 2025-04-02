import React from "react";
import NotFoundImage from "../../images/undraw_page_not_found_re_e9o6.svg";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <img src={NotFoundImage} alt="Page Not Found" />
      <h2>Sorry this page is not available</h2>
      <NavLink className="link" to="/">
        Go Home
      </NavLink>
    </section>
  );
};

export default NotFound;
