import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Pagenofound from './Pagenofound'
export default function index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Pagenofound/>}/>
    </Routes>
    </>
  )
}
