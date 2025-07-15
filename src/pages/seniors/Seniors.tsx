import {
  Car,
  ChefHat,
  Clock,
  Droplets,
  Heart,
  Home,
  PawPrint,
  Shield,
  ShoppingCart,
  Video,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import bikingSeniorsImg from "../../assets/images/biking-seniors.jpeg";
import smilingSeniorsImg from "../../assets/images/smiling-seniors.jpg";
import PhoneLink from "../../components/PhoneLink";
import Pricing from "../../components/Pricing";

const Seniors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-green to-green-600 text-white py-12 pt-32 lg:pt-40 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-mariposa-orange/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              {/* Trust Indicator Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="flex items-center gap-1 mr-3">
                  <span className="text-yellow-300">★★★★★</span>
                </div>
                <span className="text-sm font-medium">
                  Serving seniors since 2025
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Senior Care
                <span className="block text-yellow-300">Support</span>
              </h1>

              <p className="text-xl text-green-100 mb-8 max-w-2xl lg:mx-0 mx-auto">
                Compassionate in-home care that helps seniors maintain their
                independence and dignity in the comfort of their own homes.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/contact"
                  className="flex-1 bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange hover:scale-105 whitespace-nowrap text-center"
                >
                  Get Your Free 30-Min Consultation
                </Link>
                <PhoneLink
                  displayText="Call Now: (612) 400-4532"
                  className="flex-1 border-3 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-mariposa-green transition-all duration-300 whitespace-nowrap text-center"
                ></PhoneLink>
              </div>

              {/* Quick benefits */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>No Long-term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Background-Checked Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl w-fit mx-auto">
                <img
                  src={bikingSeniorsImg}
                  alt="Senior Care Support"
                  className="w-full max-w-md h-[500px] mx-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.6) 100%), url('${smilingSeniorsImg}')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Challenges We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As we age, we face new joys but also new challenges. We're here to
              help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">35%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Combat Loneliness
              </h3>
              <p className="text-gray-600">
                35% of seniors experience chronic loneliness. Our companions
                provide meaningful social connection and emotional support.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">50%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Reduce Health Risks
              </h3>
              <p className="text-gray-600">
                Isolation increases dementia risk by 50%. We help maintain
                social engagement and cognitive stimulation.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Age at Home
              </h3>
              <p className="text-gray-600">
                90% of seniors want to age at home. We make that possible with
                personalized in-home care and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Our Senior Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored to your unique needs and
              preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Companionship & Socialization
              </h3>
              <p className="text-gray-600">
                Meaningful connections and warm support to combat isolation and
                loneliness
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Running Errands
              </h3>
              <p className="text-gray-600">
                Grocery shopping, pharmacy visits, and other essential errands
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Light Housekeeping & Laundry
              </h3>
              <p className="text-gray-600">
                Keeping your home clean, organized, and comfortable
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Transportation to Appointments
              </h3>
              <p className="text-gray-600">
                Safe, reliable transportation to medical appointments and social
                activities
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Bathing & Oral Hygiene Assistance
              </h3>
              <p className="text-gray-600">
                Dignified personal care support to maintain health and comfort
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Meal Preparation & Clean Up
              </h3>
              <p className="text-gray-600">
                Nutritious meal planning, cooking, and kitchen maintenance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Safety & Fall Prevention
              </h3>
              <p className="text-gray-600">
                Home safety assessments and support to prevent accidents
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Medication Reminders & Hydration Support
              </h3>
              <p className="text-gray-600">
                Gentle reminders for medications and encouragement to stay
                hydrated
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Petcare & Vet Transportation
              </h3>
              <p className="text-gray-600">
                Caring for beloved pets and transportation to veterinary
                appointments
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Virtual Family Check-ins
              </h3>
              <p className="text-gray-600">
                Technology support to stay connected with family and friends
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Light Handyman Services
              </h3>
              <p className="text-gray-600">
                Simple home maintenance like changing lightbulbs and fire alarm
                batteries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing variant="seniors" />

      {/* CTA Section */}
      <section className="py-20 bg-mariposa-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how we can help
            you or your loved one maintain independence at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+16124004532"
              className="bg-white text-mariposa-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Call (612) 400-4532
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seniors;
