import React from 'react'
import Product from './Product'

function Products() {
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
  return (
    <div className='mt-32'>
        {
            data.map((ele)=>{
                return  <Product data={ele} />
            })
        }
    </div>
  )
}

export default Products
