import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/users/login/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Login successful
        alert("Login successful");
        // Redirect to dashboard or perform any other actions
      } else {
        // Login failed
        alert("Login failed");
        // Handle error response or take appropriate action
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-form-div">
        <div className="signup-form-inner">
          <h4 className="signin-form-header">
            Welcome Back to sociALL! <br /> Fill in your details to sign in
          </h4>
          <form onSubmit={handleSubmit}>
            <p className="form-group">
              <input
                type="text"
                placeholder="Username"
                className="signup-form-input"
                required
                value={username}
                onChange={handleUsernameChange}
              />
            </p>
            <p className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="signup-form-input"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </p>
            <p className="text-center">
              <button type="submit" className="signup-btn">
                Login
              </button>
            </p>
          </form>
        </div>
        <div className="acct">
          <p>
            New to sociALL? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
