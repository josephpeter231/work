import React from 'react'
import AdminForm from './AdminForm'
import DevForm from './DevForm'
import './loginOrSignup.css'
const LoginOrSignup = () => {
  return (
    <div className='App'>
      <AdminForm/>
      <DevForm/>
    </div>
  )
}

export default LoginOrSignup