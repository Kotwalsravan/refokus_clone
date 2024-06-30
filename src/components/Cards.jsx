import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className='w-full bg-black py-5'>
            <div className='max-w-screen-xl flex flex-col md:flex-row gap-5 mx-auto text-white bg-black px-4 md:px-8'>
                <Card width="basis-1/3" />
                <Card width="basis-2/3" hover="bg-violet-600" />
            </div>
        </div> 
    )
}

export default Cards
