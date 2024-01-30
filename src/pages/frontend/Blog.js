import React from 'react'
// icon
import {LeftOutlined ,RightOutlined } from '@ant-design/icons'
import blog1 from "../../Assets/Image/blog.webp"
import blog2 from "../../Assets/Image/blog_bg.jpg"
import blog3 from "../../Assets/Image/single_blog_3.jpg"
import blog4 from "../../Assets/Image/single_blog_4.jpg"
import blog5 from "../../Assets/Image/single_blog_5.jpg"
// post
import post1 from "../../Assets/pic/post.webp"
import post2 from "../../Assets/pic/post_2.jpg.webp"
import post3 from "../../Assets/pic/post_3.jpg.webp"
import post4 from "../../Assets/pic/post_4.jpg.webp"
import { MessageOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
export default function Blog() {
  return (
    <div className='container'>
       <div className="bg-title">
        <h1>Blog</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8">
          
          <div className="blog">
            <div className="img">
              <img src={blog1} alt="img" />
              <div className="date">15 <br /> Jan</div>
            </div>
            <div className="info">
              <Link className='a'>Google inks pact for new 35-storey office</Link>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <p><Link><UserOutlined /> Travel LifeStyle</Link><span className='separater'>|</span><Link><MessageOutlined />Comments</Link></p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img src={blog2} alt="img" />
              <div className="date">15 <br /> Jan</div>
            </div>
            <div className="info">
              <Link className='a'>Google inks pact for new 35-storey office</Link>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <p><Link><UserOutlined /> Travel LifeStyle</Link><span className='separater'>|</span><Link><MessageOutlined />Comments</Link></p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img src={blog3} alt="img" />
              <div className="date">15 <br /> Jan</div>
            </div>
            <div className="info">
              <Link className='a'>Google inks pact for new 35-storey office</Link>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <p><Link><UserOutlined /> Travel LifeStyle</Link><span className='separater'>|</span><Link><MessageOutlined />Comments</Link></p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img src={blog4} alt="img" />
              <div className="date">15 <br /> Jan</div>
            </div>
            <div className="info">
              <Link className='a'>Google inks pact for new 35-storey office</Link>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <p><Link><UserOutlined /> Travel LifeStyle</Link><span className='separater'>|</span><Link><MessageOutlined />Comments</Link></p>
            </div>
          </div>
          <div className="blog">
            <div className="img">
              <img src={blog5} alt="img" />
              <div className="date">15 <br /> Jan</div>
            </div>
            <div className="info">
              <Link className='a'>Google inks pact for new 35-storey office</Link>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
              <p><Link><UserOutlined /> Travel LifeStyle</Link><span className='separater'>|</span><Link><MessageOutlined />Comments</Link></p>
            </div>
          </div>
          <div className="nextPage">
            <button><LeftOutlined /></button>
            <button>1</button>
            <button>2</button>
            <button><RightOutlined /></button>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className="search_bg">
            <input type="search" placeholder='Search Keyword'/>
            <button>Search</button>
          </div>
          <div className="categories">
            <h5>Category</h5>
            <ul>
              <li><Link>Resaurant food(37)</Link></li>
              <li><Link>Travel news(10)</Link></li>
              <li><Link>Modern technology(03)</Link></li>
              <li><Link>Product(11)</Link></li>
              <li><Link>Inspiration(21)</Link></li>
              <li><Link>Health Care (21)</Link></li>
            </ul>
          </div>
          <div className="post">
            <h5>Recent Post</h5>
            <div className="post_block">
              <img src={post1} alt="postImg" />
              <div className="post_data">
                <Link>From life was you fish...</Link>
                <p>January 12, 2019</p>
              </div>
            </div>
            <div className="post_block">
              <img src={post2} alt="postImg" />
              <div className="post_data">
                <Link>From life was you fish...</Link>
                <p>March 28, 2019</p>
              </div>
            </div>
            <div className="post_block">
              <img src={post3} alt="postImg" />
              <div className="post_data">
                <Link>From life was you fish...</Link>
                <p>June 21, 2022</p>
              </div>
            </div>
            <div className="post_block">
              <img src={post4} alt="postImg" />
              <div className="post_data">
                <Link>From life was you fish...</Link>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          <div className="tag">
            <h5>Tag Clouds</h5>
            <button>project</button>
            <button>love</button>
            <button>technology</button>
            <button>travel</button>
            <button>restaurant</button>
            <button>life style</button>
            <button>design</button>
            <button>illustration</button>
          </div>
          <div className="Instagram">
            <h5>Instagram Feeds</h5>
            <div className="row">
              <div className="col feed">
                <img src={post1} alt="" />
                <img src={post2} alt="" />
              </div>
              <div className="col feed">
                <img src={post3} alt="" />
                <img src={post4} alt="" />
              </div>
              <div className="col feed">
                <img src={blog1} alt="" />
                <img src={blog3} alt="" />
              </div>
            </div>
          </div>
          <div className="newSubcriber">
            <h5>Newsletter</h5>
            <input type="email" placeholder='Enter email' />
            <button className='SubcribeBtn'>Subcribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
