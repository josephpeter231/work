import React, { useState } from 'react';
import AdminForm from './AdminForm';
import DevForm from './DevForm';
import './loginOrSignup.css';

const LoginOrSignup = () => {
  const [showAdminForm, setShowAdminForm] = useState(true);

  const switchToAdminForm = () => {
    setShowAdminForm(true);
  };

  const switchToDevForm = () => {
    setShowAdminForm(false);
  };

  return (
    <div className='App'>
      <div className='Login_main_title_cont'>
        <h1 className='Logo_title'>ACM</h1>
      </div>
      <div className='Common_cont'>
        <div className='Left_cont'>
          <button
            className={`Admin_btn ${showAdminForm ? 'active' : ''}`}
            onClick={switchToAdminForm}
          >
            Admin
          </button>
          <button
            className={`Dev_btn ${!showAdminForm ? 'active' : ''}`}
            onClick={switchToDevForm}
          >
            Developer
          </button>
        </div>
        <div className='Right_cont'>
          {showAdminForm ? <AdminForm /> : <DevForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginOrSignup;
