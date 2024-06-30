import React from 'react'

function Marquee({imagesurls}) {
    return (
        <div className="flex flex-col md:flex-row  md:p-2  w-full gap-14 items-center justify-center  overflow-hidden">
{imagesurls.map((url, index) => (
          <img key={index} src={url}  className="w-24 sm:w-36 md:w-48  " 
          />
        ))}
</div>
    )
}

export default Marquee
