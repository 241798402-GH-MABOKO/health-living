import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isRegistered, setIsRegistered] = useState(true); // Toggle between login and register

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="container">
      {isRegistered ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
