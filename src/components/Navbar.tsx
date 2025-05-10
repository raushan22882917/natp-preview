import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  // Check if we're on the index page
  const isIndexPage =
    location.pathname === "/" || location.pathname === "/index";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > 50); // Consider "scrolled" when scrolled more than 50px
    };

    // Only add scroll listener if we're on the index page
    if (isIndexPage) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Initial check - force navbar to be transparent initially on index page
      setIsScrolled(false);
    } else {
      // On other pages, always show the navbar with background
      setIsScrolled(true);
    }

    return () => {
      if (isIndexPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isIndexPage]);

  return (
    <nav
      className={`${
        isScrolled
          ? "sticky top-0 bg-[#005ea2] shadow-md"
          : "absolute top-0 left-0 bg-transparent"
      } z-50 w-full py-4 px-6 md:py-[50px] md:px-12 font-inter transition-all duration-300`}>
      <div className="max-w-[90vw] mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <img src="/images/mainLogo.svg" className="w-44 h-55" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-16 items-center">
          <Link
            to="/about"
            className="text-white hover:text-white/80 transition-colors duration-200 text-xl font-medium
            ">
            About Us
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Custom trigger without the dropdown icon */}
                <NavigationMenuPrimitive.Trigger className="text-white hover:text-white/80 transition-colors duration-200 text-xl font-medium">
                  Services
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuContent className="mt-0 p-0">
                  <div className="flex flex-col w-30 shadow-lg">
                    <Link
                      to="/services"
                      className="block px-4 py-3 bg-[#005ea2] hover:bg-[#2365c8] text-center text-base text-white font-medium border-b border-white">
                      Overview
                    </Link>
                    <Link
                      to="/services/publication"
                      className="block px-4 py-3 bg-[#005ea2] hover:bg-[#2365c8] text-center text-base text-white font-medium border-b border-white">
                      Publication
                    </Link>
                    <Link
                      to="/services/article"
                      className="block px-4 py-3 bg-[#005ea2] hover:bg-[#2365c8] text-center text-base text-white font-medium border-b border-white">
                      Article
                    </Link>
                    <Link
                      to="/services/seo"
                      className="block px-4 py-3 bg-[#005ea2] hover:bg-[#2365c8] text-center text-base text-white font-medium">
                      SEO
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/search"
            className="text-white text-xl hover:text-white/80 transition-colors duration-200 font-semibold">
            Database
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-white/80 font-medium transition-colors duration-200">
            Contact Us
          </Link>
          {/* <Link
            to="/terms"
            className="text-white hover:text-white/80 transition-colors duration-200 text-xl font-medium"

          >
            Terms and Conditions
          </Link> */}
          <Link
            to="/apply"
            className={`font-medium px-5 py-2 text-xl transition-all duration-200 hover:shadow-md ${
              isScrolled
                ? "bg-white text-[#005ea2]" // On scroll
                : "bg-transparent text-white" // Before scroll
            }`}>
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-white p-2 focus:outline-none">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[80%] bg-[#005ea2] text-[#f0f0f0] p-0 border-none">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link
                  to="/"
                  className="text-[#f0f0f0] text-xl font-bold"
                  onClick={() => setIsMenuOpen(false)}>
                  <img src="/images/mainLogo.svg" className="w-20" alt="Logo" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#f0f0f0] p-2 focus:outline-none">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <Link
                  to="/about"
                  className="text-[#f0f0f0] hover:text-[#f0f0f0]/80 font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>

                <div className="flex flex-col gap-3">
                  <p className="text-[#f0f0f0] font-medium text-xl mb-2">
                    Services
                  </p>
                  <div className="flex flex-col w-full max-w-[200px]">
                    <Link
                      to="/services"
                      className="block px-4 py-3 bg-[#005ea2] text-center text-base text-white font-medium border-b border-[#1a4c96]"
                      onClick={() => setIsMenuOpen(false)}>
                      Overview
                    </Link>
                    <Link
                      to="/services/publication"
                      className="block px-4 py-3 bg-[#005ea2] text-center text-base text-white font-medium border-b border-[#1a4c96]"
                      onClick={() => setIsMenuOpen(false)}>
                      Publication
                    </Link>
                    <Link
                      to="/services/article"
                      className="block px-4 py-3 bg-[#005ea2] text-center text-base text-white font-medium border-b border-[#1a4c96]"
                      onClick={() => setIsMenuOpen(false)}>
                      Article
                    </Link>
                    <Link
                      to="/services/seo"
                      className="block px-4 py-3 bg-[#005ea2] text-center text-base text-white font-medium"
                      onClick={() => setIsMenuOpen(false)}>
                      SEO
                    </Link>
                  </div>
                </div>

                <Link
                  to="/search"
                  className="text-[#f0f0f0] hover:text-[#f0f0f0]/80 font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}>
                  Database
                </Link>
                <Link
                  to="/contact"
                  className="text-[#f0f0f0] hover:text-[#f0f0f0]/80 font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
                {/* <Link
                  to="/terms"
                  className="text-[#f0f0f0] hover:text-[#f0f0f0]/80 font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms and Conditions
                </Link> */}

                <Link
                  to="/apply"
                  className="bg-white text-[#005ea2]  text-center px-5 py-3 mt-4 font-medium"
                  onClick={() => setIsMenuOpen(false)}>
                  Apply Now
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
