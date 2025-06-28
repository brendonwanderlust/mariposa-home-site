import { Calendar, Clock } from "lucide-react";
import React from "react";
import PhoneLink from "./PhoneLink";

interface PricingProps {
  variant?: "seniors" | "families";
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({
  variant = "seniors",
  className = "",
}) => {
  const isOrange = variant === "families";

  // Simple SVG pie chart approach
  const createPieSlice = (
    startAngle: number,
    endAngle: number,
    color: string
  ) => {
    const centerX = 120;
    const centerY = 120;
    const radius = 100;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const pathData = [
      "M",
      centerX,
      centerY,
      "L",
      x1,
      y1,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      x2,
      y2,
      "Z",
    ].join(" ");

    return <path d={pathData} fill={color} stroke="white" strokeWidth="2" />;
  };

  const getColors = () => {
    if (isOrange) {
      return ["#E68902", "#88AD17", "#151A3A"]; // Orange, Green, Navy
    } else {
      return ["#88AD17", "#E68902", "#151A3A"]; // Green, Orange, Navy
    }
  };

  const colors = getColors();

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
                  $50
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
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-2">
                Service Minimums
              </h3>
              <p className="text-gray-600">
                Our flexible minimums ensure consistent, quality care
              </p>
            </div>

            {/* Service Minimum Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-mariposa-navy`}
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-mariposa-navy">
                      3-Hour Minimum
                    </h4>
                    <p className="text-gray-600">
                      Per visit to ensure meaningful care
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-xl font-bold text-white bg-mariposa-navy `}
                  >
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-mariposa-navy">
                      3 Days Per Week
                    </h4>
                    <p className="text-gray-600">
                      Minimum to maintain consistency
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-mariposa-navy">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-mariposa-navy">
                      1-Month Commitment
                    </h4>
                    <p className="text-gray-600">
                      To build trusted relationships
                    </p>
                  </div>
                </div>
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

            <PhoneLink
              displayText="Call (612) 400-4532"
              className="bg-mariposa-navy border-2 border-mariposa-navy text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-900 transition-all duration-300"
            ></PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
