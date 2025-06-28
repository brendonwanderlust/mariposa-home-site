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
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-2">
                SERVICE MINIMUMS:
              </h3>
            </div>

            {/* SVG Pie Chart */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="240"
                  height="240"
                  viewBox="0 0 240 240"
                  className="drop-shadow-lg"
                >
                  {/* Three 120-degree segments */}
                  {createPieSlice(-90, 30, colors[0])} {/* Top segment */}
                  {createPieSlice(30, 150, colors[1])}{" "}
                  {/* Bottom-right segment */}
                  {createPieSlice(150, 270, colors[2])}{" "}
                  {/* Bottom-left segment */}
                </svg>
              </div>

              {/* Service Minimum Callouts */}

              {/* Top - 3-hour minimum */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 min-w-[200px]">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: colors[0] }}
                    >
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      3-hour minimum per visit
                    </div>
                  </div>
                </div>
                {/* Connector */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-px h-8"
                    style={{ backgroundColor: colors[0] }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full -ml-0.5"
                    style={{ backgroundColor: colors[0] }}
                  ></div>
                </div>
              </div>

              {/* Bottom Right - 3 days per week */}
              <div className="absolute bottom-4 right-0 transform translate-x-6">
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 min-w-[200px]">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white"
                      style={{ backgroundColor: colors[1] }}
                    >
                      3
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      At least 3 days per week
                    </div>
                  </div>
                </div>
                {/* Connector */}
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                  <div
                    className="h-px w-6"
                    style={{ backgroundColor: colors[1] }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full -mt-1"
                    style={{ backgroundColor: colors[1] }}
                  ></div>
                </div>
              </div>

              {/* Bottom Left - 1-month commitment */}
              <div className="absolute bottom-4 left-0 transform -translate-x-6">
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 min-w-[200px]">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: colors[2] }}
                    >
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      1-month minimum commitment
                    </div>
                  </div>
                </div>
                {/* Connector */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6">
                  <div
                    className="h-px w-6"
                    style={{ backgroundColor: colors[2] }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full -mt-1 ml-5"
                    style={{ backgroundColor: colors[2] }}
                  ></div>
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
