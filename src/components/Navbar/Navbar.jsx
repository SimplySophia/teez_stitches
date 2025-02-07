
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';


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

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#'
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#shop'
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#about'
  },
]

const Navbar = () => {
  return (
<div className="bg-white dark:bg-gray-100 dark:text-white transition-all duration-200 relative z-10">
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
                              className='flex justify-between items-center h-14 max-w-[1240px] mx-auto font-semibold text-gray-500 hover:text-black dark:hover:text-white md:text-lg lg:text-xl duration-200'
                              >
                              {data.name}
                              </a>
                            </li>
                          ))
                        }
                        <li className='relative cursor-pointer group'>
                          <a href='#' className='flex items-center gap-[2px] 
                            font-semibold text-gray-500
                            dark:hover:text-white py-2
                          '>
                            Quick Links
                            <span>
                              <FaCaretDown className='group-hover:rotate-180
                              duration-300' />
                            </span>
                          </a>
                          <div className='absolute z-[9999] hidden group-hover:block w-[200px] 
                           rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>

                            <ul className='space-y-2'>
                              {
                                DropdownLinks.map((data, index) => (
                                  <li key={index}>
                                    <a 
                                      className='text-gray-500 dark:hover:text-white duration-200
                                       inline-block w-full p-2 hover:bg-gray-400 rounded-md font-semibold'
                                       href={data.link}
                                    >
                                      {data.name}
                                    </a>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </li> 
                      </ul>
                  </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <div className='relative group hidden sm:block'>
                    <input type='text' placeholder='Search'
                    className='search-bar' />
                    <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-2.5 -translate-y-0.5
                    right-3 group-hover:text-[#bc6c25] duration-200'/>
                  </div>
                  <button className='relative p-3'>
                     <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                     <div className='w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center absolute top-0 right-0 text-xs'>4</div>
                  </button>
                  <div>
                    <DarkMode />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;