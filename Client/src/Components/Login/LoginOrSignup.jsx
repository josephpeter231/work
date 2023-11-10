import { useState } from "react";

const LoginOrSignup = () => {
  const [selectedRole, setSelectedRole] = useState('Developers');
  const [Action, setAction ] = useState('signin');

  return (
    <div className='flex  flex-row w-full h-full justify-center items-center'>
      {/* <div className='bg-white w-96 flex justify-center items-center flex-col mx-10 rounded-t-lg h-auto'>
          <div className={`  text-black w-full ${selectedRole === 'Developers' ? 'bg-blue-600 text-white' : 'bg-blue-400'}`} onClick={() => setSelectedRole('Developers')}>
          <h2 className="font-bold text-lg py-2 px-2 my-2 text-center">DEVELOPERS </h2>
          </div>

          <div className={` text-black w-full ${selectedRole === 'Admin' ? 'bg-blue-600 text-white' : 'bg-blue-400'}`} onClick={() => setSelectedRole('Admin')}>
            <h2 className="font-bold text-lg py-2 px-10  my-2 text-center">ADMINS</h2>
          </div>
      </div> */}
      <div className="w-1/2 flex justify-center items-center">
        <div className='bg-white w-96 flex justify-center items-center flex-col rounded-t-lg h-auto '>
          <div className="bg-white shadow-xl rounded-lg px-4 w-full py-4  border-gray-400 border flex flex-col justify-center items-center">
            <div>
              <h2 className="text-black text-2xl font-medium mb-3 underline">CHOOSE YOUR ROLE</h2>
            </div>
            <div className={`mb-5  text-black w-full rounded-md ${selectedRole === 'Developers' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedRole('Developers')}>
              <h2 className="font-bold text-lg py-2 px-2 my-2 text-center">DEVELOPERS </h2>
            </div>

            <div className={` text-black w-full rounded-md mb-4 ${selectedRole === 'Admin' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedRole('Admin')}>
              <h2 className="font-bold text-lg py-2 px-10  my-2 text-center">ADMINS</h2>
            </div>
          </div>

        </div>
      </div>

      <div className='w-1/2   flex justify-center items-center '>

      <div className="bg-white border-gray-400 border p-1 w-96 shadow-lg rounded-lg rounded-t-lg">
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
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default LoginOrSignup