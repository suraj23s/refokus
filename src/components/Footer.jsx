import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto flex py-8 text-white gap-2'>
      <div className='basis-1/2'>
        <h1 className='text-[11.5rem] font-semibold tracking-tight leading-none'>refokus.</h1>
      </div>
      <div className='basis-1/2 flex'>
        <div className='basis-1/3'>
            <h4 className='text-lg'>Socials</h4>
            {
                ["Instagram","Twitter (X)?","LinkedIn","xyz"].map((ele,index)=>(
                    <a className='block mt-2 capitalize text-zinc-600'>
                        {ele}
                    </a>
                ))
            }
        </div>
           <div className='basis-1/3 '>
            <h4 className='text-lg'>Sitemap</h4>
            {
                ["Home","Work","Careers","Content"].map((ele,index)=>(
                    <a className='block mt-2 capitalize text-zinc-600'>
                        {ele}
                    </a>
                ))
            }
        </div>
        <div className='basis-1/2 flex flex-col justify-center text-right items-end'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit odio at quisquam pariatur numquam. Aliquid nisi amet tempora nemo esse!</p>
            <button className='text-2xl bg-blue-500 px-2 py-1 font-semibold mt-10 rounded'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
