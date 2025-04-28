import React, { useState, useEffect } from 'react';
import ShopByCategories from '../pages/ShopByCategories';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Outerwear'); // Default category
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const products = [
    {
      id: 1,
      name: 'Rocky Leather Bomber',
      brand: 'OVAL-SQUARE.COM',
      price: 380.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20643-6013_11.jpg?v=1729661049',
      category: 'Outerwear'
    },
    {
      id: 2,
      name: 'OSLuxury Pants',
      brand: 'OVAL-SQUARE.COM',
      price: 67.60,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/15167-1003_11.jpg?v=1729660985',
      category: 'Outerwear'
    },
    {
      id: 3,
      name: 'Faye Zip Knit',
      brand: 'OVAL-SQUARE.COM',
      price: 129.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20868-6001_11.jpg?v=1729661004',
      category: 'Outerwear'
    },
    {
      id: 4,
      name: 'Frost Half Zip Knit',
      brand: 'OVAL-SQUARE.COM',
      price: 155.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20828-8001_11.jpg?v=1729660805&width=1680',
      category: 'Outerwear'
    },
    {
      id: 5,
      name: 'Active Leggings',
      brand: 'OVAL-SQUARE.COM',
      price: 85.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20776-3003_11.jpg?v=1729660815',
      category: 'Activewear'
    },
    {
      id: 6,
      name: 'Performance Top',
      brand: 'OVAL-SQUARE.COM',
      price: 75.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20787-7002_11.jpg?v=1729660932',
      category: 'Activewear'
    },
    {
      id: 7,
      name: 'Classic Shirt',
      brand: 'OVAL-SQUARE.COM',
      price: 110.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20389-6017_11.jpg?v=1729660867&width=1680',
      category: 'Shirts & Tops'
    },
    {
      id: 8,
      name: 'Essential Tee',
      brand: 'OVAL-SQUARE.COM',
      price: 65.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20824-8001_11.jpg?v=1729660849&width=1680',
      category: 'Shirts & Tops'
    },
    {
      id: 9,
      name: 'Snowy Knit Anorak',
      brand: 'OVAL-SQUARE.COM',
      price: 195.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20829-6017_11.jpg?v=1729660787',
      category: 'Shirts & Tops'
    },
    {
      id: 10,
      name: 'Snowy Knit Anorak',
      brand: 'OVAL-SQUARE.COM',
      price: 195.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20829-1002_11.jpg?v=1729660796&width=1680',
      category: 'Shirts & Tops'
    },
    {
      id: 10,
      name: 'Drive Jeans 0110',
      brand: 'OVAL-SQUARE.COM',
      price: 145.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20867-8011_11.jpg?v=1729660824&width=1680',
      category: 'Shirts & Tops'
    },
    {
      id: 10,
      name: 'Night Dress',
      brand: 'OVAL-SQUARE.COM',
      price: 145.00,
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/20822-8001_11.jpg?v=1729660859&width=1680',
      category: 'Shirts & Tops'
    },
  ];
  const filteredProducts = products.filter(product => product.category === activeCategory);
  const categories = ['Outerwear', 'Activewear', 'Shirts & Tops'];

  const slides = [
    {
      title: "PRE SPRING 25 COLLECTION",
      heading: "New In Leather",
      description: "Designed in our London atelier with our signature attention to detail, passion for immaculate fit and on-trend styling.",
      bgImage: "https://qx-aarau.myshopify.com/cdn/shop/files/slide2_1.webp?v=1729755684&width=1500"
    },
    {
      title: "SUMMER ESSENTIALS",
      heading: "Perfect Vacation Pieces",
      description: "Curated collection of lightweight styles designed for comfort and elegance on your summer getaways.",
      bgImage: "https://qx-aarau.myshopify.com/cdn/shop/files/Talisman_on_model.webp?v=1729662186&width=1500"
    },
    {
      title: "LIMITED EDITION",
      heading: "Exclusive Accessories",
      description: "Hand-crafted pieces with premium materials, available for a limited time only.",
      bgImage: "https://qx-aarau.myshopify.com/cdn/shop/files/bg-filler1.jpg?v=1737616814&width=1500"
    }
  ];


  const renderStarRating = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <svg 
            key={star} 
            className="w-4 h-4 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        ))}
      </div>
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(true);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(true);
    }, 300);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === '1') {
//       setIsAuthenticated(true);
//       setError('');
//     } else {
//       setError('Incorrect password. Please try again.');
//     }
//   };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Made responsive */}
 

      {/* Hero Slider - Responsive adjustments */}
      <div className="relative h-screen overflow-hidden pt-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.bgImage}
                alt={slide.heading}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div
                  className={`w-full md:w-2/3 lg:w-1/2 text-white transition-all duration-700 ease-out ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm tracking-widest mb-2">{slide.title}</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    {slide.heading}
                  </h2>
                  <p className="mb-6 sm:mb-8 text-base sm:text-lg opacity-90">{slide.description}</p>
                  <button className="bg-white text-amber-800 px-6 sm:px-8 py-2 sm:py-3 font-medium tracking-wider uppercase text-xs sm:text-sm hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 text-white z-20 transition-all hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 text-white z-20 transition-all hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Promotional Grid - Responsive adjustments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7 p-4 sm:p-6 md:p-12 lg:p-20">
        <div className="relative group overflow-hidden h-100 sm:h-74 md:h-130">
          <img
            className="h-full w-full object-cover transition duration-800 group-hover:scale-110"
            src="https://qx-aarau.myshopify.com/cdn/shop/files/e1.jpg?v=1729757032"
            alt="20% Off"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">20% Off</h3>
            <button className="text-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base font-medium hover:text-white border-b-2 border-transparent hover:border-white transition-colors duration-300">
              SHOP COLLECTION
            </button>
          </div>
        </div>

        <div className="relative group overflow-hidden h-100 sm:h-74 md:h-130">
          <img
            className="h-full w-full object-cover transition duration-800 group-hover:scale-110"
            src="https://qx-aarau.myshopify.com/cdn/shop/files/e4.jpg?v=1729757031"
            alt="New Arrivals"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Discounts Up to</h3>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">New Arrivals</h3>
          </div>
        </div>

        <div className="relative group overflow-hidden h-100 sm:h-74 md:h-130">
          <img
            className="h-full w-full object-cover transition duration-800 group-hover:scale-110"
            src="https://qx-aarau.myshopify.com/cdn/shop/files/e2.jpg?v=1729757032"
            alt="10% Off"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10%</h3>
            <p className="text-base sm:text-lg mb-2 sm:mb-4">Available Now</p>
            <button className="text-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base font-medium hover:text-white border-b-2 border-transparent hover:border-white transition-colors duration-300 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <section className="py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">STAY AHEAD OF THE FASHION CURVE</p>
        <h2 className="text-4xl font-light mb-8">Trendsetter's Picks</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 text-sm font-medium focus:outline-none ${
                activeCategory === category
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-black'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto gap-6 no-scrollbar md:mx-25 py-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="min-w-[300px] group">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[450px] object-cover object-center"
                />
                {/* Quick view overlay - appears on hover */}
                <div className="absolute inset-0 bg-black-200 bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-black px-4 py-2 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs uppercase mb-1">{product.brand}</p>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex justify-center mb-2">
                  {renderStarRating()}
                </div>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 focus:outline-none z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 focus:outline-none z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-2 h-2 rounded-full bg-black"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
      </div>
    </section>
        <ShopByCategories/>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

    {/* New Arrivals Section */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-2">New Arrivals</h2>
        <p className="text-center text-gray-500 mb-10">Preorder now to receive exclusive deals & gifts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[600px] object-cover object-center bg-gray-100"
                />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-xs uppercase mb-1">{product.brand}</p>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex mb-2">{renderStarRating()}</div>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  

    {/* On the Blog Section */}
    {/* <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Blog" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-72 md:h-96" />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">On the Blog</h2>
          <p className="text-gray-600 mb-6">Check Out Our Blog - The Chain<br/>नए फैशन ट्रेंड्स, स्टाइल टिप्स और एक्सक्लूसिव स्टोरीज के लिए पढ़ें!</p>
          <a href="#" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors">Read The Blog</a>
        </div>
      </div>
    </section> */}

    </div>
  );
}