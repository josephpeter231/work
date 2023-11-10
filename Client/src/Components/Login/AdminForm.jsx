import React, { useState } from 'react';

const AdminForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  const toggleForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <div className='Admin_form_container'>
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
        <form className='Admin_Signup_form'>
          <label className='Admin_label'>Email</label>
          <input className='Admin_input' type='text' placeholder='Email address' required />
          <label className='Admin_label'>Username</label>
          <input className='Admin_input' type='text' placeholder='Username' required />
          <label className='Admin_label'>Password</label>
          <input className='Admin_input' type='password' placeholder='Password' required />
          <label className='Admin_label'>Admin Key</label>
          <input className='Admin_input' type='password' placeholder='Admin Key' required />
          <h4 className='Login_link_txt'>
            Already have an account? <a className='login_link' onClick={toggleForm}>Sign In</a>
          </h4>
          <button className='SignUp_btn'>Sign Up</button>
        </form>
      ) : (
        <form className='Admin_Login_form'>
          <label className='Admin_label'>Username</label>
          <input className='Admin_input' type='text' placeholder='Username' required />
          <label className='Admin_label'>Password</label>
          <input className='Admin_input' type='password' placeholder='Password' required />
          <label className='Admin_label'>Admin Key</label>
          <input className='Admin_input' type='password' placeholder='Admin Key' required />
          <h4 className='Login_link_txt'>
            Create an account? <a className='login_link' onClick={toggleForm}>Sign Up</a>
          </h4>
          <button className='SignUp_btn'>Login</button>
        </form>
      )}
    </div>
  );
};

export default AdminForm;
