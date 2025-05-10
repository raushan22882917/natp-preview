import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the index page
  const isIndexPage =
    location.pathname === "/" || location.pathname === "/index";

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
      className={`${
        "relative"
      } w-full z-0 bg-cover bg-center flex flex-col items-center justify-center text-center text-white transition-all duration-300 ${
        isIndexPage
          ? isScrolled
            ? "h-[72vh] pt-20"
            : "h-[100vh] pt-20"
          : "h-[72vh]"
      }`}
      style={{
        backgroundImage:
          "url('https://wtpregister.com/images/tpm/front-page-image.png')",
        backgroundColor: "#005ea2",
        backgroundBlendMode: "overlay",
      }}>
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight">
        Initiate Your Trademark Publication Today
        </h1>
        <p className="text-base md:text-[16px] font-medium mb-10">
        Apply now to boost visibility and safeguard your brand with expert support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/apply"
            className="bg-white text-[#005ea2] font-semibold px-4 py-3 w-32 text-center hover:bg-gray-100 transition shadow-xl">
            Apply Now
          </Link>
          <Link
            to="/services"
            className="border border-white text-white font-semibold px-4 py-3 w-32 text-center shadow-xl">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
