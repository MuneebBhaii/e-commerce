import React from 'react'
// logo
import logo from '../Assets/Logo/logo(1).png'
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <img src={logo} alt="📙 ABCbook logo" />
                    <p className='py-4'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <h5 className='pb-4'>Book Category</h5>
                    <ul className='p-0 m-0 category_list'>
                        <li>history</li>
                        <li>horror</li>
                        <li>love</li>
                        <li>science fiction</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div className="col-12 mb-3 col-md-4 col-lg-3 mb-lg-0">
                    <h5 className='pb-4 invisible d-sm-none d-md-block'>Book Category</h5>
                    <ul className='p-0 m-0 category_list'>
                        <li>Biography</li>
                        <li>Astrology</li>
                        <li>Digital Marketing</li>
                        <li>Software Development</li>
                        <li>Ecommerce</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3">
                <h5 className='pb-4'>Site Map</h5>
                    <ul className='p-0 m-0 category_list'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* last footer */}
        <div className="container pt-5">
            <div className="row">
                <div className="col text-center">
                    <p className='fs-5'>Copyright &copy; <span>{year}</span> All rights reserved || E-Commerce website is made with 🧡 by <span className='developer'>Muhammad Muneeb safdar</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
