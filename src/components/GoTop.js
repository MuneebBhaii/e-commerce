import React, { useEffect, useState } from 'react'
import {UpOutlined} from '@ant-design/icons'
export default function GoTop() {
  const [isVisible , setIsVisible] = useState(false)
  const goTopBtn = ()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"});
  }

  const listenerScroll = () =>{
    let heightHidden = 300;
    const ScrollPoint = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(ScrollPoint)
    if(ScrollPoint > heightHidden){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", listenerScroll)
    // return window.removeEventListener("scroll",listenerScroll)
  }, [])

  return ( 
    <>
    {isVisible && <UpOutlined className='goTop' onClick={goTopBtn} />}
    </>
  )
}
