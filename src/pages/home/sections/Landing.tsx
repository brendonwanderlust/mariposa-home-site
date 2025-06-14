import { Link } from "react-router-dom";
import smilingSenoirsImg from "../../../assets/images/smiling-seniors.jpg";

const Landing = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-mariposa-navy via-mariposa-navy to-blue-900 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 26, 58, 0.6), rgba(21, 26, 58, 0.4)), url('${smilingSenoirsImg}')`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Care that empowers
                <span className="text-mariposa-orange"> independence</span> and
                builds
                <span className="text-mariposa-green"> connections</span>
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 py-2 lg:py-6">
                <Link
                  to="/contact"
                  className="bg-mariposa-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 text-center shadow-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-mariposa-navy transition-all duration-200 text-center"
                >
                  Our Services
                </Link>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Providing compassionate, personalized in-home care for seniors
                and new families in Minnesota. Whether you are navigating the
                joys and challenges of aging or new parenthood, you don't have
                to do it alone.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-mariposa-orange">
                  90%
                </div>
                <div className="text-sm text-gray-300">
                  of seniors want to age at home
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mariposa-green">
                  35%
                </div>
                <div className="text-sm text-gray-300">
                  of seniors experience loneliness
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mariposa-orange">
                  50%
                </div>
                <div className="text-sm text-gray-300">
                  increased dementia risk from isolation
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-mariposa-green rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">(612) 400-4532</div>
                  <div className="text-sm text-gray-300">Free consultation</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-mariposa-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Minneapolis Area</div>
                  <div className="text-sm text-gray-300">Hablamos Español</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          {/* <div className="relative">
            <div className="bg-gradient-to-br from-mariposa-green to-mariposa-orange rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V5.5C15 4.1 13.9 3 12.5 3H11.5C10.1 3 9 4.1 9 5.5V7.5L3 7V9L9 8.5V21H11V14H13V21H15V8.5L21 9Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                  Compassionate Care, Experienced Hands
                </h3>
                <p className="text-gray-600 mb-6">
                  Our care companions are members of the community who care
                  about service to others and finding ways to improve your life.
                </p>
                <div className="text-4xl font-bold text-mariposa-orange">
                  FREE
                </div>
                <div className="text-mariposa-navy font-semibold">
                  In-Home Consultation
                </div>
              </div>
            </div> */}

          {/* Floating elements */}
          {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-mariposa-orange rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mariposa-green rounded-full opacity-20"></div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
