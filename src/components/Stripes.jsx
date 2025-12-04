import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    const data = [
        {
            text: "Awards",
            num: 10,
        },
           {
            text: "Projects",
            num: 20,
        },
           {
            text: "developers",
            num: 30,
        },
           {
            text: "client",
            num: 40,
        },
           {
            text: "users",
            num: 50,
        },
              {
            text: "users",
            num: 50,
        }

    ];
    return (
    <div className='flex items-center justify-between mt-20'>
        {
            data.map((ele,index)=>{
                return <Stripe num={ele.num} text={ele.text} />
            })
        }
    </div>
  )
}

export default Stripes;