import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function ArticleContent() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(" http://localhost:3000/articles/" + id)
      .then((data) => data.json())
      .then((data) => {
        setData(data); // Access the 'islands' property
      });
  }, []);

  return (
    <div>
      {data && (
        <>
          <img src={data.image} alt={data.title} height="300" />
          <h2>Title: {data.title}</h2>
          <p>
            Author: <i>{data.author}</i>
          </p>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticleContent;
