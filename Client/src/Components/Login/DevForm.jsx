import React, { useState } from 'react';

const DevForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  const toggleForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <div className='Dev_form_container'>
      <div className='Toggle_btn_container'>
        <button
          className={`Top_toggle_Signup_btn ${showSignupForm ? 'active' : ''}`}
          onClick={() => setShowSignupForm(true)}
        >
          Sign Up
        </button>
        <button
          className={`Top_toggle_Login_btn ${!showSignupForm ? 'active' : ''}`}
          onClick={() => setShowSignupForm(false)}
        >
          Login
        </button>
      </div>
      {showSignupForm ? (
        <form className='Dev_Signup_form'>
          <label className='Dev_label'>Email</label>
          <input className='Dev_input' type='text' placeholder='Email address' required />
          <label className='Dev_label'>Username</label>
          <input className='Dev_input' type='text' placeholder='Username' required />
          <label className='Dev_label'>Password</label>
          <input className='Dev_input' type='password' placeholder='Admin Key' required />
          <h4 className='Login_link_txt'>
            Already have an account? <a className='login_link' onClick={toggleForm}>Sign In</a>
          </h4>
          <button className='SignUp_btn'>Sign Up</button>
        </form>
      ) : (
        <form className='Dev_Login_form'>
          <label className='Dev_label'>Username</label>
          <input className='Dev_input' type='text' placeholder='Username' required />
          <label className='Dev_label'>Password</label>
          <input className='Dev_input' type='password' placeholder='Password' required />
          <h4 className='Login_link_txt'>
            Create an account? <a className='login_link' onClick={toggleForm}>Sign Up</a>
          </h4>
          <button className='SignUp_btn'>Login</button>
        </form>
      )}
    </div>
  );
};

export default DevForm