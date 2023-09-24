import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Pagenofound from './Pagenofound'
import About from './About'
export default function index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>} />
        <Route path='*' element={<Pagenofound/>}/>
    </Routes>
    </>
  )
}
