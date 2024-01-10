import React from 'react'
import { Routes, Route } from 'react-router-dom'
// auth page 🔑🔑🔑
import AddProduct from './AddProduct'
import Update from './Update'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Subcriber from '../../components/Subcriber'
import Footer from '../../components/Footer'
export default function index() {
  return (
    <>
      {/* header */}
      <Header />
      <section>
        {/* navbar */}
        <Navbar />
        <Routes>
          <Route path='AddProduct' element={<AddProduct />} />
          <Route path='Update' element={<Update />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        {/* Subcriber */}
        <Subcriber />
        {/* footer */}
        <Footer />
      </section>
    </>
  )
}
