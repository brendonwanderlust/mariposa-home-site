import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  Mail,
  Phone,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import PhoneLink from "../../../components/PhoneLink";

const CallToAction = () => {
  const processSteps = [
    {
      number: 1,
      title: "Free Consultation",
      description:
        "We visit with you in your home to understand your needs, preferences, and goals",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Customized Care Plan",
      description:
        "We work together to understand your goals, needs, and scheduling preferences",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Perfect Match",
      description:
        "Our detailed matchmaking process connects you with an ideal caregiver who understands your needs",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Ongoing Support",
      description:
        "Regular check-ins to adjust and ensure your care adapts to your changing needs",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mariposa-green via-green-700 to-mariposa-green relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-mariposa-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white mb-16">
          {/* Header Section */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-mariposa-orange rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold">Get Started Today</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Get
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mariposa-orange to-yellow-300">
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
                <div className="w-20 h-20 bg-mariposa-orange text-white rounded-full flex items-center justify-center mx-auto font-bold text-4xl shadow-2xl shadow-mariposa-orange/30 transition-all duration-300 group-hover:shadow-mariposa-orange/50 group-hover:scale-110">
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-white/30 transform -translate-y-0.5 translate-x-10"></div>
                )}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-mariposa-navy transition-all duration-300 group-hover:bg-mariposa-orange group-hover:text-white group-hover:scale-110">
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
        <div className="bg-gradient-to-r from-mariposa-navy via-blue-800 to-mariposa-navy rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden">
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
                <div className="w-20 h-20 bg-gradient-to-br from-mariposa-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Call Us Today
                </h4>
                <PhoneLink className="text-3xl font-bold text-mariposa-orange hover:text-orange-300 transition-colors duration-300 block mb-2" />
                <p className="text-gray-300">
                  Talk to one of our support team members
                </p>
              </div>

              {/* Website Contact */}
              <Link to="/contact">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-mariposa-green to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-10 h-10 text-white" />
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
              className="group inline-flex items-center bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-mariposa-orange/25 transition-all duration-300 hover:bg-white hover:text-mariposa-orange hover:shadow-mariposa-orange/40 hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <PhoneLink
              displayText="Call (612) 400-4532"
              className="group inline-flex items-center bg-white border-2 border-white text-mariposa-green px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-white/25 transition-all duration-300 hover:bg-gray-100 hover:shadow-white/40 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
