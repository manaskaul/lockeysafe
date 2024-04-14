import { useState } from "react";
import { SignupUser } from "../../interfaces/signup-user";
import Navbar from "../navbar/Navbar";
import "./Signup.css";

function registerUser(user: SignupUser) {
  console.log({ user });
}

function goToLogin() {
  console.log("login");
}

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signup">
      <Navbar></Navbar>
      <div className="card">
        <div className="container">
          <h3 className="heading">REGISTER</h3>
          <div className="form">
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input-field"
            />
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input-field"
            />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-field"
            />
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="input-field"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="input-field"
            />
            <button
              type="button"
              className="submit-btn"
              onClick={() =>
                registerUser({
                  firstName,
                  lastName,
                  email,
                  username,
                  password,
                  confirmPassword,
                })
              }
            >
              Login
            </button>
          </div>
          <span>
            Already have an account? <a onClick={goToLogin}>Login instead.</a>
          </span>
        </div>
      </div>
    </div>
  );
}
