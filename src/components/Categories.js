import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [cats, setCats] = useState("empty");

  useEffect(() => {
    async function getData() {
      const API_URL = `http://content.guardianapis.com/sections?api-key=993ddcb2-4c6e-44b5-86d6-0e2594bcf0b6`;
      const response = await axios.get(API_URL);
      const data = response.data.response.results;
      setCats(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {cats === "empty" ? (
          <div>loading</div>
        ) : (
          cats.map((element) => {
            if (
              element.id === "music" ||
              element.id === "games" ||
              element.id === "film"
            ) {
              return (
                <Link to={`/newslist/${element.id}`} key={element.id}>
                  {element.id}
                </Link>
              );
            } else {
              return null;
            }
          })
        )}
      </ul>
    </div>
  );
}

export default Categories;
