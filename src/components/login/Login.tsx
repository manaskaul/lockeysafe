import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../hooks/use-auth";

export interface SigninUser {
  username: string;
  password: string;
}

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { setUserLogin } = useAuth();

  function signInUser(user: SigninUser) {
    setUserLogin(true);
    console.log({ user });
  }

  const onButtonClick = () => {
    setUserNameError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === username) {
      setUserNameError("Please enter your username");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUserNameError("Please enter a valid username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length <= 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    signInUser({ username, password });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="login-container">
          <h3 className="heading">LOGIN</h3>
          <div className="form">
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              className="input-field"
            />
            <label className="errorLabel">{usernameError}</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            <label className="errorLabel">{passwordError}</label>
            <button type="button" className="login-btn" onClick={onButtonClick}>
              Login
            </button>
          </div>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
