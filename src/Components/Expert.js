import React from 'react'
import laptop from '../assets/img/solution-img.png';

export default function Expert() {
    return (
        <div className='max-w-[1240px] mx-auto my-[10px]  md:grid grid-cols-3 p-[50px]'>
            <div className="h-[200px] col-span-1 md:w-[70%]">
                <img src={laptop} alt="" className='w-[100%] text-center' />
            </div>
            <div className=" h-[300px] md:h-[200px] col-span-2 flex flex-col justify-center ">
                <h1 className='text-yellow-950 font-bold my-2'>
                    LEARN FROM EXPERTS
                    </h1>
                <p className='my-2 text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                <button className='md:w-[20%] bg-[black] text-white py-2 px-6 rounded my-2'>Get Started</button>
            </div>
        </div>
    )
}
