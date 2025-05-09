import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#005ea2] text-white py-10 px-4">
      <div className="max-w-[85rem] mx-auto flex flex-col">
        {/* Main footer content */}
        <div className="flex justify-between mb-20 mt-20">
          {/* Logo and contact section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <img src="/images/mainLogo.svg" alt="WTP Logo" className="w-44 h-auto" />
            </div>
            <div className="mt-auto">
              <p className="font-medium mb-2">Contact:</p>
              <a href="mailto:info@wtpregister.com" className="text-white">
              info@natp-trademark.com
              </a>
            </div>
          </div>

          {/* Services links */}
          <div className="flex">
            {/* Our Services column */}
            <div>
              <h4 className="font-medium mb-4">Our Services</h4>
              <ul className="space-y-5">
                <li>
                  <Link to="/contact" className="font-medium ">Contact Us</Link>
                </li>
                <li>
                <Link to="/request-publication" className="font-medium">Request Publication</Link>
                </li>
                <li>
                  <Link to="/faqs" className="font-medium">FAQs</Link>
                </li>
                <li>
                  <Link to="/about" className="font-medium">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-white/20 pt-4 mb-10">
          <div className="flex justify-between items-center text-sm">
            <p>© {currentYear} NATP. All rights reserved.</p>
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
