import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  console.log("NavBar");
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/newslist">
        News list
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
