import {
  Baby,
  BookOpen,
  Building2,
  Calendar,
  ExternalLink,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Pricing from "../../components/Pricing";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-navy to-blue-900 text-white py-20 pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Helpful information, community connections, and support resources
              for families and caregivers throughout Minnesota.
            </p>
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've compiled helpful resources to support you on your care
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Client Testimonials
              </h3>
              <p className="text-gray-600 mb-6">
                Hear from families who have experienced the Mariposa difference.
                Real stories from real people about the impact of compassionate
                care.
              </p>
              <Link
                to="#testimonials"
                className="text-mariposa-green font-semibold hover:underline"
              >
                Read Testimonials →
              </Link>
            </div>

            {/* Educational Content */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Care Guides & Tips
              </h3>
              <p className="text-gray-600 mb-6">
                Educational articles, care tips, and helpful guides for seniors,
                families, and caregivers navigating life transitions.
              </p>
              <Link
                to="#guides"
                className="text-mariposa-orange font-semibold hover:underline"
              >
                Browse Guides →
              </Link>
            </div>

            {/* Community Partnerships */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Community Partners
              </h3>
              <p className="text-gray-600 mb-6">
                Local organizations, healthcare providers, and community
                resources we work with to provide comprehensive support.
              </p>
              <Link
                to="#partners"
                className="text-mariposa-navy font-semibold hover:underline"
              >
                View Partners →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guides Section */}
      <section id="guides" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Care Guides & Educational Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful articles and guides to support you through your care
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-mariposa-navy mb-3">
                Aging at Home: A Family Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Essential tips for helping seniors maintain independence and
                safety in their own homes.
              </p>
              <span className="text-mariposa-green font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-mariposa-navy mb-3">
                Postpartum Recovery Support
              </h3>
              <p className="text-gray-600 mb-4">
                What to expect during recovery and how to build your support
                system as a new parent.
              </p>
              <span className="text-mariposa-orange font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-mariposa-navy mb-3">
                Caregiver Self-Care Tips
              </h3>
              <p className="text-gray-600 mb-4">
                How family caregivers can maintain their own wellbeing while
                caring for loved ones.
              </p>
              <span className="text-mariposa-navy font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Community Partners & Referrals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with trusted partners throughout Minnesota to provide
              comprehensive support for our community.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Partner Organizations
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We collaborate with healthcare providers, senior centers,
                birthing centers, and community organizations to ensure our
                clients receive comprehensive support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Healthcare Providers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Senior Centers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-3">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Birthing Centers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Community Groups
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Community Support & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our community for ongoing support, events, and
              helpful resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Social Media Community */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with other families, share experiences, and get
                additional support through our social media communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://facebook.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Facebook
                </a>
                <a
                  href="https://instagram.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Events & Support */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Events & Support Groups
              </h3>
              <p className="text-gray-600 mb-6">
                Participate in virtual and in-person events designed to support
                families and caregivers in our community.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-green rounded-full mr-3"></div>
                  <span className="text-gray-600">
                    Monthly virtual support groups
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-green rounded-full mr-3"></div>
                  <span className="text-gray-600">Educational workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-green rounded-full mr-3"></div>
                  <span className="text-gray-600">
                    Community wellness events
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="bg-mariposa-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Learn About Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-mariposa-orange to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Gift Cards Available</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Give the gift of care and support. Perfect for new parents, aging
              relatives, or anyone who could use a helping hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-mariposa-orange border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100"
              >
                Purchase Gift Card
              </Link>
              <a
                href="tel:+16124004532"
                className="bg-mariposa-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all duration-300"
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <div id="pricing">
        <Pricing variant="resources" />
      </div>

      {/* Contact CTA Section */}
      <section className="py-20 bg-mariposa-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to answer your questions and help you find
            the right care solution for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+16124004532"
              className="bg-white text-mariposa-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Call (612) 400-4532
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-white">
              English & Spanish Services Available
            </p>
            <p className="text-gray-300">Hablamos Español</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
