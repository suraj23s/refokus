import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const data = [
        [
        "https://www.svgrepo.com/show/303121/forbes-logo.svg",
        "https://www.svgrepo.com/show/303140/instagram-logo.svg",
        "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
        "https://www.svgrepo.com/show/303152/tinder-1-logo.svg",
        "https://www.svgrepo.com/show/303172/linkedin-logo.svg",
        "https://www.svgrepo.com/show/303257/paypal-logo.svg",
          "https://www.svgrepo.com/show/303121/forbes-logo.svg",
        "https://www.svgrepo.com/show/303140/instagram-logo.svg",
        "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
        "https://www.svgrepo.com/show/303152/tinder-1-logo.svg",
        "https://www.svgrepo.com/show/303172/linkedin-logo.svg",
        "https://www.svgrepo.com/show/303257/paypal-logo.svg"
        ],
        [
        "https://www.svgrepo.com/show/303140/instagram-logo.svg",
             "https://www.svgrepo.com/show/303257/paypal-logo.svg",
        "https://www.svgrepo.com/show/303121/forbes-logo.svg",
        "https://www.svgrepo.com/show/303140/instagram-logo.svg",
        "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
           "https://www.svgrepo.com/show/303121/forbes-logo.svg",
        "https://www.svgrepo.com/show/303257/paypal-logo.svg",
        "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
        "https://www.svgrepo.com/show/303152/tinder-1-logo.svg",
         "https://www.svgrepo.com/show/303152/tinder-1-logo.svg",
        "https://www.svgrepo.com/show/303172/linkedin-logo.svg",
        "https://www.svgrepo.com/show/303172/linkedin-logo.svg",
        ]
    ];
  return (
    <div className='py-20 mt-12 w-full overflow-hidden relative'>
        {
            data.map((items,index)=>{
                return  <Marquee direction={index=== 0 ? "left": "right"} data = {items} />
            })
}
    </div>
  )
}

export default Marquees
