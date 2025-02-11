import Image1 from '../../assets/Category/image1.png';
import Image2 from '../../assets/Category/image2.png';
import Image3 from '../../assets/Category/image3.png';
import Image4 from '../../assets/Category/image4.png';
import Image5 from '../../assets/Category/image5.png';


const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <h1 className='text-gray-400 text-3xl text-center mb-2'>Category</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Timeless Elegance</p>
                <p className='text-2xl font-semibold mb-[2px]'>Bold</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-20'>Premium Suits</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Browse</button>
              </div>
            </div>
            <img src={Image1} alt='' className='w-[320px] h-[320px] absolute top-0 left-16' />
          </div>

          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-[#bc6c25]/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className=''>
                <p className='text-gray-400'>Casual Charm</p>
                <p className='text-2xl font-bold mb-[2px]'>Daring</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-20'>Premium Suits</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Explore</button>
              </div>
            </div>
            <img src={Image2} alt='' className='w-[320px] h-[320px] absolute top-0 left-16' />
          </div>

          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90
           to-[#bc6c25]/40 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Effortless Style</p>
                <p className='text-2xl font-bold mb-[2px]'>Elegant</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Refined Style</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Explore</button>
              </div>
            </div>
            <img src={Image4} alt='' className='w-[320px] h-[320px] absolute top-0 right-0' />
          </div>

          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90
           to-[#bc6c25]/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Executive Fit</p>
                <p className='text-2xl font-bold mb-[2px]'>Unique</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20'>Refined Style</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Explore</button>
              </div>
            </div>
            <img src={Image5} alt='' className='w-[320px] h-[320px] absolute top-0 right-0' />
          </div>

          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-[#bc6c25]/20 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Power suit</p>
                <p className='text-2xl font-bold mb-[2px]'>Smart</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-20'>Refined Style</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Explore</button>
              </div>
            </div>
            <img src={Image2} alt='' className='w-[320px] h-[320px] absolute top-0 left-14' />
          </div>

          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-[#bc6c25]/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Tailored Perfect</p>
                <p className='text-2xl font-bold mb-[2px]'>Stylish</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-20'>Refined Style</p>
                <button className='bg-[#bc6c25] text-white px-3 py-1 mt-4 rounded-full text-sm'>Explore</button>
              </div>
            </div>
            <img src={Image3} alt='' className='w-[320px] h-[320px] absolute top-0 left-14' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;