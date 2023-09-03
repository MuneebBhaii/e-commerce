import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// pages
import Frontend from './Frontend'
import Auth from './Auth'
export default function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/Auth/*' element={<Auth/>} />
    </Routes>
    </BrowserRouter>
  )
}
