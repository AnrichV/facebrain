import React from "react";
import "./Register.css";

const Register = ({ onRouteChange }) => {
  return (
    <article
      className="br4 ba dark-gray b--white-50 mv4 w-100 w-50-m w-25-l mw5 center shadow"
      style={{ boxShadow: "2rem" }}
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 white ">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" htmlFor="name">
                Name
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-white-20 hover-white w-100 b--white-50 br3 w-auto"
                type="name"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f6 white"
                htmlFor="email-address"
              >
                Email
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-white-20 hover-white w-100 b--white-50 br3"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-white-20 hover-white w-100 b--white-50 br3"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--white bg-transparent hover-bg-white-20 grow pointer f6 dib white br3"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
