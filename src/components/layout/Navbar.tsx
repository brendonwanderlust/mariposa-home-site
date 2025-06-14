import { useState } from "react";
import { Link } from "react-router-dom";
import mariposaLogo from "../../assets/images/mariposa-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={mariposaLogo}
              alt="Mariposa Home Care Logo"
              className="lg:w-18 lg:h-18 w-12 h-12 object-contain"
            />
            <div className="text-mariposa-orange">
              <div className="font-bold text-lg">MARIPOSA</div>
              <div className="text-sm">HOME CARE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/seniors"
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-semibold"
            >
              Seniors
            </Link>
            <Link
              to="/families"
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-semibold"
            >
              New Families
            </Link>
            <Link
              to="/recruitment"
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-semibold"
            >
              Recruitment
            </Link>
            <Link
              to="/resources"
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-semibold"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/seniors"
                className="block px-3 py-2 text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                Seniors
              </Link>
              <Link
                to="/families"
                className="block px-3 py-2 text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                New Families
              </Link>
              <Link
                to="/recruitment"
                className="block px-3 py-2 text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                Recruitment
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-mariposa-orange hover:text-mariposa-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="block mx-3 my-2 bg-mariposa-orange hover:bg-mariposa-orange-500 text-white px-4 py-2 rounded-full text-center transition-all duration-300"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
