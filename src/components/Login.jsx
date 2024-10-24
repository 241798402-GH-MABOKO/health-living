import React from 'react';
import '../App.css';

const Login = ({ toggleForm }) => {
  return (
    <div className="glass-card">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>

        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <button type="submit" className="btn">
          Sign In
        </button>
        <p className="switch-form">
          Don't have an account? <span onClick={toggleForm}>Register here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
