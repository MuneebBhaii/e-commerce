import React from 'react'
import {MailOutlined , HomeOutlined , PhoneOutlined} from '@ant-design/icons'
export default function contect() {
  return (
    <div className="container">
      <div className="bg-title">
        <h1>Contact</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8">
          <h3 className='mb-2'>Get in Touch</h3>
          <div className="row">
            <div className="col-12">
              <textarea placeholder='Enter Message' className='w-100 mb-3 p-2 outline' cols="30" rows="10"></textarea>
            </div>
            <div className="col-12 mb-3 col-md-6 col-lg-6">
              <input type="text" className='w-100 p-2 outline' placeholder='Enter name' />
            </div>
            <div className="col-12 mb-3 col-md-6 col-lg-6">
              <input type="email" className='w-100 p-2 outline' placeholder='Enter email' />
            </div>
            <div className="col-12">
              <input type="text" className='w-100 p-2 outline' placeholder='Enter Subject' />
            </div>
            <div className="col-12">
              <button className='sendMessage'>Submit</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className="contact">
          <HomeOutlined className='icon' />
          <div className="contact_data">
            <h6>Buttonwood, California.</h6>
            <p>Rosemead, CA 91770</p>
          </div>
          </div>
          <div className="contact">
          <PhoneOutlined className='icon' />
          <div className="contact_data">
            <h6>+1 253 565 2365</h6>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
          </div>
          <div className="contact">
          <MailOutlined className='icon' />
          <div className="contact_data">
            <h6>support@colorlib.com</h6>
            <p>Send us your query anytime!</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
