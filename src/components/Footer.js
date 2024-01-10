import React from 'react'
import {FacebookOutlined , YoutubeFilled , InstagramOutlined , LinkedinOutlined} from '@ant-design/icons'
// logo
import logo from '../Assets/Logo/logo(1).png'
import { Link } from 'react-router-dom'
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-5 col-md-5 col-lg-4 mb-lg-0">
                    <img src={logo} alt="📙 ABCbook logo" />
                    <p className='py-4'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                    <a href=""><FacebookOutlined className='social_media facebook m-0'/></a>
                    <a href=""><InstagramOutlined className='social_media instagram'/></a>
                    <a href=""><LinkedinOutlined className='social_media linkedin'/></a>
                    <a href=""><YoutubeFilled className='social_media youtube'/></a>
                </div>
                <div className="col-12 col-md-3 col-lg-2">
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
                    <h5 className='pb-4 invisible d-none d-md-block'>Book Category</h5>
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='About'>About Us</Link></li>
                        <li><Link to=''>FAQs</Link></li>
                        <li><Link to='Blog'>Blog</Link></li>
                        <li><Link to='Contect'>Contect</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* last footer */}
        <div className="container pt-5">
            <div className="row">
                <div className="col text-center">
                    <p className='fs-5'>Copyright &copy; <span>{year}</span> All rights reserved || E-Commerce website is made with 🧡 by <span className='developer'>Muhammad Muneeb</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
