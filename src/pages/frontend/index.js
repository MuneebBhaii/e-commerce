import React from 'react'
import { Route, Routes } from 'react-router-dom'
// pages
import Home from './Home'
import Categories from './Categories'
import About from './About'
import Blog from './Blog'
import Contect from './contect'
import Pagenofound from './Pagenofound'
// components 
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import Subcriber from '../../components/Subcriber'
import GoTop from '../../components/GoTop'
export default function index() {
  return (
    <>
      {/* component */}
      <Header />
      <Navbar />
      {/* pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Categories' element={<Categories />} />
        <Route path='About' element={<About />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='Contect' element={<Contect />} />
        <Route path='*' element={<Pagenofound />} />
      </Routes>

      {/* section six*/}
      {/* component */}
      <Subcriber />


      <GoTop/>
      {/* footer */}
      {/* component */}
      <Footer />
    </>
  )
}
