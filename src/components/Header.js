import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../Assets/Logo/logo(1).png'
import { Badge } from 'antd'
import {
    ShoppingCartOutlined,
    SearchOutlined
} from '@ant-design/icons'
export default function Navbar() {
    const [count, setCoount] = useState(5)
    return (
        <header className='container-fluid'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-4 mb-2 col-md-4 offset-md-4 col-lg-3 mb-lg-0 offset-lg-0">
                        <img src={Logo} alt="{Logo}" />
                    </div>
                    <div className="col-sm-12 mb-2 col-md-12 col-lg-5 mb-lg-0">
                        <div className="search_bar">
                            <input type="search" placeholder='Search book by author or publisher' />
                            <SearchOutlined className='h2 text-danger me-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                        <div className="d-flex justify-content-around align-items-center">
                        <Link to="/Auth/Login" className='text-decoration-none text-dark'>Track Order</Link>
                        <div className="cart">
                            <ShoppingCartOutlined className='h1' />
                            <Badge className='badge' count={count}></Badge>
                        </div>
                        <button className='auth'>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}