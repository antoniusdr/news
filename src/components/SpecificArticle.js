import React from "react";
import { Link } from "react-router-dom";

function SpecificArticle(props) {
  return (
    <div key={props.key}>
      <Link to="/">
        <h2>{props.Title}</h2>
      </Link>
      <h3>{props.Link}</h3>
      <button onClick={props.incrementLike}>Like</button>
      <button>Comment</button>
      <button>More info</button>
    </div>
  );
}

export default SpecificArticle;
