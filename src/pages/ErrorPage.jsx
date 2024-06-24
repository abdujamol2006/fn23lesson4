import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div className="black ">
        <div className="  errorpage ">
          <h1 className="errorpage-text ">Page not founded :(</h1>
          <p className="err">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            delectus blanditiis iure vero dicta nobis expedita tempora aliquid
            quibusdam dolor?
          </p>
          <Link to="/">
            <button className="errbtn btn glowing-btn">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="black ">
      <div className="  errorpage ">
        <h1 className="errorpage-text ">Something went wrong :(</h1>
        <p className="err">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
          delectus blanditiis iure vero dicta nobis expedita tempora aliquid
          quibusdam dolor?
        </p>
        <Link to="/">
          <button className="errbtn btn glowing-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
