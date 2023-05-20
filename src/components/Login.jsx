import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const PasswordInput = ({ value, placeholder,onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pswd">
      <input
        type={showPassword ? "text" : "password"}
        
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="signup-form-input"
        required
        minLength={6}
      />
      <button className="pswd-btn" onClick={handleTogglePassword} type="button">
        {showPassword ? (
          <i className="fa-solid fa-eye signup-icon"></i>
        ) : (
          <i
            className="fa-sharp fa-solid fa-eye-slash signup-icon"
            login-icon
          ></i>
        )}
      </button>
    </div>
  );
};

function Login() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with registration
      // Add your registration logic here
      alert("Registration successful");
    } else {
      // Passwords don't match, show an error message or take appropriate action
      alert("Passwords do not match");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-form-div">
        <div className="signup-form-inner">
          <h4 className="signin-form-header">Welcome Back to sociALL! <br/>Fill in your details lets sign you in</h4>
          <form onSubmit={handleSubmit}>
            <p className="form-group">
              <input
                type="email"
                placeholder="Hey! What's your email"
                className="signup-form-input" required
              />
            </p>

            <PasswordInput value={password} onChange={handlePasswordChange}
            placeholder={"input your password"} />

            <PasswordInput
           
            placeholder={"please confirm your password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <p className="forgotpswd">
            <Link to="/login">forgot password?</Link>
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
