import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { SignupUser } from "../../interfaces/signup-user";
import "./Signup.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setUserLogin } = useAuth();
  const navigate = useNavigate();

  function registerUser(user: SignupUser) {
    setUserLogin(true);
    console.log({ user });
    navigate("/");
  }

  return (
    <div className="signup">
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
              Signup
            </button>
          </div>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
