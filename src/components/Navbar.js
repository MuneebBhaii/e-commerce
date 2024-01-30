import React from 'react'
import {MenuOutlined}from '@ant-design/icons'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar_bg">
      <div className="container">
      <Link class="navbar-brand" to="/"></Link>
        <button className="navbar-toggler bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className='fw-bold'>MENU</span>
        </button>
        <div className="collapse navbar-collapse offset-lg-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Contect">Contect</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
