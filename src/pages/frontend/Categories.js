import React, { useState } from 'react'
import { Rate, Slider } from 'antd';
// components
import Browse from '../../components/Browse'
// pic
import picA from '../../Assets/pic/best_selling1.jpg'
import picB from '../../Assets/pic/best_selling2.jpg'
import picC from '../../Assets/pic/best_selling3.jpg'
import picD from '../../Assets/pic/best_selling4.jpg'
import picE from '../../Assets/pic/best_selling5.jpg'
import picF from '../../Assets/pic/best_selling6.jpg'

export default function Categories() {
  let minValue = 1000
  let maxValue = 5000
  let difference = 100
  const [range, setRange] = useState([maxValue, minValue + difference]);
  const handleChange = (values) => {
    const [min, max] = values;

    // Ensure a minimum difference of 50 between min and max
    if (max - min < difference) {
      // Adjust the min or max to satisfy the minimum difference
      if (min + difference <= maxValue) {
        setRange([min, min + difference]);
      } else {
        setRange([max - difference, max]);
      }
    } else {
      setRange([min, max]);
    }
  };
  return (
    <>
      {/* categoies_cover */}
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div className='categoies_cover'>
              <h1>Book Category</h1>
            </div>
          </div>
        </div>
      </div>
      {/* categoies */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3 py-4">
            <h5>Filter by Genres</h5>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck1" />
              <label class="form-check-label" for="flexCheck1">
                History
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck2" />
              <label class="form-check-label" for="flexCheck2">
                Horror - Thriller
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck3" />
              <label class="form-check-label" for="flexCheck3">
                Love stories
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck4" />
              <label class="form-check-label" for="flexCheck4">
                Science Fiction
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck5" />
              <label class="form-check-label" for="flexCheck5">
                Biography
              </label>
            </div>
            {/* filter price */}
            <h5 className='mt-4'>Filter by Price</h5>
            <Slider
              range
              min={minValue}
              max={maxValue}
              step={1}
              value={range}
              onChange={handleChange}
            />
            <div className="price_input">
              <div className="field">{range[0]}</div>
              <div className="separater">to</div>
              <div className="field">{range[1]}</div>
            </div>
            <select name="Filter By Rating" id='ratingFilter' className='mt-5'>
              <option value="Filter By Rating">Filter By Rating</option>
              <option value="5 star Rating">⭐⭐⭐⭐⭐</option>
              <option value="4 star Rating">⭐⭐⭐⭐</option>
              <option value="3 star Rating">⭐⭐⭐</option>
              <option value="2 star Rating">⭐⭐</option>
              <option value="1 star Rating">⭐</option>
            </select>
            {/* filter */}
            <h5 className='mt-3'>Filter by Publisher</h5>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck1" />
              <label class="form-check-label" for="flexCheck1">
                Green Publisher
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck2" />
              <label class="form-check-label" for="flexCheck2">
                Anondo Publisher
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck3" />
              <label class="form-check-label" for="flexCheck3">
                Rinku Publisher
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck4" />
              <label class="form-check-label" for="flexCheck4">
                Sheba Publisher
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck5" />
              <label class="form-check-label" for="flexCheck5">
                Red Publisher
              </label>
            </div>
            {/* auther name */}
            <h5 className='mt-3'>Filter by Genres</h5>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck1" />
              <label class="form-check-label" for="flexCheck1">
                Buster Hyman
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck2" />
              <label class="form-check-label" for="flexCheck2">
                Phil Harmonic
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck3" />
              <label class="form-check-label" for="flexCheck3">
                Cam L. Toe
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck4" />
              <label class="form-check-label" for="flexCheck4">
                Otto Matic
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheck5" />
              <label class="form-check-label" for="flexCheck5">
                Juan Annatoo
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-9 col-lg-9 ">
            <div className="row">
              <div className="col-md-6 col-lg-8"></div>
              <div className="col-md-6 col-lg-4">
                <select className="form-select py-2 px-3 rounded-5" aria-label="Disabled select example" >
                  <option selected value='Browse by popularity'>Browse by popularity</option>
                  <option value="Name">Name</option>
                  <option value="New">New</option>
                  <option value="Old">Old</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
              <div className="col-12 col-md-6 col-lg-4">
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
            {/* browse component*/}
            <Browse />
          </div>
        </div>
      </div>
    </>
  )
}
