import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import ErrorPage from "./pages/ErrorPage";
import ArticlesLayout from "./layout/ArticlesLayout";
import ArticleContent from "./pages/ArticleContent";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/articles",
          element: <ArticlesLayout />,
          children: [
            { index: true, element: <Articles /> },
            { path: ":id", element: <ArticleContent /> },
          ],
        },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

/*,*/
