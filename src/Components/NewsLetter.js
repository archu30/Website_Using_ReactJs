import React from 'react'

export default function NewsLetter() {
    return (
        <div className='p-4 bg-sky-600'>
            <div className="max-w-[1240px]  mx-auto md:flex justify-between py-[50px]">
                <div className="m-2">
                    <h1 className='text-{20px}  md:text-[30px] text-white font-bold'>Want To Learn Latest I.T skills. </h1>
                    <span className='text-white'>Sign up to our newsletter and stay up to date </span>
                </div>
                <div className="m-2">
                    <input type="text" className='mb-2 md:mx-2 py-2 px-6 rounded' placeholder='Your Email' />
                    <button className='bg-[black] text-white py-2 px-6 mb-2 rounded font-normal'>Notify Me</button>
                    <br />
                    <span className='md:p-2 text-white'>
                        we care about the productionof your data. Read our privacy policy.
                    </span>
                </div>
            </div>
        </div>
    )
}
