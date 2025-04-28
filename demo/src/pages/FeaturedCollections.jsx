import React from 'react';

export default function BlogSection() {
  // Sample blog post data
  const featuredPost = {
    id: 1,
    title: "10 Proven Ways To Increase Skin Brightness",
    date: "Oct 10 2024",
    comments: 0,
    image: "https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/647ed9ff93f4e581e9584a7d_tgb_1.webp",
  };

  const recentPosts = [
    {
      id: 2,
      title: "Why Choose SPF For Pore And Acne Care",
      date: "Oct 09 2024",
      comments: 0,
      image: "https://qx-aarau.myshopify.com/cdn/shop/articles/2000x2000_10.webp?v=1728462160",
    },
    {
      id: 3,
      title: "Niacinamide: The Ultimate Cheat Sheet",
      date: "Oct 09 2024",
      comments: 0,
      image: "https://qx-aarau.myshopify.com/cdn/shop/articles/2000x2000_5.webp?v=1728462118",
    },
    {
      id: 4,
      title: "The Ultimate Guide To Understanding Your Skin Microbiome",
      date: "Oct 09 2024",
      comments: 0,
      image: "https://qx-aarau.myshopify.com/cdn/shop/articles/2000x2000_3.webp?v=1728462078",
    },
  ];

  return (
    <>
    <div className="py-8 sm:py-12 md:py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">On The Blog</h2>
        <p className="text-sm md:text-base text-gray-600">Check Out Our Blog - The Chain</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Featured Blog Post (Larger) */}
        <div className="lg:col-span-1 relative group overflow-hidden  shadow-sm">
          <div className="h-100 sm:h-80 md:h-96 lg:h-full">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <div className="flex items-center space-x-2 text-xs sm:text-sm mb-1 sm:mb-2 opacity-90">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.comments} comments</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium">{featuredPost.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Blog Posts List (Smaller) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-full sm:w-32 md:w-40 h-90 md:h-40 flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover  shadow-sm"
                />
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-1">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* Preorder Banner Section */}
      <section className="py-12 bg-amber-50 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-2">Preorder now to receive exclusive deals & gifts</h3>
      </div>
    </section>
    </>
  );
}