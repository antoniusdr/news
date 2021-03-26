import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SpecificArticle from "../components/SpecificArticle";

//use params, foundarticle te renderen via een fetch

function NewsList() {
  const [articles, set_articles] = useState("empty");
  const params = useParams();
  const paramsID = params.id;

  // als je op like button klikt, dan mappen over articles array, en dan
  // als id van gelikede button overeenkomst met de element in de articles array, dan
  // articles mappen en van dat ene element de score +1 doen, (dus dan heb
  // je [ 1, 2, 3 (score+1)]). en dan set_articles met nieuwe array, en dan sort articles doen
  // opbasis van nieuwe array.

  const [likes, set_likes] = useState(0);

  function incrementLike() {
    set_likes(likes + 1);
    console.log(likes);
  }

  useEffect(() => {
    if (!paramsID) {
      set_articles("empty");
      return;
    }
    async function getData() {
      const response = await axios.get(
        `http://content.guardianapis.com/search?q=${paramsID}&api-key=993ddcb2-4c6e-44b5-86d6-0e2594bcf0b6`
      );
      const data = response.data.response.results;
      set_articles(data);
    }
    getData();
  }, [paramsID]);

  //use effect, 1 keer runnen op basis van nieuwe url
  // async function met API(param)
  //nieuwe usestate om te showen
  // return <div> met gemapte results

  return (
    <div>
      <Categories />
      <h1>newslist with different articles </h1>
      {paramsID === undefined ? (
        <div>pick a category</div>
      ) : articles === "empty" ? (
        <div>loading</div>
      ) : (
        articles.map((article) => {
          return (
            <div>
              <SpecificArticle
                key={article.id}
                Title={article.webTitle}
                Link={article.webUrl}

                // Like={incrementLike}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default NewsList;
