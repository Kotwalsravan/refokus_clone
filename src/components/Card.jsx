import React from 'react'

function Card({ width}) {
    return (
        <div className={`bg-slate-800 p-5 hover:bg-violet-500 rounded-xl ${width} min-h-[20rem] md:min-h-[30rem] flex flex-col`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className="text-lg sm:text-xl md:text-2xl">One head</h3>
                    <span className='ml-3 text-lg sm:text-xl md:text-2xl'>##</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-5">whatever heading</h1>
                <div className="down w-full mt-16 md:mt-32">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-none">
                        Start a Project
                    </h1>
                    <button className='rounded-full py-2 mt-8 px-3 border-2 border-zinc-50'>Contact Us</button>
                </div>
            </div>      
        </div>
    )
}

export default Card
