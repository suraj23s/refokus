import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

function Card({width,start,para,hover=false}) {
  return (
    <motion.div whileHover={{backgroundColor: hover && "#7443ff",padding: "25px"}} className={`bg-zinc-800 rounded-xl hover:${hover} p-5 text-zinc-100 ${width} min-h-[30rem]`}>
      <div className='w-full'>
          <div className='w-full flex items-center justify-between'>
          <h3 className='text-sm'>Up Next:Culture</h3>
          <i class="ri-arrow-right-line"></i>
      </div>
      <h1 className='text-3xl font-medium mt-5'>
        Who we are
      </h1>
      </div>
      <div className='down w-full mt-60'>
        {
          start === true &&
          (
            <>
             <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className='rounded-full mt-5 px-5 py-2  border-[1px] border-zinc-50'>Contact Us</button>
            </>
          )
      }
        {
          para &&
          <p className='text-sm text-zinc-500 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium atque nostrum mollitia nisi ducimus incidunt earum.</p>
        }
        </div>
    </motion.div>
  )
}

export default Card
