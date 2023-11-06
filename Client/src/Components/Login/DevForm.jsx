
import React, { useState } from 'react';

const DevForm = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="DevForm">
      <div className="title-container">Title</div>
      <div className="button-container">
        <button className="active-button">Developer</button>
        <button className="inactive-button" onClick={handleToggleForm}>Admin</button>
      </div>
      <div className="form-container">
        {showSignup ? (
          <form className="DevSignupForm">
            {/* Developer signup form fields */}
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <label>Email:</label>
            <input type="email" />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className="DevLoginForm">
            {/* Developer login form fields */}
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <label>Email:</label>
            <input type="email" />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DevForm;
