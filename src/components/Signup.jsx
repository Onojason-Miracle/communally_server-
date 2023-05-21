import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PasswordInput = ({ value, placeholder, onChange }) => {
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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const history = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const formData = new FormData();
      formData.append("username", username); // Add this line to include the username
      formData.append("email", email);
      formData.append("password", password);
      formData.append("first_name", firstName);

      const response = await fetch("http://127.0.0.1:8000/users/create/", {
        method: "POST",
        body: formData,
      });

      console.log(response);
      history('/login')

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
          <h4 className='signin-form-header'>Welcome to sociALL!</h4>
          <form onSubmit={handleSubmit}>
            <p className="form-group">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="signup-form-input" required
                onChange={handleUsernameChange}
              />
            </p>

            <p className="form-group">
              <input
                type="email"
                placeholder="Hey! What's your email"
                name="email"
                className="signup-form-input" required
                onChange={handleEmailChange}
              />
            </p>
            <p className="form-group">
              <input
                type="text"
                placeholder="First name"
                name="first_name"
                className="signup-form-input" required
                onChange={handleFirstNameChange}
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