import React from 'react'

function Button({title}) {
  return (
    <div className='w-fit bg-zinc-100 font-regular rounded-full text-black px-3 py-1 flex items-center justify-between'>
      <span className='text-sm font-medium capitalize'>{title}</span>
      <i class="ri-corner-down-right-line"></i>
    </div>
  )
}

export default Button
