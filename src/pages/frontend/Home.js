import React, { useEffect } from 'react'
import { Rate } from 'antd';
// components 
import CardCarousel from '../../components/cro'
// images
import slideA from "../../Assets/Image/christopher-gower-m_HRfLhgABo-unsplash.jpg"
import slideB from '../../Assets/Image/pexels-ian-turnell-709552.jpg'
import slideC from '../../Assets/Image/sunset-1373171_1280.jpg'
// pic
import picA from '../../Assets/pic/best_selling1.jpg'
import picB from '../../Assets/pic/best_selling2.jpg'
import picC from '../../Assets/pic/best_selling3.jpg'
import picD from '../../Assets/pic/best_selling4.jpg'
import picE from '../../Assets/pic/best_selling5.jpg'
import picF from '../../Assets/pic/best_selling6.jpg'
import hacker from '../../Assets/pic/Hacker.webp'
import Browse from '../../components/Browse';
import { NavLink } from 'react-router-dom';
import GoTop from '../../components/GoTop';
export default function Home() {
  return (
    <>
      <section className='section_first'>
        <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slideA} className="d-block w-100" alt="slide_pic" />
              <div className="carousel-caption d-md-block">
                <span className='bg-light text-dark px-3 py-0 rounded-5'>Science Fiction</span>
                <h1>The History of phippino</h1>
                <button className='store_btn rounded-5 py-3 px-5'>Browse Store</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slideB} className="d-block w-100" alt="slide_pic" />
              <div className="carousel-caption d-md-block">
                <span className='bg-light text-dark px-3 py-0 rounded-5'>Science Fiction</span>
                <h1>The History of phippino</h1>
                <button className='store_btn rounded-5 py-3 px-5'>Browse Store</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slideC} className="d-block w-100" alt="slide_pic" />
              <div className="carousel-caption d-md-block">
                <span className='bg-light text-dark px-3 py-0 rounded-5'>Science Fiction</span>
                <h1>The History of phippino</h1>
                <button className='store_btn rounded-5 py-3 px-5'>Browse Store</button>
              </div>
            </div>
          </div>
        </div>
        <p className='div_text'>Best Selling Books Ever</p>
        {/* component */}
        <CardCarousel />
      </section>
      {/* second section */}
      <section className='section_second container py-2 px-0'>
        <div className="row">
          <div className="col-12 mb-2 col-md-9 mb-md-0">
            <div className="fecture">
              <div className="d-flex justify-content-between align-items-center">
                <h1>Featured This Week</h1>
                <span>View All</span>
              </div>
              <div id="carouselExampleIndicators" className="carousel slide slider_bg pb-sm-3" data-bs-ride="carousel">
                <div className="carousel-inner w-75 m-auto">
                  <div className="carousel-item active">
                    <div className="silde_box d-block d-lg-flex justify-content-lg-between align-items-lg-center">
                      <img src={slideA} className="my-5" alt="product_pic" />
                      <div className="text ps-lg-2">
                        <h2>The Rage of Dragons</h2>
                        <p>By Evar Winter</p>
                        <ins>$50.00</ins>
                        <Rate allowHalf defaultValue={4.5} className='text-white' />
                        <span className='p'>(120 Review)</span>
                        <button className='mb-2'>View details</button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="silde_box d-block d-lg-flex justify-content-lg-between align-items-lg-center">
                      <img src={slideB} className="my-5" alt="product_pic" />
                      <div className="text ps-lg-2">
                        <h2>The Rage of Dragons</h2>
                        <p>By Evar Winter</p>
                        <ins>$50.00</ins>
                        <Rate allowHalf defaultValue={4.5} className='text-white' />
                        <span className='p'>(120 Review)</span>
                        <button>View details</button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="silde_box d-block d-lg-flex justify-content-lg-between align-items-lg-center">
                      <img src={slideC} className="my-5" alt="product_pic" />
                      <div className="text ps-lg-2">
                        <h2>The Rage of Dragons</h2>
                        <p>By Evar Winter</p>
                        <ins>$50.00</ins>
                        <Rate allowHalf defaultValue={4.5} className='text-white' />
                        <span className='p'>(120 Review)</span>
                        <button>View details</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-12 col-md-3">
            <div class="carousel-item active sider_img">
              <img src={picF} alt="..." />
              <div class="carousel-caption d-md-block justify-items-between">
                <button>Drama</button>
                <p>The History of Phipino</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* third section */}
      <div className="container d-block d-lg-flex justify-content-lg-between align-items-lg-center  px-0 mt-5">
        <div className="row">
          <div className="col">
            <h1 className='text-nowrap '>Latest Published items</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="buttons ">
              <div className="col">
                <NavLink to="/">All</NavLink>
                <NavLink to="javascript:void(0)" >Horror</NavLink>
                <NavLink to="javascript:void(0)" >Thriller</NavLink>
                <NavLink to="javascript:void(0)" className='text-nowrap'>Science Fiction</NavLink>
                <NavLink to="javascript:void(0)" >History</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section four */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picA} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picB} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picC} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picD} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picE} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card flex_card">
              <img src={picF} className="flex_card_img" alt="product pic" />
              <div className='card_border'>
                <div className="card-body ">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0 '>
                  <h3 className="card-text text-danger">$50</h3>
                </div>
                <div className="card-body pt-0 ">
                  <Rate allowHalf defaultValue={4.5} className='rating' />
                  <span className="card-text text_light mt-2 text-nowrap">(<span className='text-danger'>120 </span> Review)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section button */}
      {/* browse component */}
      <Browse />
      {/* section five */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-2 col-md-6 mb-md-0">
            <div class="carousel-item active section_five_img">
              <img src={hacker} alt="..." />
              <div class="carousel-caption">
                <h3>The History of Phipino</h3>
                <button className='detail_btn'>View Details</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="carousel-item active section_five_img">
              <img src={hacker} alt="..." />
              <div class="carousel-caption">
                <h3>Wilma Mumduya</h3>
                <button className='detail_btn'>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     <GoTop/> 
    </>
  )
}
