import React from 'react'


const Banner = ({ data }) => {
  return (
    <div className='min-h[550px] flex justify-center items-center py-12'>
        <div className='container bg-[#bc6b25]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 
              items-center text-white rounded-3xl'>
                <div className='flex flex-col p-6 sm:p-8 gap-4'>
                    <p className='font-bold text-xl'>{data.discount}</p>
                    <h1 className='text-4xl lg:text-7xl uppercase font-bold'>
                        {" "}
                       {data.title}
                    </h1>
                    <p className='text-xl'>{data.date}</p>
                </div>
                <div className='h-full flex items-center'>
                    <img 
                        src={data.image} 
                        alt='' 
                        className='scale-105 w-[220px] md:w-[320px] mx-auto
                        drop-shadow-2xl object-cover'
                    />
                </div>
                <div className='flex flex-col justify-center items-start gap-4
                p-6 sm:p-8'>
                    <p className='font-bold text-xl'>{data.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p className='text-sm tracking-wide leading-5 text-start'>{data.title4}</p>
                    <button className='bg-white text-[#bc6b25] py-2 px-4 rounded-full dark:hover:bg-[#e9b88d] dark:hover:text-white'>Shop Now</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Banner;