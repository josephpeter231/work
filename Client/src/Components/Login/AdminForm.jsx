
import React, { useState } from 'react';

const AdminForm = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="AdminForm">
      <div className="title-container">Title</div>
      <div className="button-container">
        <button className="active-button">Admin</button>
        <button className="inactive-button" onClick={handleToggleForm}>Developer</button>
      </div>
      <div className="form-container">
        {showSignup ? (
          <form className="AdminSignupForm">
            {/* Admin signup form fields */}
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <label>Admin Key:</label>
            <input type="password" />
            <label>Email:</label>
            <input type="email" />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className="AdminLoginForm">
            {/* Admin login form fields */}
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <label>Admin Key:</label>
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

export default AdminForm;
