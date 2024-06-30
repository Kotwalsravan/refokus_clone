import React from 'react'

function Stripe({ val }) {
    return (
        <div className="min-w-[10em] sm:min-w-[12em] md:min-w-[15em] stripe px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
          <img className="h-4 sm:h-5 md:h-6" src={val.url} alt="" />
          <span className="font-semibold text-base sm:text-lg md:text-xl">{val.number}</span>
        </div>
    );
}

export default Stripe
