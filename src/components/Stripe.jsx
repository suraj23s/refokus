import React from 'react'

function Stripe({num,text}) {
  return (
    <div className='w-[16.66%] border-b-[1.2px] border-t-[1.2px] border-r-1 border-zinc-700 flex items-center justify-between px-10 py-5 text-zinc-300 gap-10'>
      <h6 className='uppercase font-semibold'>{text}</h6>
      <span className='uppercase font-semibold'>{num}</span>
    </div>
  )
}

export default Stripe
