
import Slider from "react-slick";
import Image1 from '../../assets/hero/bg-image1.png';
import Image2 from '../../assets/hero/bg-image2.png';
import Image3 from '../../assets/hero/bg-image3.png';

const HeroData = [
    { id: 1, img: Image1, subtitle: 'Stylish Suit', title: 'Men’s Fashion' },
    { id: 2, img: Image2, subtitle: 'Classic Look', title: 'Elegant Menswear' },
    { id: 3, img: Image3, subtitle: 'Modern Fit', title: 'Trending Styles' }
];

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="w-full">
            <div className="h-screen">
                <Slider {...settings}>
                    {HeroData.map((data) => (
                        <div key={data.id} className="relative h-screen w-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${data.img})` }}
                            ></div>

                            {/* Overlay (Optional: Add if you need better text readability) */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                                <h1 className="text-2xl sm:text-4xl font-bold">{data.subtitle}</h1>
                                <h2 className="text-3xl sm:text-6xl font-extrabold">{data.title}</h2>
                                <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-lg">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
