import { Link } from "react-router-dom";
import PhoneLink from "../PhoneLink";
import mariposaSvg from "../../assets/images/mariposa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-mariposa-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                <img 
                  src={mariposaSvg} 
                  alt="Mariposa Home Care Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">MARIPOSA</div>
                <div className="text-sm text-gray-300">HOME CARE</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Care that empowers independence and builds connections. Providing
              compassionate, personalized in-home care for seniors and new
              families in Minnesota.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong>Phone:</strong>{" "}
                <PhoneLink className="text-white hover:text-mariposa-orange transition-colors" />
              </p>
              <p className="text-gray-300">
                <strong>Website:</strong> www.mariposahomecare.com
              </p>
              <p className="text-gray-300 text-sm">
                Hablamos Español | We offer bilingual services
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-mariposa-orange transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/seniors"
                  className="text-gray-300 hover:text-mariposa-orange transition-colors duration-200"
                >
                  Senior Services
                </Link>
              </li>
              <li>
                <Link
                  to="/families"
                  className="text-gray-300 hover:text-mariposa-orange transition-colors duration-200"
                >
                  New Family Services
                </Link>
              </li>
              <li>
                <Link
                  to="/recruitment"
                  className="text-gray-300 hover:text-mariposa-orange transition-colors duration-200"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-mariposa-orange transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Senior Companion Care</li>
              <li>Personal Care Assistance</li>
              <li>Newborn & New Family Support</li>
              <li>Light Housekeeping</li>
              <li>Transportation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Mariposa Home Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
