import React, { useEffect } from 'react'
import { useRef } from 'react'

const Hero = () => {

 const videoRef =  useRef();


 useEffect(()=>{
    if(videoRef.current) videoRef.current.playbackRate =2;
 },[]);

  return (
    <section id ="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img  src="./title.png" alt="MacBook Title"/>
        </div>
        <video  src="./videos/hero.mp4" autoPlay muted  ref={videoRef} playsInline/>
         <button>Buy</button>
         <p>From ₹169900.00*
            or ₹13325.00/mo. for 12 mo.‡
            </p>
    </section>
  )
}

export default Hero