import React from 'react'
import { Routes , Route} from 'react-router-dom'
// auth page 🔑🔑🔑
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'
export default function index() {
  return (
    <>
    <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='ResetPassword' element={<ResetPassword/>}/>
    </Routes>
    </>
  )
}
