import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Articles() {
  const {
    data: articles,
    error,
    isPending,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/667a2cc81d2cd3eb114415d3/articles"
  );
  return (
    <div className="flex site-container justify-between mt-10">
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isPending && (
        <div className="mb-10">
          <h3>Loading...</h3>
        </div>
      )}
      {articles &&
        articles.map((article) => {
          return (
            <div
              key={article.id}
              className="glowing-card  card glass w-96 mb-10"
            >
              <figure>
                <img src={article.image} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{article.title}</h2>{" "}
                <h2 className=" author card-title">
                  Written by{article.author}
                </h2>
                <p className="description">
                  How to park your car at your garage?
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/articles/${article.id}`}>
                    <button className=" btn glowing-btn  ">Read more</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
  /*<div className="article-container">
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isPending && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      {articles &&
        articles.data.map((article) => {
          return (
            <div key={article.id} className="card">
              <h2>{article.title}</h2>
              <p>By {article.author}</p>
              <NavLink to="">Read More</NavLink>
            </div>
          );
        })}
    </div>*/
}

export default Articles;
