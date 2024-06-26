import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { RiCriminalLine } from "react-icons/ri";
import { GiGroundbreaker } from "react-icons/gi";
import { MdError } from "react-icons/md";

function ErrorPage() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div className=" bg-accent-content ">
        <div className="  errorpage min-h-screen flex justify-center items-center ">
          <div className="num flex">
            <h2 className=" font-bold text-9xl mt">404</h2>
            <RiCriminalLine className="w-10 h-10" />
          </div>
          <h1 className="errorpage-text flex gap-5 text-6xl font-bold ">
            Page not founded <GiGroundbreaker />
          </h1>
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
    <div className=" bg-accent-content ">
      <div className="  errorpage min-h-screen flex justify-center items-center ">
        <div className="black ">
          <div className="  errorpage  ">
            <h1
              className="errorpage-text items-center
              flex gap-5 text-6xl font-bold"
            >
              Something went wrong <MdError />
            </h1>
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
      </div>
    </div>
  );
}

export default ErrorPage;
