import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-serif">Ranveersinh Rajput</h3>
            <p className="text-gray-400 text-base md:text-lg font-medium font-sans">Full Stack Developer</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p className="text-xs md:text-sm tracking-wider font-light">&copy; {currentYear} Ranveersinh Rajput. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 