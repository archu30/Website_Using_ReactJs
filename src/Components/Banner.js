import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
    return (
        <div className='bg-cyan-300 w-full py-[130px]' >
            <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
                <div className='text-xl md:text-3xl md:p-[24px]'>
                    Learn with Us
                </div>
                <div className='text-white text-3xl md:text-[70px] md:p-[24px]'>
                    Grow With Us
                </div>
                <div className='text-2xl mb-3 md:text-[40px] text-red-950 md:p-[24px]'>
                    Learn <ReactTyped strings={["Web Development", "Frontend Development", "Backend Development"]} typeSpeed={100} loop={true} backSpeed={120} />
                </div>
                <button className='bg-[black] text-white py-2 px-6 rounded font-normal'>Get Started</button>
            </div>
        </div>
    )
}

