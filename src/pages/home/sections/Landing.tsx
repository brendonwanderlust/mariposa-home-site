import { Link } from "react-router-dom";
import smilingSeniorsImg from "../../../assets/images/smiling-seniors.jpg";

const Landing = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-mariposa-navy via-mariposa-navy to-blue-900 text-white bg-cover bg-center bg-no-repeat overflow-hidden py-6"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(21, 26, 58, 0.6) 0%, rgba(21, 26, 58, 0.4) 50%, rgba(21, 26, 58, 0.8) 100%), url('${smilingSeniorsImg}')`,
      }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mariposa-orange opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-mariposa-green opacity-15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-mariposa-orange opacity-20 rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-8 lg:py-12 min-h-screen flex flex-col justify-center">
        <main
          id="main"
          className="grid lg:grid-cols-12 gap-12 items-center w-full"
        >
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-mariposa-green rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">
                Minneapolis-based • Bilingual Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Empowering Independence
              <span className="block text-mariposa-orange">
                Through In-Home Care
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl">
              Mariposa Home Care provides compassionate support for seniors and
              new families across Minnesota—because care should feel like
              family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-mariposa-orange hover:bg-mariposa-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                Schedule Your Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-mariposa-navy transition-all"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-mariposa-green to-green-500 rounded-full flex items-center justify-center">
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

              <div className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-mariposa-orange to-orange-500 rounded-full flex items-center justify-center">
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

          {/* Stats Column */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                Why Home Care Matters
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Supporting independence and wellbeing
              </p>

              <div className="space-y-4">
                <div className="bg-orange-500/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-mariposa-orange">
                    90%
                  </div>
                  <p className="text-white mt-2">
                    of seniors want to age at home
                  </p>
                </div>
                <div className="bg-green-500/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-mariposa-green">
                    35%
                  </div>
                  <p className="text-white mt-2">
                    experience chronic loneliness
                  </p>
                </div>
                <div className="bg-red-500/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-orange-400">50%</div>
                  <p className="text-white mt-2">
                    higher dementia risk from isolation
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-mariposa-green hover:bg-mariposa-green-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </main>
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
