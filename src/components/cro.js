import React, { useState, useEffect } from 'react';
import { Rate } from 'antd';
// pic
import picA from '../Assets/pic/best_selling1.jpg'
import picB from '../Assets/pic/best_selling2.jpg'
import picC from '../Assets/pic/best_selling3.jpg'
import picD from '../Assets/pic/best_selling4.jpg'
import picE from '../Assets/pic/best_selling5.jpg'
import picF from '../Assets/pic/best_selling6.jpg'
const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const track = document.getElementById('carouselTrack');
    const cardWidth = getCardWidth();
    setCurrentIndex((index + track.children.length) % track.children.length);
    if (currentIndex >= track.children.length - getNumberOfCards()) {
      setCurrentIndex(0);
    }

    const offset = -currentIndex * cardWidth;
    track.style.transform = `translateX(${offset}%)`;
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    if(currentIndex > 0){
      showSlide(currentIndex - 1);
    }else{
      setCurrentIndex(0)
    }
  };

  const getCardWidth = () => {
    if (window.innerWidth > 1000) {
      return 25;
    } else if (window.innerWidth > 700) {
      return 33.33;
    } else if (window.innerWidth > 400) {
      return 50;
    } else {
      return 100;
    }
  };

  const getNumberOfCards = () => {
    if (window.innerWidth > 1000) {
      return 4;
    } else if (window.innerWidth > 700) {
      return 3;
    } else if (window.innerWidth > 400) {
      return 2;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    // Auto-forward every 3 seconds
    const intervalId = setInterval(nextSlide, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    // <div className="carousel-container">
     <div className="carousel-container container">
          <div className="carousel-track" id="carouselTrack">
            <div className="carousel-card">
            <img src={picA} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picB} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picC} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picD} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picE} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picF} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picA} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picB} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picC} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
            <div className="carousel-card">
            <img src={picD} className="card-img-top" alt="product pic" />
                <div className="card-body">
                  <h5 className="card-title">Moon Dance</h5>
                  <p className="card-text text_light">J.R Rain</p>
                </div>
                <div className='card-body py-0'>
                  <Rate allowHalf defaultValue={4.5} />
                </div>
                <div className="card-body pt-0 d-flex justify-content-between">
                  <span className="card-text text_light mt-2">(<span className='text-danger'>120 </span> Review)</span>
                  <span className="card-text text-danger h3">$50</span>
                </div>
            </div>
          </div>

      <button className="control-btn prev-btn" onClick={prevSlide}>&#10094; Prev</button>
      <button className="control-btn next-btn" onClick={nextSlide}>Next &#10095;</button>
    </div>
  );
};

export default CardCarousel;
