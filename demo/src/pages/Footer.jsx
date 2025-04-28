import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            {/* Subscription Area */}
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-center text-3xl font-medium mb-8">Subscrible & Get 10% Discount</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="border border-gray-600 flex items-center p-3">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </span>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-grow bg-transparent outline-none"
                        />
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Main Content */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* CONTACT US */}
                <div>
                    <h3 className="font-bold mb-6 text-lg">CONTACT US</h3>
                    <div className="mb-4">
                        <img src="/api/placeholder/150/50" alt="Bunch Logo" className="mb-4" />
                        <p className="mb-1">Email: clientcare@bunch.com</p>
                        <p className="mb-1">Phone: 1.888.838.3022</p>
                        <p className="mb-1">Hours: Monday – Thursday: 9AM – 7PM ET,</p>
                        <p>Friday: 9AM – 2PM ET</p>
                    </div>
                </div>

                {/* COLLECTIONS */}
                <div>
                    <h3 className="font-bold mb-6 text-lg">COLLECTIONS</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Acne Care</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Basic care</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">BLAZERS</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Bundles</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Extra Care</a></li>
                    </ul>
                </div>

                {/* FOOTER MENU */}
                <div>
                    <h3 className="font-bold mb-6 text-lg">FOOTER MENU</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Search</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Returns</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300 text-orange-400 border-b border-orange-400">Site Map</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Brands</a></li>
                    </ul>
                </div>

                {/* INFORMATION */}
                <div>
                    <h3 className="font-bold mb-6 text-lg">INFORMATION</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">My Account</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Order History</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Wishlist</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Specials</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Press</a></li>
                    </ul>
                </div>

                {/* OFFICE TIMING */}
                <div>
                    <h3 className="font-bold mb-6 text-lg">OFFICE TIMING</h3>
                    <ul>
                        <li className="mb-2">Mon – Fri: 10 AM – 7 PM</li>
                        <li className="mb-2">Sat: 11 AM – 5 PM</li>
                        <li className="mb-2">Sun: Closed</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Area */}
            <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center">
                {/* Country/Language Selector */}
                <div className="flex space-x-4 mb-6 md:mb-0">
                    <button className="border border-gray-600 px-3 py-1 flex items-center text-sm">
                        <span className="mr-2">🇦🇺</span>
                        Australia (AUD $)
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </button>

                    <button className="border border-gray-600 px-3 py-1 flex items-center text-sm">
                        English
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Payment Methods */}
                <div className="flex space-x-2">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAfCAMAAACF8f6iAAAAdVBMVEX///8UNMsAJMkAKspca9YALMoAJskAD8cIL8oAIMgAHcioreYAFMextumiqOUAAMaMlN9GV9G+wuxLXNLv8Pp7hdxlctf6+/7Cxu3f4fbm6PiVnOLO0fHV1/PZ3PSco+RWZtU5TdCBit0tRM5vetkfOswnP839FUl8AAAB00lEQVQ4je1TW4KDIAwkIIKIj/q2rda27t7/iJsE63KE/dj5aIlJJiQThPjHn8KjbbcEkQfzjkY7ihZ/ZzS7R+uMf/YLO+chSbbikzlOQ6W1ria2EqnlIGajtSFWk1oAsL5kp1RayySqelUAqqZT5wH8IgoJ9iLEDS0rM6n8Ss4iQxJQ8X1rBbbli6dgn0L0ioi6CkBfiql4GY56UnXw1yjx7vADHdCRYRNvC1nDFexv0Oopjxy/GH1gmpAgPc2HxLD7GbQrJJVHTx+0XEJsGtI6XEAjDZXwfRdCsH27jebo6RQlhfTGTfmOLT3g10tKwzCPTwhyf2GFOHFxSCduR8KgQbIAiad5uI3OOHk30n39HGc6mrNlLQT9u9Db9E0SONyOxoHqBQklizgxwSI5qvcmWbG3ajwcJVJSWxcLab6uNJ0+TsQkOLQQTRYIAlBTlHamQaXOYVjkQ8xBJElnXAdibXhdSHa1U/qJ8zYMzevEGuGtqI/WfO2vXWHDZiFlrSHIs/8DO1F61swATw5DtCI+/xJlWF4RplPGiYWR0vHmL5WUuJzXKsPHoJWj6lkmTXh4c3WEfdCVeV6yQiueaEZdU+/JXtNzu5Lz2CA85uIffws/lusXjWNFJpAAAAAASUVORK5CYII=" alt="Visa" className="h-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-8" />
                    <img src="https://www.americanexpress.com/content/dam/amex/en-in/business/payments/plat.jpg" alt="American Express" className="h-8" />
                    <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="PayPal" className="h-8" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1B-1JkRKA-oFZRv7PWAZkSuvaoKAvvRYkXA&s" alt="Diners Club" className="h-8" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKf6XVhj_dPntSJdjA7DbFF4qe8IeDu7OtGw&s" alt="UPI" className="h-8 rounded-full bg-green-500" />
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto px-4 mt-8 text-center">
                <p>© 2024 - Bunch. All rights reserved.</p>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth", // very smooth scroll
                        });
                    }}
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
            </div>

        </footer>
    );
}