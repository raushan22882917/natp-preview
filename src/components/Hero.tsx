
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the index page
  const isIndexPage = location.pathname === "/" || location.pathname === "/index";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 50); // Consider "scrolled" when scrolled more than 50px
    };

    // Only add scroll listener if we're on the index page
    if (isIndexPage) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Initial check - force it to not be scrolled when page loads
      setIsScrolled(false);
    } else {
      // On other pages, always use the scrolled style
      setIsScrolled(true);
    }

    return () => {
      if (isIndexPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isIndexPage]);

  return (
    <section
      className={`${isIndexPage ? 'absolute top-0 left-0' : 'relative'} w-full z-0 bg-cover bg-center flex flex-col items-center justify-center text-center text-white transition-all duration-300 ${
        isIndexPage
          ? (isScrolled ? 'h-[72vh] pt-16' : 'h-[100vh] pt-16')
          : 'h-[72vh]'
      }`}
      style={{
        backgroundImage: "url('https://wtpregister.com/images/tpm/front-page-image.png')",
        backgroundColor: '#084eb3',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1 className="text-3xl font-semibold mb-6 ">Publish Your Trademark Today</h1>
      <p className="text-sm font-semibold mb-8 max-w-2xl">
        Apply now to enhance your brand visibility and protect your trademark with our expert support.
      </p>
      <div className="flex space-x-4">
        <Link to="/apply" className="bg-white text-blue-800 font-semibold px-4 py-2 hover:bg-gray-100">
          Apply Now
        </Link>
        <Link to="/services" className="border border-white text-white font-semibold px-4 py-2 hover:bg-white hover:text-blue-800 transition">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
