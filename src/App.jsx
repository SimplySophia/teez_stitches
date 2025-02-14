

import './App.css'
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Service/Services';

import Wedding from './assets/hero/bold.png';
import Product from './components/Product/Product';

const BannerData = {
  discount: '25% OFF',
  title: 'BOLD',
  date: '10 Jan to 28 Jan',
  image: Wedding,
  title2: 'Premium Suit',
  title3: 'Discount Sale',
  title4: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi nisi optio, exercitationem at porro.',
}

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Category />
        <Services />
        <Banner data={BannerData}/>
        <Product />
      </div>
    </>
  )
}

export default App;
