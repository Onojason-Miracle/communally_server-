import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const PasswordInput = ({ value,placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pswd">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="signup-form-input"
        required
        minLength={6}
      />
      <button className="pswd-btn" onClick={handleTogglePassword} type="button">
        {showPassword ? (
          <i className="fa-solid fa-eye signup-icon"></i>
        ) : (
          <i className="fa-sharp fa-solid fa-eye-slash signup-icon" login-icon></i>
        )}
      </button>
    </div>
  );
};


function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      alert('Registration successful');
    } else {
      // Passwords don't match, show an error message or take appropriate action
      alert('Passwords do not match');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-form-div">
        <div className="signup-form-inner">
          <h4 className='signin-form-header'>Welcome to sociALL!</h4>
          <form onSubmit={handleSubmit}>
            <p className="form-group">
              <input
                type="text"
                placeholder="Hey! What's your name"
                className="signup-form-input" required
              />
            </p>

            <p className="form-group">
              <input
                type="email"
                placeholder="Hey! What's your email"
                className="signup-form-input" required
              />
            </p>

          <PasswordInput
                value={password}
                placeholder={"input your password"}
                onChange={handlePasswordChange}
              />
           

          
              <PasswordInput
                value={confirmPassword}
                placeholder={"please confirm your password"}
                onChange={handleConfirmPasswordChange}
              />
          

            <p className="text-center">
              <button type="submit" className='signup-btn'>Register</button>
            </p>
          </form>

         
        </div>

        <div className='acct'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
      </div>
    </div>
  );
}
export default Signup