import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="TiltDiv ma4 mt0">
      <Tilt>
        <div className="Tilt br4">
          <img
            className="brain"
            src={brain}
            style={{ padding: "1rem", fill: "white" }}
            alt="Loading"
          ></img>
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
