/*import { productData } from './Products'

const ProductCard = () => {
  return (
    <div className="grid place-items-center py-20">
        <h1>
            Our Product
        </h1>
        <div>
            {productData?.map((item) => {
                return (
                    <CartItem key={item.id} item={item}/>
                )
            })}
        </div>
    </div>
  )
}

export default ProductCard;*/

import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data, addToCart }) => { 
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addToCart(item);
        navigate('/cart');
    };

    return (
        <div className='mb-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center px-12'>
                {data.map((item) => (
                    <div className='group' key={item.id}>
                        <div className='relative'>
                            <img src={item.img} alt={item.title} 
                                className='h-[280px] w-[210px] object-cover rounded-3xl dark:bg-gray-300'
                            />
                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2
                            -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm
                            justify-center items-center duration-200'>
                                <button className='bg-[#bc6c25] text-white py-2 px-2 rounded-3xl'
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold text-lg'>{item.title}</h2>
                            <h2 className='font-bold text-gray-600'>${item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
