import React from 'react'
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-red-600'/>,
    title: "Free Suit",
    description: "Free Shipping to all"
  },
  {
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-red-600'/>,
    title: "Free Suit",
    description: "Free Shipping to all"
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-red-600'/>,
    title: "Free Suit",
    description: "Free Shipping to all"
  },
  {
    id: 4,
    icon: <FaWallet className='text-4xl md:text-5xl text-red-600'/>,
    title: "Free Suit",
    description: "Free Shipping to all"
  },
]
const Services = () => {
  return (
    <div>
      <div className='container mt-14 md:mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
          {ServiceData.map((data) => (
            <div key={data} className='flex flex-col items-start sm:flex-row gap-4'>
              {data.icon}
              <div>
                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Services;