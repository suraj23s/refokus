import { motion } from 'framer-motion';
import React from 'react'

function Marquee({direction, data }) {
  
  return (
    <div className="w-full flex whitespace-nowrap overflow-hidden">
      <motion.div className='flex flex-shrink-0 gap-20 pr-40' initial={{x: direction==="left" ? "0%" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0%"}} transition={{ease: "linear",repeat: Infinity,duration: 15}}  >
              {data.map((item, index) => (
        <img
          key={index}
          src={item}
          alt=""
          className="h-30"
          style={{
            // width: "100px",
            // height: "auto",   // LET IMAGE KEEP ITS NATURAL RATIO
            filter: "invert(53%) sepia(5%) saturate(100%) hue-rotate(180deg) brightness(90%) contrast(90%)"
          }}
        />
      ))}
      </motion.div>
        <motion.div className='flex flex-shrink-0 gap-20 pr-40' initial={{x: direction==="left" ? "0%" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0%"}} transition={{ease: "linear",repeat: Infinity,duration: 15}}  >
              {data.map((item, index) => (
        <img
          key={index}
          src={item}
          alt=""
          className="h-30"
          style={{
        //     width: "100px",
        //     height: "auto",   // LET IMAGE KEEP ITS NATURAL RATIO
            filter: "invert(53%) sepia(5%) saturate(100%) hue-rotate(180deg) brightness(90%) contrast(90%)"
          }}
        />
      ))}
      </motion.div>
    </div>
  );
}


export default Marquee
