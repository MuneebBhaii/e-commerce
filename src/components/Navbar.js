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
        <div className='container'>
            <header>
            <div className="brand_logo">
                <img src={Logo} alt="{Logo}" />
            </div>
            <div className="search_bar">
                <input type="search" placeholder='Search book by author or publisher' />
                <SearchOutlined className='h2 text-danger me-1' />
            </div>
            <Link to="/Auth/Login" className='text-decoration-none text-dark'>Track Order</Link>
            <div className="cart">
            <ShoppingCartOutlined className='h1' />
            <Badge className='badge' count={count}></Badge>
            </div>
            <button className='auth'>Sign in</button>
            </header>
        </div>
    )
}
