import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  category: "senior" | "family";
}

const ServicesOverview = () => {
  const services: Service[] = [
    {
      title: "Companionship & Socialization",
      description:
        "Meaningful connections and warm support to combat isolation and loneliness",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 17v2H2v-2s0-4 7-4 7 4 7 4M12.5 7.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5M15.94 13a5.32 5.32 0 0 1-.94-.1 5.57 5.57 0 0 1-1.44-.55A3.88 3.88 0 0 0 17 13a3.88 3.88 0 0 0 3.47-.68A5.57 5.57 0 0 1 19 12.9a5.32 5.32 0 0 1-.94.1c-.41 0-.56-.08-1.12-.08s-.71.08-1.12.08m1.12-6.52A2.5 2.5 0 1 0 14.56 8a2.5 2.5 0 0 0 2.5-2.5z" />
        </svg>
      ),
      category: "senior",
    },
    {
      title: "Personal Care Assistance",
      description:
        "Dignified support with bathing, oral hygiene, and daily personal needs",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C13.11,2 14,2.9 14,4C14,5.11 13.11,6 12,6C10.9,6 10,5.11 10,4C10,2.9 10.9,2 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z" />
        </svg>
      ),
      category: "senior",
    },
    {
      title: "Meal Preparation & Nutrition",
      description:
        "Healthy meal planning, preparation, and nutritional support for wellbeing",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M16,5V11A3,3 0 0,0 19,14A3,3 0 0,0 22,11V5H20V11A1,1 0 0,1 19,12A1,1 0 0,1 18,11V5H16M11,16L10,22H14L13,16H11Z" />
        </svg>
      ),
      category: "senior",
    },
    {
      title: "Transportation & Appointments",
      description:
        "Safe, reliable transportation to medical appointments and errands",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" />
        </svg>
      ),
      category: "senior",
    },
    {
      title: "Caregiver Respite Care",
      description:
        "Relief for family caregivers with flexible, compassionate backup support",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,18.5A3.5,3.5 0 0,1 8.5,15A3.5,3.5 0 0,1 12,11.5A3.5,3.5 0 0,1 15.5,15A3.5,3.5 0 0,1 12,18.5M12,7A8,8 0 0,0 4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15A8,8 0 0,0 12,7M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17Z" />
        </svg>
      ),
      category: "senior",
    },
    {
      title: "Postpartum Support",
      description:
        "Gentle care and assistance during recovery after childbirth",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      ),
      category: "family",
    },
    {
      title: "Meal Prep - Frozen Meals",
      description: "Nutritious freezer meal preparation for busy new families",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,21V3H19V21H5M6,4V11H11V4H6M13,4V7H18V4H13M18,9H13V12H18V9M11,13H6V16H11V13M13,14V20H18V14H13M11,18H6V20H11V18Z" />
        </svg>
      ),
      category: "family",
    },
    {
      title: "Nursery & Baby Organization",
      description:
        "Setting up and organizing baby gear, supplies, and nursery spaces",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,8V20.5C21,20.78 20.78,21 20.5,21H15.5C15.22,21 15,20.78 15,20.5V19H11V20.5C11,20.78 10.78,21 10.5,21H5.5C5.22,21 5,20.78 5,20.5V8C5,6.9 5.9,6 7,6H17C18.1,6 19,6.9 19,8V9H21V8M19,11H21V15H19V11M13,11A1,1 0 0,0 12,12A1,1 0 0,0 13,13A1,1 0 0,0 14,12A1,1 0 0,0 13,11M7,8V17H11V8H7M13,8V17H17V8H13Z" />
        </svg>
      ),
      category: "family",
    },
    {
      title: "Emotional Support & Companionship",
      description:
        "Compassionate listening and encouragement during life transitions",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      ),
      category: "family",
    },
    {
      title: "Grocery Planning & Shopping",
      description:
        "Complete grocery planning, shopping, and household errands support",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>
      ),
      category: "family",
    },
  ];

  const seniorServices = services.filter(
    (service) => service.category === "senior"
  );
  const familyServices = services.filter(
    (service) => service.category === "family"
  );

  const ServiceCard = ({
    service,
    index,
  }: {
    service: Service;
    index: number;
  }) => (
    <div
      className={`group relative bg-white rounded-3xl p-6 shadow-lg border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
        service.category === "senior"
          ? "border-mariposa-green hover:bg-gradient-to-br hover:from-green-50 hover:to-white"
          : "border-mariposa-orange hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
      }`}
    >
      {/* Icon Container */}
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
          service.category === "senior"
            ? "bg-gradient-to-br from-mariposa-green to-green-600 text-white shadow-lg shadow-green-200"
            : "bg-gradient-to-br from-mariposa-orange to-orange-600 text-white shadow-lg shadow-orange-200"
        } group-hover:scale-110`}
      >
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-lg font-bold text-mariposa-navy text-center leading-tight mb-3">
        {service.title}
      </h3>

      {/* Service Description */}
      {/* <p className="text-sm text-gray-600 text-center mb-4 px-2 leading-relaxed">
        {service.description}
      </p> */}

      {/* Category Badge */}
      <div
        className={`mx-auto w-fit px-3 py-1 rounded-full text-xs font-semibold ${
          service.category === "senior"
            ? "bg-green-100 text-green-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {service.category === "senior" ? "Senior Care" : "New Family"}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mariposa-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compassionate care for every stage of life - supporting seniors and
            new families with personalized assistance
          </p>
        </div>

        {/* Senior Care Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-gradient-to-r from-mariposa-green to-green-600 text-white px-6 py-3 rounded-full">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 17v2H2v-2s0-4 7-4 7 4 7 4M12.5 7.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5M15.94 13a5.32 5.32 0 0 1-.94-.1 5.57 5.57 0 0 1-1.44-.55A3.88 3.88 0 0 0 17 13a3.88 3.88 0 0 0 3.47-.68A5.57 5.57 0 0 1 19 12.9a5.32 5.32 0 0 1-.94.1c-.41 0-.56-.08-1.12-.08s-.71.08-1.12.08m1.12-6.52A2.5 2.5 0 1 0 14.56 8a2.5 2.5 0 0 0 2.5-2.5z" />
              </svg>
              <h3 className="text-2xl font-bold">Senior Care Services</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {seniorServices.map((service, index) => (
              <ServiceCard
                key={`senior-${index}`}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* New Family Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-gradient-to-r from-mariposa-orange to-orange-600 text-white px-6 py-3 rounded-full">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
              <h3 className="text-2xl font-bold">New Family Support</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {familyServices.map((service, index) => (
              <ServiceCard
                key={`family-${index}`}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-mariposa-navy to-blue-900 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every family's needs are unique. Let's discuss how our
              personalized care services can support you and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 hover:text-mariposa-orange transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
                <svg
                  className="w-6 h-6 ml-3"
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
              <Link
                to="/seniors"
                className="inline-flex items-center bg-white text-mariposa-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Explore Senior Care
              </Link>
              <Link
                to="/families"
                className="inline-flex items-center bg-white text-mariposa-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Explore Family Care
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
