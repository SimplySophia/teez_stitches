import React from 'react'

const ProductCard = ({ data }) => {
  return (
    <div className='mb-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-4 place-items-center px-12'>
            {
                data.map((data) => (
                    <div className='group' key={data.id}>
                        <div className='relative'>
                            <img src={data.img} alt='' 
                                className='h-[280px] w-[210px] object-cover
                                rounded-3xl dark:bg-gray-300'
                            />
                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2
                            -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm
                            justify-center items-center duration-200'>
                                <button className='bg-[#bc6c25] text-white py-2 px-2 rounded-3xl'>Add to cart</button>
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCard;

