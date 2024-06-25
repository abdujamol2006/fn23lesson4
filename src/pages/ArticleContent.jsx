import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

function ArticleContent() {
  const {
    data: articles,
    error,
    isPending,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/667a2cc81d2cd3eb114415d3/articles"
  );
  return (
    <div className="article-container">
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
        articles.map((article) => {
          return (
            <div key={article.id} className="card">
              <h2>{article.title}</h2>
              <p>By {article.author}</p>
              <NavLink to="">Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleContent;
