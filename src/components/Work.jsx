import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react'

function Work() {
  const [images,setImages] = useState( [
    {
      url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "40%",
      left: "46%",
      isActive: false
    },
        {
      url: "https://plus.unsplash.com/premium_photo-1679784157152-87caa598bacb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrfGVufDB8fDB8fHww",
      top: "30%",
      left: "52%",
      isActive: false
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "40%",
      left: "55%",
      isActive: false
    }
  ]);
  const {scrollY,scrollYProgress}  = useScroll();

  scrollYProgress.on("change",(data)=>{
    function showImages(arr){
      setImages(prev=>(
        prev.map((item,index)=>(
          arr.indexOf(index)=== -1 ? {...item,isActive: false} : {...item,isActive: true}
        ))
      ))
    }

    switch(Math.floor(data*100)){
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0,1]);
        break;
      case 2:
        showImages([0,1,2]);
        break;
      case 3:
        showImages([0,1,2,3]);
        break;
    }
  })

  return (
    <div className='w-full mt-10'>
  <div className="relative max-w-screen-xl mx-auto">
    <h1 className='text-[60vh] text-zinc-300 text-center leading-none font-medium tracking-tight select-none'>
      Work
    </h1>

    <div className='absolute w-full h-full top-0 left-0'>
      {images.map((ele, index) => (
        ele.isActive && <img
          key={index}
          src={ele.url}
          alt="img"
          // className='w-40 h-40 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]'\
          className='absolute w-50 h-50 rounded-lg -translate-x-[50%]'
          style={{ top: ele.top, left: ele.left }}
        />
      ))}
    </div>
  </div>
</div>

  )
}

export default Work
