import { Link } from "react-router-dom";
import Pricing from "../../components/Pricing";
import {
  Heart,
  ShoppingCart,
  Home,
  Car,
  Droplets,
  ChefHat,
  Shield,
  Clock,
  PawPrint,
  Video,
  Wrench,
} from "lucide-react";
import smilingSeniorsImg from "../../assets/images/smiling-seniors.jpg";

const Seniors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-navy to-blue-900 text-white py-20 pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Senior Care Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Compassionate in-home care that helps seniors maintain their
              independence and dignity in the comfort of their own homes.
            </p>
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Schedule Free Consultation
            </Link>
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
