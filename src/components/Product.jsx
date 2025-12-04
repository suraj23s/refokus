import React from 'react'
import Button from './Button';

function Product({data}) {
    return (
        <div className='w-full text-white py-10'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
                   <h1 className='text-6xl capitalize font-semibold'>{data.title}</h1>
                   <div className='w-1/3'>
                    <p className='mb-10'>{data.description}</p>
                    <div className='flex items-center gap-5'>
                        {data.live && <Button title={"show details"} />}
                        {data.case && <Button title={"case study"} />}
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Product;
