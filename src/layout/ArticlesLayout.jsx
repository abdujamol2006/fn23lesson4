import { Outlet } from "react-router-dom";

function ArticlesLayout() {
  return (
    <div className="site-container">
      <h1 className="about-text text-5xl font-bold ">Articles List</h1>
      <hr />
      <Outlet />
    </div>
  );
}

export default ArticlesLayout;
