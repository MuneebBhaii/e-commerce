import { Button, Divider, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    const [loading, setLoading] = useState(false);

    const handlesubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    return (
        <main className='mainbg'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-4 p-lg-5">
                            <Typography.Title className='text-center mb-0'>Login</Typography.Title>
                            <Divider className='mt-3' />
                            <Form layout='vertical'>
                                <Form.Item className='mb-3'>
                                    <label for="email">Email</label>
                                    <Input placeholder='Email' id='email' name='email' />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="password">Password</label>
                                    <Input.Password placeholder='Phone Number' id='password' minLength={10} maxLength={11} name='password' />
                                </Form.Item>
                                <Button key="submit" type="primary" className='w-100' loading={loading} onClick={handlesubmit} >
                                    Login
                                </Button>
                            </Form>
                            <div className='login-div'>
                            <span>Create new account  <Link to='/Auth/Register' className='text-dark fw-bold'> Register</Link></span>
                            <Link to='/Auth/ForgetPassword'>Forget Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
