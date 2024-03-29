import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Icon_hacker.png';
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src={imageUrl} alt="Logo" className="h-8 mr-2" />
            <a href="/" className="text-white font-bold text-xl">WhiteHat News</a>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Agriculture</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Politics</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Business</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              {/* Search Input */}
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button type="submit" className="ml-2 px-3 py-2 bg-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300">Search</button>
              </form>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state. */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Agriculture</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Politics</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Business</a>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign Up</a>     
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button type="submit" className="ml-2 px-3 py-2 bg-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
