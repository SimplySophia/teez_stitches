import React from 'react'
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/#home",
    },
    {
        title: "Shop",
        link: "/#shop",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]
const Footer = () => {
  return (
    <div className=''>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                <div className='py-8 px-4'>
                <a 
                    href='#' 
                    className='text-[#bc6c25] font-semibold tracking-widest text-2xl uppercase sm:text-xl '
                >
                    Etailor
                </a>
                <p className='text-gray-600 lg:pr-23 pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum, nisi nemo quibusdam incidunt quo.</p>
                <p className='text-gray-500 mt-4'>Made with love by Sophia</p>
                </div>
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-right mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                           href={data.link}
                                           className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-right mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                           href={data.link}
                                           className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>PortHarcourt, Riverstate</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt />
                                <p>+234-906583196</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;
