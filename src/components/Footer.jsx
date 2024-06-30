import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-black'>
            <div className='max-w-screen-xl py-10 flex flex-col md:flex-row md:gap-14 mx-auto'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-4xl md:text-8xl font-semibold leading-none tracking-tight text-white text-center md:text-left'>refokus</h1>
                </div>

                <div className='w-full md:w-1/2 flex flex-col md:flex-row md:justify-between mt-8 md:mt-0'>
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h4 className="mb-4 md:mb-10 text-white-50 capitalize">socials</h4>
                        {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                            <a key={index} className="block mt-2 capitalize text-slate-400">{item}</a>
                        ))}
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h4 className="mb-4 md:mb-10 text-white-50 capitalize">socials</h4>
                        {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                            <a key={index} className="block mt-2 capitalize text-slate-400">{item}</a>
                        ))}
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
                        <p className="text-base md:text-lg text-white text-center md:text-right">
                            Refokus is pioneering digital agency driven by design and empowered by technology.
                        </p>
                        <img className="w-24 md:w-32 mt-6 md:mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
