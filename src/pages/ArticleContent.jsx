import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
function ArticleContent() {
  const { id } = useParams();
  const {
    data: article,
    error,
    isPending,
  } = useFetch(
    ` https://online-json-server-api.up.railway.app/project/667a2cc81d2cd3eb114415d3/articles?id=${id}`
  );

  return (
    <div>
      {article && (
        <>
          <img src={article[0].image} alt={article.title} height="300" />
          <h2>Title: {article[0].title}</h2>
          <p>
            Author: <i>{article[0].author}</i>
          </p>
          <p>{article[0].body}</p>
        </>
      )}
    </div>
  );
}

export default ArticleContent;
