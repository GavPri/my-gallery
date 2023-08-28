import React from "react";
import css from "./css/SideBar.module.css";

function SideBar() {
  return (
    <div className={css.sidebar}>
      <a href="">My Photos</a>
      <a href="">My Illustrations</a>
      <a href="">My Paintings</a>
    </div>
  );
}

export default SideBar;
