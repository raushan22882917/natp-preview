import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#005ea2] text-white py-10 px-4">
      <div className="max-w-[85rem] mx-auto flex flex-col space-y-12">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and contact section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src="/images/mainLogo.svg"
                alt="WTP Logo"
                className="w-44 h-auto"
              />
            </div>
            <div>
              <p className="font-medium mb-2">Contact:</p>
              <a
                href="mailto:info@natp-trademark.com"
                className="text-white break-words">
                info@natp-trademark.com
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <Link to="/services" className="font-medium hover:underline">
              <h4 className="font-medium mb-4 text-lg">Our Services</h4>
            </Link>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="font-medium hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="font-medium hover:underline">
                  Request Publication
                </Link>
              </li>
              <li>
                <Link to="/" className="font-medium hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-medium hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
            <p>© {currentYear} NATP. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
