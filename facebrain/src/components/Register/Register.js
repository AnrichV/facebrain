import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = { email: "", password: "", name: "" };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch("https://facebrain-backend.onrender.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article
        id="shadow"
        className="br4 ba dark-gray b--white-50 mv4 w-100 w-50-m w-25-l mw5 center shadow"
        style={{ boxShadow: "2rem" }}
      >
        <main className="pa4 black-80">
          <div>
            <fieldset className="ba b--transparent ph0 mh0 ">
              <legend className="f4 fw6 ph0 mh0 white ">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="name">
                  Name
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-white-20 hover-white w-100 b--white-50 br3"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
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
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-white-20 hover-white w-100 b--white-50 br3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--white bg-transparent hover-bg-white-20 grow pointer f6 dib white br3"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
