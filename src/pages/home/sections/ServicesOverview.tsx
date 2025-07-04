import {
  Car,
  ChefHat,
  Home,
  MessageCircle,
  PawPrint,
  Pill,
  Shield,
  ShowerHead,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServicesOverview = () => {
  const services: Service[] = [
    {
      title: "Companionship & Socialization",
      description:
        "Meaningful connections and warm support to combat isolation and loneliness",
      icon: <Users className="w-10 h-10" />,
    },
    {
      title: "Running Errands",
      description:
        "Assistance with grocery shopping, pharmacy visits, and daily errands",
      icon: <ShoppingCart className="w-10 h-10" />,
    },
    {
      title: "Light Housekeeping & Laundry",
      description:
        "Help with cleaning, organizing, and laundry to maintain a comfortable home",
      icon: <Home className="w-10 h-10" />,
    },
    {
      title: "Transportation to Appointments",
      description:
        "Safe, reliable transportation to medical appointments and important visits",
      icon: <Car className="w-10 h-10" />,
    },
    {
      title: "Bathing & Oral Hygiene Assistance",
      description:
        "Dignified support with personal care needs including bathing and oral hygiene",
      icon: <ShowerHead className="w-10 h-10" />,
    },
    {
      title: "Meal Preparation & Clean Up",
      description:
        "Nutritious meal planning, preparation, and kitchen cleanup services",
      icon: <ChefHat className="w-10 h-10" />,
    },
    {
      title: "Safety & Fall Prevention",
      description:
        "Home safety assessments and support to prevent falls and accidents",
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: "Medication Reminders & Hydration Support",
      description:
        "Gentle reminders for medication schedules and ensuring proper hydration",
      icon: <Pill className="w-10 h-10" />,
    },
    {
      title: "Pet Care & Vet Transportation",
      description:
        "Caring for beloved pets including vet visits and daily pet care needs",
      icon: <PawPrint className="w-10 h-10" />,
    },
    {
      title: "Virtual Family Check-ins",
      description:
        "Facilitating video calls and communication with family members",
      icon: <MessageCircle className="w-10 h-10" />,
    },
    {
      title: "Light Handyman Services",
      description:
        "Simple home maintenance like changing lightbulbs, batteries, and water softener salt",
      icon: <Wrench className="w-10 h-10" />,
    },
  ];

  const ServiceCard = ({ service }: { service: Service }) => (
    <div className="group relative bg-white rounded-3xl p-6 shadow-lg border-2 border-mariposa-navy hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
      {/* Icon Container */}
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 bg-gradient-to-br from-mariposa-navy to-blue-900 text-white shadow-lg shadow-blue-200 group-hover:scale-110">
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-lg font-bold text-mariposa-navy text-center leading-tight mb-3">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="text-sm text-gray-600 text-center">{service.description}</p>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mariposa-navy mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive care services designed to support independence and
            wellbeing in the comfort of home
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
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
                to="/about"
                className="inline-flex items-center bg-white text-mariposa-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
