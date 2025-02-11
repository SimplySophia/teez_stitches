

import './App.css'
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Service/Services';

const BannerData = {
  discount: '25% OFF',
  title: 'BOLD',
  date: '10 Jan to 28 Jan',
}

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Category />
        <Services />
        <Banner />
      </div>
    </>
  )
}

export default App;
