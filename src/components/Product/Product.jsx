import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

import Img1 from '../../assets/product/Suit.png';
import Img2 from '../../assets/product/suit2.png';
import Img3 from '../../assets/product/suit3.png'
import Img4 from '../../assets/product/suit4.png'
import Img5 from '../../assets/product/trouser.png'
import Img6 from '../../assets/product/trouser2.png'
import Img7 from '../../assets/product/trouser3.png'
import Img8 from '../../assets/product/overshirt.png'


const Product = () => {
    const ProductData = [
        {
            id: 1,
            img: Img1,
            title: "Suit",
            price: "220",
            aosDelay: "0"
        },
        {
            id: 2,
            img: Img2,
            title: "Suit",
            price: "180",
            aosDelay: "0"
        },
        {
            id: 3,
            img: Img3,
            title: "Suit",
            price: "245",
            aosDelay: "0"
        },
        {
            id: 4,
            img: Img4,
            title: "Suit",
            price: "225",
            aosDelay: "0"
        },
        {
            id: 5,
            img: Img5,
            title: "Suit",
            price: "120",
            aosDelay: "0"
        },
        {
            id: 6,
            img: Img6,
            title: "Suit",
            price: "130",
            aosDelay: "0"
        },
        {
            id: 7,
            img: Img7,
            title: "Suit",
            price: "120",
            aosDelay: "0"
        },
        {
            id: 8,
            img: Img8,
            title: "Suit",
            price: "120",
            aosDelay: "0"
        },
    ]

    return (
    <div>
        <div className='container'>
        <Heading title="Our Product" subtitle={"Explore Our Products"}/>
        <ProductCard data={ProductData} />
        </div>
    </div>
  )
}

export default Product;
