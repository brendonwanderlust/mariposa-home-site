import { Link } from "react-router-dom";
import PhoneLink from "../../../components/PhoneLink";

const CallToAction = () => {
  const processSteps = [
    {
      number: 1,
      title: "Free Consultation",
      description:
        "We visit with you in your home to understand your needs, preferences, and goals",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Customized Care Plan",
      description:
        "We work together to understand your goals, needs, and scheduling preferences",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Perfect Match",
      description:
        "Our detailed matchmaking process connects you with an ideal caregiver who understands your needs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Ongoing Support",
      description:
        "Regular check-ins to adjust and ensure your care adapts to your changing needs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white mb-16">
          {/* Header Section */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold">Get Started Today</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Get
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Started?
            </span>
          </h2>

          <p className="text-xl mb-16 max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Take the first step towards compassionate, personalized care.
            Schedule your free in-home consultation today and discover how
            Mariposa Home Care can support you and your family.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group text-center transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto font-bold text-2xl shadow-2xl shadow-green-900/20 transition-all duration-300 group-hover:shadow-orange-500/30 group-hover:scale-110">
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-white/30 transform -translate-y-0.5 translate-x-10"></div>
                )}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 text-white transition-all duration-300 group-hover:bg-orange-500/30 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6">
              Two Ways to Connect
            </h3>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Choose the option that works best for you - we're here to help
              every step of the way.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Phone Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Call Us Today
                </h4>
                <PhoneLink className="text-3xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-300 block mb-2" />
                <p className="text-gray-300">
                  Talk to one of our support team members
                </p>
              </div>

              {/* Website Contact */}
              <Link to="/contact">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Contact Us Online
                  </h4>
                  <p className="text-2xl font-bold text-green-400 mb-2">
                    Click Here
                  </p>
                  <p className="text-gray-300">
                    Schedule your consultation online now
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="group inline-flex items-center bg-orange-500 border-2 border-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:bg-orange-100 hover:text-orange-500 hover:shadow-orange-500/40 hover:scale-105"
            >
              Schedule Free Consultation
              <svg
                className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <PhoneLink
              displayText="Call (612) 400-4532"
              className="group inline-flex items-center bg-white border-2 border-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-white/25 transition-all duration-300 hover:bg-gray-100 hover:shadow-white/40 hover:scale-105"
            />
          </div>
        </div>

        {/* Bilingual Services */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🇺🇸</span>
                <span className="font-semibold">English</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🇪🇸</span>
                <span className="font-semibold">Spanish</span>
              </div>
            </div>
          </div>
          <p className="text-gray-200 mt-3 font-medium">Hablamos Español</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
