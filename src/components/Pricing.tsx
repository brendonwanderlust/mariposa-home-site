import { Calendar, Clock } from "lucide-react";
import React from "react";

interface PricingProps {
  variant?: "seniors" | "families";
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({
  variant = "seniors",
  className = "",
}) => {
  const isOrange = variant === "families";

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mariposa-navy mb-6">
            Transparent Pricing
            <span
              className={`block text-2xl lg:text-3xl mt-2 ${
                isOrange ? "text-mariposa-orange" : "text-mariposa-green"
              }`}
            >
              You Can Trust
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Mariposa Home Care, we believe in clear pricing with no hidden
            fees—so you can plan confidently and focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pricing Info */}
          <div className="space-y-8">
            {/* Hourly Rate */}
            <div
              className={`bg-gradient-to-r ${
                isOrange
                  ? "from-orange-50 to-orange-100 border-mariposa-orange"
                  : "from-green-50 to-green-100 border-mariposa-green"
              } border-2 rounded-3xl p-8`}
            >
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Hourly Rate:
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-mariposa-navy">
                  $45
                </span>
                <span className="text-2xl text-gray-600 ml-2">per hour*</span>
              </div>
              <p className="text-sm text-gray-500">
                ***Pricing subject to change
              </p>
            </div>

            {/* Trust Message */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide{" "}
                <strong>
                  affordable, professional, personal care and companionship
                </strong>{" "}
                with transparent pricing that allows you to budget with
                confidence. No surprises, no hidden costs—just compassionate
                care you can count on.
              </p>
            </div>
          </div>

          {/* Right Column - Service Minimums */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-2">
                SERVICE MINIMUMS:
              </h3>
            </div>

            {/* Pie Chart Style Layout */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Background Circle */}
              <div className="w-full h-full rounded-full relative overflow-hidden">
                {/* Pie segments */}
                <div
                  className={`absolute inset-0 ${
                    isOrange ? "bg-mariposa-orange" : "bg-mariposa-green"
                  }`}
                  style={{
                    clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                  }}
                ></div>
                <div
                  className={`absolute inset-0 ${
                    isOrange ? "bg-mariposa-green" : "bg-mariposa-orange"
                  }`}
                  style={{
                    clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 bg-mariposa-navy"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 100%, 0% 100%, 0% 0%, 50% 0%)",
                  }}
                ></div>
              </div>

              {/* Service Minimum Callouts */}
              {/* Top Right - 3-hour minimum */}
              <div className="absolute -top-4 right-4">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 min-w-[180px]">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${
                        isOrange ? "bg-mariposa-orange" : "bg-mariposa-green"
                      } rounded-full flex items-center justify-center mr-3`}
                    >
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      3-hour minimum per visit
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div
                  className={`absolute top-6 -left-4 w-4 h-px ${
                    isOrange ? "bg-mariposa-orange" : "bg-mariposa-green"
                  }`}
                ></div>
                <div
                  className={`absolute top-6 -left-1 w-2 h-2 ${
                    isOrange ? "bg-mariposa-orange" : "bg-mariposa-green"
                  } rounded-full`}
                ></div>
              </div>

              {/* Middle Right - 3 days per week */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 min-w-[180px]">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${
                        isOrange ? "bg-mariposa-green" : "bg-mariposa-orange"
                      } rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white`}
                    >
                      3
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      At least 3 days per week
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div
                  className={`absolute top-1/2 -left-6 w-6 h-px ${
                    isOrange ? "bg-mariposa-green" : "bg-mariposa-orange"
                  }`}
                ></div>
                <div
                  className={`absolute top-1/2 -left-1 w-2 h-2 ${
                    isOrange ? "bg-mariposa-green" : "bg-mariposa-orange"
                  } rounded-full transform -translate-y-1/2`}
                ></div>
              </div>

              {/* Bottom - 1-month commitment */}
              <div className="absolute -bottom-4 right-4">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 min-w-[180px]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-mariposa-navy rounded-full flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      1-month minimum commitment
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                <div className="absolute -top-2 -left-4 w-4 h-px bg-mariposa-navy"></div>
                <div className="absolute -top-2 -left-1 w-2 h-2 bg-mariposa-navy rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div
          className={`mt-16 bg-gradient-to-r ${
            isOrange
              ? "from-mariposa-orange to-orange-600"
              : "from-mariposa-green to-green-600"
          } rounded-3xl p-8 text-white text-center`}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Learn About Our Transparent Pricing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get a personalized quote during your free in-home consultation. No
            pressure, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-mariposa-navy border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300">
              Schedule Free Consultation
            </button>
            <a
              href="tel:+16124004532"
              className="bg-mariposa-navy border-2 border-mariposa-navy text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-900 transition-all duration-300"
            >
              Call (612) 400-4532
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
