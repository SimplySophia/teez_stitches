import React from 'react';
import Heading from '../Shared/Heading';

import Img1 from "../../assets/Blogs/blog1.png"
import Img2 from "../../assets/Blogs/blog2.png"
import Img3 from "../../assets/Blogs/blog3.png"

const Blogs = () => {

    const BlogData = [
        {
            title: "How To Choose Perfect Suit For Your Wedding",
            subtitle: 
            "lorem ipsum dolor sit amet consectetur adipisicing elip Ipsum aliquid necessitatibus cumque perspiciatis perferendis dolore assumenda Perferendis",
            published: "Jan 20, 2024 by Rashstitch",
            image: Img1,
        },
        {
            title: "How To Choose Perfect Suit For Your Wedding",
            subtitle: 
            "lorem ipsum dolor sit amet consectetur adipisicing elip Ipsum aliquid necessitatibus cumque perspiciatis perferendis dolore assumenda Perferendis",
            published: "Jan 20, 2024 by Rashstitch",
            image: Img2,
        },
        {
            title: "How To Choose Perfect Suit For Your Wedding",
            subtitle: 
            "lorem ipsum dolor sit amet consectetur adipisicing elip Ipsum aliquid necessitatibus cumque perspiciatis perferendis dolore assumenda Perferendis",
            published: "Jan 20, 2024 by Rashstitch",
            image: Img3,
        },
    ]
  return (
    <div className='my-12'>
        <div className='container'>
            <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {BlogData.map((data) => (
                     <div key={data.title} className='bg-white dark:bg-gray-100 rounded-b-xl'>
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img 
                               src={data.image} 
                               alt='' 
                                className='w-full h-[220px] object-cover rounded-2xl
                                hover:scale-105 duration-500'
                               />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p>{data.subtitle}</p>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs;