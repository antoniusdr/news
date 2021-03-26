import React from "react";
import axios from "axios";

function Categories() {
  console.log("Categories");

  async function getData() {
    const API_URL = `http://content.guardianapis.com/sections?api-key=993ddcb2-4c6e-44b5-86d6-0e2594bcf0b6`;
    const data = await axios.get(API_URL);
    console.log(data);
  }
  getData();

  return (
    <div>
      <ul>
        <li>Categories</li>
        <li>Categories</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}

export default Categories;
