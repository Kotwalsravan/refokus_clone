import React from 'react'
import Button from './Button'

function Product({ val }) {
    return (
        <div className="flex flex-col md:flex-row justify-between text-white bg-black items-center p-4 md:p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 sm:ml-6 md:ml-7 capitalize">
                {val.title}
            </h1>
            <div className="dets w-full md:w-1/3 mt-4 md:mt-0 md:ml-6">
                <p className="mt-4 mb-3 text-base sm:text-lg md:text-xl">
                    {val.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                    {val.live && <Button title="Live Project" />}
                    {val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    );
}

export default Product
