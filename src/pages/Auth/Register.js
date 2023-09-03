import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, Input, Typography } from 'antd'
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
                            <Typography.Title className='text-center mb-0'>Register Form</Typography.Title>
                            <Divider className='mt-3' />
                            <Form layout='vertical'>
                                <Form.Item className='mb-3' >
                                    <label for="fullNmae">Full Name</label>
                                    <Input placeholder='Full Nmae' id='fullNmae' name='fullNmae' />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="email">Email</label>
                                    <Input placeholder='Email' id='email' name='email' />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for='dob'>Date-of-Birth</label>
                                    <DatePicker className='w-100' id='dob' />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="number">Phone Number</label>
                                    <Input placeholder='Phone Number' id='number' minLength={10} maxLength={11} name='number' />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="password">Password</label>
                                    <Input.Password placeholder='Phone Number' id='password' minLength={10} maxLength={11} name='password' />
                                </Form.Item>
                                <Button key="submit" type="primary" className='w-100' loading={loading} onClick={handlesubmit} >
                                    Register
                                </Button>
                            </Form>
                            <p className='text-center mt-4'>Already have account  <Link to='/Auth/Login' className='text-dark fw-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
