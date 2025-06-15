import {
  Baby,
  Car,
  ChefHat,
  Clock,
  Heart,
  MessageCircle,
  Package,
  ShoppingCart,
  ShowerHead,
  Users,
} from "lucide-react";
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
      icon: <Users className="w-10 h-10" />,
      category: "senior",
    },
    {
      title: "Personal Care Assistance",
      description:
        "Dignified support with bathing, oral hygiene, and daily personal needs",
      icon: <ShowerHead className="w-10 h-10" />,
      category: "senior",
    },
    {
      title: "Meal Preparation & Nutrition",
      description:
        "Healthy meal planning, preparation, and nutritional support for wellbeing",
      icon: <ChefHat className="w-10 h-10" />,
      category: "senior",
    },
    {
      title: "Transportation & Appointments",
      description:
        "Safe, reliable transportation to medical appointments and errands",
      icon: <Car className="w-10 h-10" />,
      category: "senior",
    },
    {
      title: "Caregiver Respite Care",
      description:
        "Relief for family caregivers with flexible, compassionate backup support",
      icon: <Clock className="w-10 h-10" />,
      category: "senior",
    },
    {
      title: "Postpartum Support",
      description:
        "Gentle care and assistance during recovery after childbirth",
      icon: <Heart className="w-10 h-10" />,
      category: "family",
    },
    {
      title: "Meal Prep - Frozen Meals",
      description: "Nutritious freezer meal preparation for busy new families",
      icon: <Package className="w-10 h-10" />,
      category: "family",
    },
    {
      title: "Nursery & Baby Organization",
      description:
        "Setting up and organizing baby gear, supplies, and nursery spaces",
      icon: <Baby className="w-10 h-10" />,
      category: "family",
    },
    {
      title: "Emotional Support & Companionship",
      description:
        "Compassionate listening and encouragement during life transitions",
      icon: <MessageCircle className="w-10 h-10" />,
      category: "family",
    },
    {
      title: "Grocery Planning & Shopping",
      description:
        "Complete grocery planning, shopping, and household errands support",
      icon: <ShoppingCart className="w-10 h-10" />,
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
              <Users className="w-6 h-6 mr-3" />
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
              <Heart className="w-6 h-6 mr-3" />
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
                className="inline-flex items-center bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
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
