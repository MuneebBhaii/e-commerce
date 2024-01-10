import React, { useState } from 'react'
import { createUserWithEmailAndPassword ,getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'
import { auth, firestore } from '../../config/firebase';
import { useAuthContext } from '../../context/AuthContext';
import { message } from 'antd';
import { Button, DatePicker, Divider, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom';
const initialization = { email: "", password: "", dob: "", number: "" , fullName: "" }

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(initialization)
    const [isProcessing, setIsProcessing] = useState(false)
    const { user } = useAuthContext()
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleDate = (_, date) => {
        setState(s => ({ ...s, date }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        console.log(state)
        const { email, password } = state
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                message.success("user register successfully")
                console.log(user)
                try {
                setDoc(doc(firestore, "users", user.uid), {fullName:user.fullName,dob:user.dob, number:user.number, email: user.email, uid: user.uid ,role: "user" });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch((error) => {
                console.error(error)
                message.error(" please try again")
            });
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
                            <Form layout='vertical' >
                                <Form.Item className='mb-3' >
                                    <label for="fullNmae">Full Name</label>
                                    <Input placeholder='Full Nmae' id='fullNmae' name='fullName' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="email">Email</label>
                                    <Input placeholder='Email' id='email' name='email' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for='dob'>Date-of-Birth</label>
                                    <DatePicker className='w-100' name='dob' id='dob' onChange={handleDate} />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="number">Phone Number</label>
                                    <Input placeholder='Phone Number' id='number' minLength={10} maxLength={11} name='number' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item className='mb-3'>
                                    <label for="password">Password</label>
                                    <Input.Password placeholder='Phone Number' id='password' minLength={10} maxLength={11} name='password' onChange={handleChange} />
                                </Form.Item>
                                <Button key="submit" type="primary" className='w-100' loading={loading} onClick={handleSubmit} > Register </Button>
                            </Form>
                            <p className='text-center mt-4'>Already have account  <Link to='/Auth/Login' className='text-dark fw-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
