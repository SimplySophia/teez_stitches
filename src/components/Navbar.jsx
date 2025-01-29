import React from 'react'
import { IoMdSearch } from "react-icons/io";


const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop'
  },
  {
    id: 3,
    name: 'About',
    link: '/#about'
  },
  {
    id: 4,
    name: 'Blog',
    link: '/#blog'
  },
]

const Navbar = () => {
  return (
    <div className='bg-white dark:text-black duration-200 relative z-40'>
        <div className=''>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center'>
                    <a href='#' className='text-[#bc6c25] font-semibold tracking-widest text-2xl uppercase sm:text-2xl '>Etailor</a>
                    <div className='lg:block'>
                      <ul className='flex items-center gap-4'>
                        {
                          MenuLinks.map((data, index) => (
                            <li key={index}>
                              <a href={data.link} 
                              className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                              {" "}
                              {data.name}
                              </a>
                            </li>
                          ))
                        } 
                      </ul>
                  </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <div className='relative group sm:block'>
                    <input type='text' placeholder='Search'
                    className='search-bar' />
                    <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar