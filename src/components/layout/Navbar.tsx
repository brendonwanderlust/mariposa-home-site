import { Languages, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import mariposaLogo from "../../assets/images/mariposa-logo.png";
import PhoneLink from "../PhoneLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Combined Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Banner */}
        <div className="bg-mariposa-navy text-white py-2 lg:py-3 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline text-gray-300">
                  Follow Us:
                </span>
                <a
                  href="https://www.facebook.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-mariposa-orange transition-colors duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      className="fill-current group-hover:fill-mariposa-orange transition-colors duration-300"
                      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-mariposa-orange transition-colors duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    role="img"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path
                      className="fill-current group-hover:fill-mariposa-orange transition-colors duration-300"
                      d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                    />
                  </svg>
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-mariposa-orange" />
                  <span className="text-gray-300">Minneapolis, MN</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-mariposa-orange" />
                  <PhoneLink
                    phoneNumber="+16124004532"
                    displayText="(612) 400-4532"
                    className="text-white hover:text-mariposa-orange transition-colors duration-300 font-medium"
                  />
                </div>

                <div className="hidden sm:flex items-center space-x-2">
                  <span className="text-gray-300">Hablamos Español</span>
                  <Languages className="w-4 h-4 text-mariposa-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white">
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
              <div className="hidden lg:flex items-center space-x-8">
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
                  Join Our Team
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

              {/* Tablet Navigation - Compact */}
              <div className="hidden md:flex lg:hidden items-center space-x-4">
                <Link
                  to="/"
                  className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-medium text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/seniors"
                  className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-medium text-sm"
                >
                  Seniors
                </Link>
                <Link
                  to="/families"
                  className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-medium text-sm"
                >
                  Families
                </Link>
                <Link
                  to="/recruitment"
                  className="text-mariposa-orange hover:text-mariposa-green transition-colors duration-300 font-medium text-sm"
                >
                  Join Our Team
                </Link>
                <Link
                  to="/contact"
                  className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm hover:bg-orange-100 hover:text-mariposa-orange"
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
                    Join Our Team
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
      </div>
    </>
  );
};

export default Navbar;