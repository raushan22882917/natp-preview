import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2557A7] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Main footer content */}
        <div className="flex justify-between mb-16">
          {/* Logo and contact section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <img src="/images/Logo.png" alt="WTP Logo" className="w-24 h-auto" />
            </div>
            <div className="mt-auto">
              <p className="font-medium mb-2">Contact:</p>
              <a href="mailto:info@wtpregister.com" className="text-white hover:underline">
                info@wtpregister.com
              </a>
            </div>
          </div>

          {/* Services links */}
          <div className="flex gap-20">
            {/* Our Services column */}
            <div>
              <h4 className="font-medium mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="hover:underline">Contact Us</Link>
                </li>
                <li>
                  <Link to="/trademark-info" className="hover:underline">Trademark Info</Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:underline">FAQs</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About Us</Link>
                </li>
              </ul>
            </div>

            {/* Trademark Publication column */}
            <div>
              <h4 className="font-medium mb-4">Trademark Publication</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/search" className="hover:underline">Search</Link>
                </li>
                <li>
                  <Link to="/request-publication" className="hover:underline">Request Publication</Link>
                </li>
                <li>
                  <Link to="/general-information" className="hover:underline">General Information</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex justify-between items-center text-sm">
            <p>© {currentYear} WTP. All rights reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
