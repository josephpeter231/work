import React, { useState } from 'react';
import { useFormik } from 'formik';

const AdminCard = () => {
  const [Action, setAction] = useState('signin');

  const adminSignin = useFormik({
    initialValues: {
      username: '',
      email: '',
      adminKey: '',
      password: '',
    },
    onSubmit: (values) => {
      if (Action === 'signin') {
        console.log('Signing in (Admin):');
        console.log(values);
      }
    },
  });

  const adminLogin = useFormik({
    initialValues: {
      email: '',
      adminKey: '',
      password: '',
    },
    onSubmit: (values) => {
      if (Action === 'login') {
        console.log('Logging in (Admin):');
        console.log(values);
      }
    },
  });

  return (
    <div>
      <div className="bg-white border-gray-400 border p-1 w-96 shadow-lg rounded-lg rounded-t-lg">
        <div className="flex flex-row w-full justify-around rounded-t-lg">
          <div
            className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-100 rounded-t-lg ${
              Action === 'login' ? 'bg-blue-400 text-white' : ' text-black'
            }`}
            onClick={() => setAction('login')}
          >
            LOGIN
          </div>
          <div
            className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-100 rounded-t-lg ${
              Action === 'signin' ? 'bg-blue-400 text-white' : ' text-black'
            }`}
            onClick={() => setAction('signin')}
          >
            SIGN IN
          </div>
        </div>

        <div
          className={`max-w-md mx-auto p-6 bg-blue-400 shadow-md rounded-b-lg ${
            Action === 'signin' ? 'rounded-tl-lg' : 'rounded-tr-lg'
          }`}
        >
          {Action === 'login' ? (
            <form onSubmit={adminLogin.handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="text-lg font-semibold text-white block">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={adminLogin.handleChange}
                  value={adminLogin.values.email}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="adminKey" className="text-lg font-semibold text-white block">
                  AdminKey:
                </label>
                <input
                  type="password"
                  id="adminKey"
                  name="adminKey"
                  onChange={adminLogin.handleChange}
                  value={adminLogin.values.adminKey}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="text-lg font-semibold text-white block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={adminLogin.handleChange}
                  value={adminLogin.values.password}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>
              <div className="flex w-full justify-end">
              <button type="submit" className="bg-white text-blue-600 rounded-md font-semibold px-2 py-1 ">LOGIN</button>
              </div>
            </form>
          ) : (
            <form onSubmit={adminSignin.handleSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="text-lg font-semibold text-white block">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={adminSignin.handleChange}
                  value={adminSignin.values.username}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="text-lg font-semibold text-white block">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={adminSignin.handleChange}
                  value={adminSignin.values.email}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="adminKey" className="text-lg font-semibold text-white block">
                  AdminKey:
                </label>
                <input
                  type="password"
                  id="adminKey"
                  name="adminKey"
                  onChange={adminSignin.handleChange}
                  value={adminSignin.values.adminKey}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="text-lg font-semibold text-white block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={adminSignin.handleChange}
                  value={adminSignin.values.password}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>
             <div className="flex w-full justify-end">
              <button type="submit" className="bg-white text-blue-600 rounded-md font-semibold px-2 py-1 ">SIGN IN</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
