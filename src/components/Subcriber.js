import React from 'react'

export default function Subcriber() {
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-12">
                    <div className='bg_img'>
                        <div className='col-md-9 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center'>
                            <h1>Join Newsletter</h1>
                            <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.</p>
                            <input className='col-12 mb-2 col-md-6 mb-md-0 col-lg-5 offset-lg-1' type="email" name="email" id='subcriber_email' placeholder='Enter your email' />
                            <button className='Subcribe col-12 col-md-4 offset-md-1 col-lg-3'>Subcribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
