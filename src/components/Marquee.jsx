import React from 'react'

function Marquee({ data }) {
  return (
    <div className="w-full flex gap-20 whitespace-nowrap overflow-hidden">
      {data.map((item, index) => (
        <img
          key={index}
          src={item}
          alt=""
          className="h-30"
        //   style={{
        //     width: "100px",
        //     height: "auto",   // LET IMAGE KEEP ITS NATURAL RATIO
        //     filter: "invert(53%) sepia(5%) saturate(100%) hue-rotate(180deg) brightness(90%) contrast(90%)"
        //   }}
        />
      ))}
    </div>
  );
}


export default Marquee
