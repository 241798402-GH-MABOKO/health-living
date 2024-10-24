import React from 'react';

const Register = ({ toggleForm }) => {
  return (
    <div className="glass-card">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <p className="switch-form">
          Already have an account? <span onClick={toggleForm}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
