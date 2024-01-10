import React, { useState ,useContext } from 'react'
import { Link } from "react-router-dom"
import Logo from '../Assets/Logo/logo(1).png'
import { Badge, message } from 'antd'
import {
    ShoppingCartOutlined,
    SearchOutlined
} from '@ant-design/icons'
import { AuthContext , useAuthContext } from "../context/AuthContext"
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
export default function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const { user } = useAuthContext()
    const [count, setCoount] = useState(5)
    const logOut =()=>{
        signOut(auth)
        message.success("successfuly sign out")
        setIsAuthenticated(false)
    }
    return (
        <header className='container-fluid'>
            <div className='container'>
                <div className="row">
                    <div className="col-4 mb-2 col-md-4 col-lg-3 mb-lg-0">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className=" d-block col-4 d-lg-none"></div>
                    {isAuthenticated ? <Link onClick={logOut} className='auth col-4 text-center d-block d-lg-none'>Sign out</Link>:""}
                    <div className="col-12 mb-2 col-md-12 col-lg-4 mb-lg-0">
                        <div className="search_bar mt-1 mt-lg-0">
                            <input type="search" placeholder='Search book by author or publisher' />
                            <SearchOutlined className='h2 text-danger m-1' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 offset-md-2 col-lg-5 offset-lg-0">
                        <div className="d-flex justify-content-around align-items-center">
                        <Link to="/Auth/Login" className='text-decoration-none text-dark'>Track Order</Link>
                        {isAuthenticated  ? <Link to="/Dashboard/AddProduct" className='p-1 text-decoration-none text-dark'>Dashboard</Link> : <Link className='d-none'></Link>}
                        
                        <div className="cart">
                            <ShoppingCartOutlined className='h1' />
                            <Badge className='badge' count={count}></Badge>
                        </div>
                        
                        {!isAuthenticated ? <Link to="/Auth/Login" className='auth'>Sign in</Link> : <Link onClick={logOut} className='auth d-none d-lg-block'>Sign out</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}