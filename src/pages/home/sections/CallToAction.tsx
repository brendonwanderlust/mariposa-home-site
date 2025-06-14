import { Link } from "react-router-dom";
import PhoneLink from "../../../components/PhoneLink";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mariposa-green to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Take the first step towards compassionate, personalized care.
            Schedule your free in-home consultation today and discover how
            Mariposa Home Care can support you and your family.
          </p>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-mariposa-green rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold mb-2">Free Consultation</h3>
              <p className="text-sm opacity-90">
                We visit with you in your home to understand your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-mariposa-green rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold mb-2">Customized Care Plan</h3>
              <p className="text-sm opacity-90">
                We work together to understand your goals and scheduling
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-mariposa-green rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold mb-2">Perfect Match</h3>
              <p className="text-sm opacity-90">
                Our matchmaking process connects you with an ideal caregiver
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-mariposa-green rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-bold mb-2">Ongoing Support</h3>
              <p className="text-sm opacity-90">
                Regular check-ins to ensure you receive the best possible care
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us Today</h3>
                <PhoneLink className="text-2xl font-bold text-white hover:text-mariposa-orange transition-colors" />
                <p className="opacity-90">
                  Talk to one of our support team members
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Our Website</h3>
                <p className="text-xl font-semibold">
                  www.mariposahomecare.com
                </p>
                <p className="opacity-90">Schedule your consultation online</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-mariposa-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <PhoneLink
              displayText="Call (612) 400-4532"
              className="bg-white text-mariposa-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            />
          </div>

          {/* Bilingual Services */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              🇺🇸 English & 🇪🇸 Spanish Services Available
            </p>
            <p className="opacity-90">Hablamos Español</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
