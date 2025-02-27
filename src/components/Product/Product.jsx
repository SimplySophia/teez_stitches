/*export const suits = [
    {
        id: 1,
        image: Img1,
        title: "Suit",
        price: "220",
        aosDelay: "S001",
        inCart: false,
    },
    {
        id: 2,
        image: Img2,
        title: "Suit",
        price: "180",
        aosDelay: "S002",
        inCart: false,
    },
    {
        id: 3,
        image: Img3,
        title: "Suit",
        price: "245",
        aosDelay: "S003",
        inCart: false,
    },
    {
        id: 4,
        image: Img4,
        title: "Suit",
        price: "225",
        aosDelay: "S004",
        inCart: false,
    },
    {
        id: 5,
        image: Img5,
        title: "Suit",
        price: "120",
        aosDelay: "S005",
        inCart: false,
    },
    {
        id: 6,
        image: Img6,
        title: "Suit",
        price: "130",
        aosDelay: "S006",
        inCart: false,
    },
    {
        id: 7,
        image: Img7,
        title: "Suit",
        price: "120",
        aosDelay: "S007",
        inCart: false,
    },
    {
        id: 8,
        image: Img8,
        title: "Suit",
        price: "120",
        aosDelay: "S008",
        inCart: false,
    },
]
export const productData = [...suits];*/
import { useState } from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import Img1 from '../../assets/product/Suit.png';
import Img2 from '../../assets/product/suit2.png';
import Img3 from '../../assets/product/suit3.png';
import Img4 from '../../assets/product/suit4.png';
import Img5 from '../../assets/product/trouser.png';
import Img6 from '../../assets/product/trouser2.png';
import Img7 from '../../assets/product/trouser3.png';
import Img8 from '../../assets/product/overshirt.png';

const Product = ({ addToCart }) => {
    const ProductData = [
        { id: 1, img: Img1, title: "Suit", price: "220" },
        { id: 2, img: Img2, title: "Suit", price: "180" },
        { id: 3, img: Img3, title: "Suit", price: "245" },
        { id: 4, img: Img4, title: "Suit", price: "225" },
        { id: 5, img: Img5, title: "Trouser", price: "120" },
        { id: 6, img: Img6, title: "Trouser", price: "130" },
        { id: 7, img: Img7, title: "Trouser", price: "120" },
        { id: 8, img: Img8, title: "Overshirt", price: "120" },
    ];

    return (
        <div className="container">
            <Heading title="Our Product" subtitle="Explore Our Products" />
            <ProductCard data={ProductData} addToCart={addToCart} />
        </div>
    );
};

export default Product;
