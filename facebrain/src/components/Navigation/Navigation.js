import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f4 link hover-bg-white-50 underline pa3 pointer SignOut"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f4 link hover-bg-white-50 underline pa3 pointer SignOut"
        >
          Sign In
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="f4 link hover-bg-white-50 underline pa3 pointer SignOut"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
