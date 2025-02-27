
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { Link } from "react-router-dom";


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

const Navbar = ({ cartCount }) => {
  return (
<div className="bg-white dark:bg-gray-900 dark:text-white transition-all duration-200 relative z-10">
<div className=' flex justify-center'>
            <div className='container flex justify-between items-center mx-auto w-[1140px]'>
                <div className='flex justify-center items-center'>
                    <a href='#' className='text-[#bc6c25] font-semibold tracking-widest text-xl uppercase md:text-xl pl-2'>Etailor</a>
                    <div className='hidden lg:flex flex-1 justify-center'>
                      <ul className='flex justify-center items-center gap-6 ml-80'>
                        {
                          MenuLinks.map((data, index) => (
                            <li key={index}>
                              <a href={data.link} 
                              className='flex justify-center items-center h-14 max-w-[800px] mx-auto font-semibold text-gray-500 hover:text-black dark:hover:text-white md:text-sm lg:text-lg duration-200'
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
                                rounded-md bg-white dark:bg-gray-800 shadow-md p-2 dark:text-white'>

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
                    className='search-bar w-50px h-50px' />
                    <IoMdSearch className='text-lg text-gray-600 dark:text-gray-400 absolute top-2.5 -translate-y-0.5
                    right-4 group-hover:text-[#bc6c25] duration-200'/>
                  </div>
                  <Link to="/cart" className="relative">
                  <FaCartShopping className='text-2xl text-gray-600 dark:text-gray-400' />
                  {cartCount > 0 && (
                      <span className='w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center absolute -top-2 -right-2 text-xs'>
                        {cartCount}
                      </span>
                    )}
                  </Link>
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