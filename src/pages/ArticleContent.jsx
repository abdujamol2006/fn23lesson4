import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function ArticleContent() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        "https://online-json-server-api.up.railway.app/project/667a2cc81d2cd3eb114415d3/article" +
          id
      )
      .then((res) => setArticle(res.data?.articles[0]));
  }, [id]);

  return (
    <div>
      {article && (
        <>
          <img src={article?.image} alt={article.title} height="300" />
          <h2>Title: {article.title}</h2>
          <p>
            Author: <i>{article.author}</i>
          </p>
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticleContent;
