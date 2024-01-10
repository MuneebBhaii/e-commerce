import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// pages
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'
import { useAuthContext } from '../context/AuthContext'
import PrivateRoute from '../context/PrivateRoute'
export default function Index() {
  const { isAuthenticated } = useAuthContext()
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/Auth/*' element={!isAuthenticated ? <Auth/> : <Navigate to ="/" replace/>} />
        <Route path='/Dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
    </Routes>
    </BrowserRouter>
  )
}
