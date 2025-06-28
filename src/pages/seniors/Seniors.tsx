import { Link } from "react-router-dom";
import Pricing from "../../components/Pricing";

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
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

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
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

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
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
            {/* Service cards will be added here */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Companionship & Socialization
              </h3>
              <p className="text-gray-600">
                Meaningful connections and warm support to combat isolation
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Personal Care Assistance
              </h3>
              <p className="text-gray-600">
                Dignified support with bathing, oral hygiene, and daily needs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Meal Preparation
              </h3>
              <p className="text-gray-600">
                Healthy meal planning and preparation for proper nutrition
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Transportation
              </h3>
              <p className="text-gray-600">
                Safe transportation to appointments and errands
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Light Housekeeping
              </h3>
              <p className="text-gray-600">
                Keeping your home clean and organized
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Respite Care
              </h3>
              <p className="text-gray-600">
                Relief for family caregivers with flexible support
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
