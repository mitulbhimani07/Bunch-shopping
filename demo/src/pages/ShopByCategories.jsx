import React from 'react';

export default function FashionWebsiteSections() {
  // Define the product categories
  const categories = [
    {
      id: 1,
      name: 'Cleanser',
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/girl_with_spf_1.png?v=1728532947',
      itemCount: 8
    },
    {
      id: 2,
      name: 'Moisturizer',
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/a3.png?v=1728532947',
      itemCount: 8
    },
    {
      id: 3,
      name: 'Serum Ampoule',
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/a5_copy_2.png?v=1728532946',
      itemCount: 8
    },
    {
      id: 4,
      name: 'Sun Protection',
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/a3.png?v=1728532947',
      itemCount: 8
    },
    {
      id: 5,
      name: 'Eye Care',
      image: 'https://qx-aarau.myshopify.com/cdn/shop/files/a1.png?v=1728532945',
      itemCount: 8
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-amber-100 flex flex-col md:flex-row">

          {/* Side Text */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center transform -rotate-90 origin-center">
            <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mb-2">C</div>
            <div className="h-16 border-l border-gray-400"></div>
            <div className="text-xs tracking-widest transform rotate-180 mt-2">COMPARE</div>
            <div className="h-16 border-l border-gray-400 mt-2"></div>
            <div className="text-xs tracking-widest transform rotate-180 mt-2">GET 15% OFF</div>
          </div>
        </div>
      </section>

      {/* Shop By Categories Section */}
      <section className="py-16 px-4 bg-white">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest text-sm">COLLECTION BUNCH</p>
          <h2 className="text-4xl font-light mt-2">Shop By Categories</h2>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.itemCount} Items</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <img
              src="https://qx-aarau.myshopify.com/cdn/shop/files/bg-filler1.jpg?v=1737616814"
              alt="Collection banner"
              className="w-full mb-8"
            />
            <p className="text-gray-500 uppercase tracking-widest text-sm">Follow us on</p>
            <h2 className="text-4xl font-light mt-2">#Instagram</h2>
          </div>
        </div>
      </section>


      {/* <!-- Font Awesome CDN for Instagram Icon --> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mx-10 mb-20">
        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_11.jpg?v=1729746060&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_8.jpg?v=1729746061&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_12.jpg?v=1729746059&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_10.jpg?v=1729746061&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_9.jpg?v=1729746061&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_6.jpg?v=1729746062&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_7.jpg?v=1729746062&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>

        <div class="relative group overflow-hidden">
          <img class="h-auto max-w-full" src="https://qx-aarau.myshopify.com/cdn/shop/files/1920x1080-8_13.jpg?v=1729746059&width=535" alt="" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <i class="fab fa-instagram text-white text-4xl"></i>
          </div>
        </div>
      </div>

    </>
  );
}