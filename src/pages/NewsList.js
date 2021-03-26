import React from "react";
import Categories from "../components/Categories";

function NewsList() {
  console.log("Newslist");
  return (
    <div>
      <Categories />
      <h1>newslist with different articles </h1>
    </div>
  );
}

export default NewsList;
