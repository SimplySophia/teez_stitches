import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Service/Services';
import Product from './components/Product/Product';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wedding from './assets/hero/bold.png';

const BannerData = {
  discount: '25% OFF',
  title: 'BOLD',
  date: '10 Jan to 28 Jan',
  image: Wedding,
  title2: 'Premium Suit',
  title3: 'Discount Sale',
  title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const BannerData2 = {
  discount: '25% OFF',
  title: 'BOLD',
  date: '10 Jan to 28 Jan',
  image: Wedding,
  title2: 'Premium Suit',
  title3: 'Discount Sale',
  title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  bgColor: "#2dcc6f",
};

function App() {
  const [cartItems, setCartItems] = useState([]); 
  const [view, setView] = useState('home'); 

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
    setView('cart'); 
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item, index) => index !== id));
  };

  return (
    <>
      <Navbar cartCount={cartItems.length}/>
      {view === 'home' && (
        <>
          <Hero />
          <Category />
          <Services />
          <Banner data={BannerData} />
          <Product addToCart={addToCart} /> {/* Product in home */}
          <Banner data={BannerData2} className="bg-[#2dcc6f]" />
          <Blogs />
          <Partners />
          <Footer />
        </>
      )}
      {view === 'cart' && <Cart cartItems={cartItems} setView={setView}  removeFromCart={removeFromCart}/>} 
      {view === 'product' && <Product addToCart={addToCart} />} 
      
    </>
  );
}

export default App;
