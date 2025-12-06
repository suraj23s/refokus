import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    const [pos,setPos] = useState(0);
    const data = [{
        title: "Hii",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et repellat beatae quibusdam dolore at, doloribus ex.",
        live: true,
        case: true

    },
{
        title: "Hello",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et repellat beatae quibusdam dolore at, doloribus ex.",
        live: true,
        case: false

    },
{
        title: "How",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et repellat beatae quibusdam dolore at, doloribus ex.",
        live: true,
        case: false

    },
{
        title: "Are",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et repellat beatae quibusdam dolore at, doloribus ex.",
        live: true,
        case: false

    },
{
        title: "You?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et repellat beatae quibusdam dolore at, doloribus ex.",
        live: true,
        case: false

    }
];

const mover = (index)=>{
    console.log(index)
    setPos(index*23);
};
  return (
    <div className='mt-32 relative'>
        {
            data.map((ele,index)=>{
                return  <Product data={ele} index={index} mover={mover} />
            })
        }
        <div className='absolute top-0 w-full h-full pointer-events-none'>
        <motion.div initial={{y: pos,x: "-50%"}} animate={{y: pos+`rem`}} className='window absolute h-[23rem]  w-[32rem] left-[44%]  overflow-hidden'>
            <motion.div animate={{y: -pos+`rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1],duration: .6}}
            className='w-full h-full bg-sky-100 text-black'></motion.div>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease: [0.76, 0, 0.24, 1],duration: .5}} className='w-full h-full bg-zinc-300'></motion.div>
            <motion.div animate={{y: -pos+`rem`}}   transition={{ease: [0.76, 0, 0.24, 1],duration: .5}} className='w-full h-full bg-zinc-500 '></motion.div>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease: [0.76, 0, 0.24, 1],duration: .5}} className='w-full h-full bg-sky-400'></motion.div>
             <motion.div animate={{y: -pos+`rem`}}  transition={{ease: [0.76, 0, 0.24, 1],duration: .5}} className='w-full h-full bg-sky-600'></motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default Products
