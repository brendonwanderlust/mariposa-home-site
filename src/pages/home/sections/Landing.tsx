import { Link } from "react-router-dom";
import smilingSenoirsImg from "../../../assets/images/smiling-seniors.jpg";

const Landing = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-mariposa-navy via-mariposa-navy to-blue-900 text-white bg-cover bg-center bg-no-repeat overflow-hidden pt-6"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(21, 26, 58, 0.6) 0%, rgba(21, 26, 58, 0.4) 50%, rgba(21, 26, 58, 0.8) 100%), url('${smilingSenoirsImg}')`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mariposa-orange opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-mariposa-green opacity-15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-mariposa-orange opacity-20 rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-8 lg:py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-mariposa-green rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">
                Minneapolis-based • Bilingual Services
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Care that
                <span className="block text-mariposa-orange">empowers</span>
                <span className="text-4xl lg:text-6xl text-gray-100">
                  independence
                </span>
                <span className="block text-3xl lg:text-5xl text-gray-300 font-normal mt-2">
                  and builds lasting
                  <span className="text-transparent bg-gradient-to-r from-mariposa-green to-green-400 bg-clip-text font-bold">
                    {" "}
                    connections
                  </span>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
                Compassionate, personalized in-home care for seniors and new
                families in Minnesota.
                <span className="text-mariposa-orange font-bold">
                  {" "}
                  You don't have to do it alone.
                </span>
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 py-4">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-mariposa-orange to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-mariposa-orange/25 transition-all duration-300 text-center transform hover:scale-105"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-mariposa-orange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-mariposa-navy transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-mariposa-green to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">(612) 400-4532</div>
                  <div className="text-sm text-gray-300">Free consultation</div>
                </div>
              </div>

              <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-mariposa-orange to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
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
                  <div className="font-bold text-lg">Minneapolis Area</div>
                  <div className="text-sm text-gray-300">Hablamos Español</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Why Home Care Matters
                </h3>
                <p className="text-gray-300">
                  Supporting independence and wellbeing
                </p>
              </div>

              <div className="space-y-6">
                <div className="group bg-gradient-to-r from-mariposa-orange/20 to-orange-500/20 rounded-2xl p-6 hover:from-mariposa-orange/30 hover:to-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-mariposa-orange mb-2 transition-transform duration-300">
                    90%
                  </div>
                  <div className="text-white font-medium">
                    of seniors want to age at home
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-mariposa-green/20 to-green-500/20 rounded-2xl p-6 hover:from-mariposa-green/30 hover:to-green-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-mariposa-green mb-2 transition-transform duration-300">
                    35%
                  </div>
                  <div className="text-white font-medium">
                    of seniors experience chronic loneliness
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-orange-400 mb-2 transition-transform duration-300">
                    50%
                  </div>
                  <div className="text-white font-medium">
                    increased dementia risk from isolation
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-mariposa-green to-green-500 text-white px-6 py-3 rounded-full font-bold">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  FREE In-Home Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,90.7C672,96,768,64,864,58.7C960,53,1056,75,1152,80L1200,85.3V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
