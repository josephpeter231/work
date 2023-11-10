<<<<<<< HEAD
import { useState } from "react";

const LoginOrSignup = () => {
  const [selectedRole, setSelectedRole] = useState('Developers');
  const [Action, setAction ] = useState('signin');

  return (
    <div className='flex bg-red-500 flex-row w-full h-full'>
      <div className='bg-white w-96 flex justify-center items-center flex-col mx-10 rounded-t-lg h-auto'>
          <div className={`  text-black w-full ${selectedRole === 'Developers' ? 'bg-blue-600 text-white' : 'bg-blue-400'}`} onClick={() => setSelectedRole('Developers')}>
          <h2 className="font-bold text-lg py-2 px-2 my-2 text-center">DEVELOPERS </h2>
          </div>

          <div className={` text-black w-full ${selectedRole === 'Admin' ? 'bg-blue-600 text-white' : 'bg-blue-400'}`} onClick={() => setSelectedRole('Admin')}>
            <h2 className="font-bold text-lg py-2 px-10  my-2 text-center">ADMINS</h2>
          </div>
      </div>

      <div className='w-2/3  bg-white flex justify-center items-center px-10'>

      <div className="bg-white w-96 shadow-lg rounded-lg rounded-t-lg">
      <div className="flex flex-row w-full justify-around rounded-t-lg">
        <div
          className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-200 rounded-t-lg ${Action === 'login' ? 'bg-blue-400 text-white' : ' text-black'}`}
          onClick={() => setAction('login')}
        >
          LOGIN
        </div>
        <div
          className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-200 rounded-t-lg ${Action === 'signin' ? 'bg-blue-400 text-white' : ' text-black'}`}
          onClick={() => setAction('signin')}
        >
          SIGN IN
        </div>
      </div>

      <div className={`max-w-md mx-auto p-6 bg-blue-400 shadow-md rounded-b-lg ${Action == 'signin'?'rounded-tl-lg':'rounded-tr-lg'}`}>
        <div className="mb-6">
          <label htmlFor="username" className="text-lg font-semibold text-white block">Username:</label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="text-lg font-semibold text-white block">Email:</label>
          <input
            type="text"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="text-lg font-semibold text-white block">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
          />
=======
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
        <h1 className='Logo_title'>APPLICATION CONFIGURATION MANAGEMENT</h1>
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
>>>>>>> 9e691d52b8acd97a7f3e6b4bda9d34a614e644be
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default LoginOrSignup