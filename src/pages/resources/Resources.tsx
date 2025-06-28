import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-navy to-blue-900 text-white py-20 pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Helpful information, community connections, and support resources
              for families and caregivers throughout Minnesota.
            </p>
            <Link
              to="/contact"
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange"
            >
              Get Support Today
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M7,7V9H5V7H7M15,7V9H9V7H15M19,7V9H17V7H19M7,11V13H5V11H7M19,11V13H9V11H19Z" />
                </svg>
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M17,17H7V15H17V17M17,13H7V11H17V13M17,9H7V7H17V9Z" />
                </svg>
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16,4C16.88,4 17.67,4.38 18.18,5C18.69,4.38 19.48,4 20.36,4C21.8,4 23,5.2 23,6.64C23,8.09 21.8,9.29 20.36,9.29C19.48,9.29 18.69,8.91 18.18,8.29C17.67,8.91 16.88,9.29 16,9.29C14.56,9.29 13.36,8.09 13.36,6.64C13.36,5.2 14.56,4 16,4M12.93,9.39C10.92,9.39 9.29,7.76 9.29,5.75C9.29,3.74 10.92,2.11 12.93,2.11C14.94,2.11 16.57,3.74 16.57,5.75C16.57,7.76 14.94,9.39 12.93,9.39M8,10V22H10V19H14V22H16V10C16,8.89 15.11,8 14,8H10C8.89,8 8,8.89 8,10Z" />
                </svg>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from families who have found support and peace of
              mind with Mariposa Home Care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-mariposa-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The caregiver from Mariposa has been a blessing for our
                  family. Mom looks forward to her visits and has someone to
                  talk to who truly cares."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-mariposa-navy">Sarah M.</p>
                <p className="text-sm text-gray-500">
                  Daughter of Senior Client
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-mariposa-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "After our baby was born, Mariposa was a lifesaver. They
                  helped with meals, organization, and gave me time to rest and
                  recover."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-mariposa-navy">Jessica L.</p>
                <p className="text-sm text-gray-500">New Mother</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-mariposa-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The matching process was excellent. Our caregiver understands
                  Dad's needs and they've developed a wonderful relationship."
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-mariposa-navy">Michael R.</p>
                <p className="text-sm text-gray-500">Son of Senior Client</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=mariposa+home+care+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mariposa-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
            >
              Read More Reviews on Google
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
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
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Healthcare Providers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Senior Centers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Birthing Centers
                </h4>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16,4C16.88,4 17.67,4.38 18.18,5C18.69,4.38 19.48,4 20.36,4C21.8,4 23,5.2 23,6.64C23,8.09 21.8,9.29 20.36,9.29C19.48,9.29 18.69,8.91 18.18,8.29C17.67,8.91 16.88,9.29 16,9.29C14.56,9.29 13.36,8.09 13.36,6.64C13.36,5.2 14.56,4 16,4M12.93,9.39C10.92,9.39 9.29,7.76 9.29,5.75C9.29,3.74 10.92,2.11 12.93,2.11C14.94,2.11 16.57,3.74 16.57,5.75C16.57,7.76 14.94,9.39 12.93,9.39M8,10V22H10V19H14V22H16V10C16,8.89 15.11,8 14,8H10C8.89,8 8,8.89 8,10Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-mariposa-navy">
                  Community Groups
                </h4>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, honest pricing with no hidden fees. Quality care that fits
              your budget and schedule.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mariposa-navy mb-4">
                  $45 per hour
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-mariposa-green mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Minimum 3 hours per visit</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-mariposa-green mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Minimum 3 days per week</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-mariposa-green mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Flexible scheduling available</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-mariposa-green mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>All services included</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-mariposa-green to-green-600 rounded-2xl p-6 text-white mb-6">
                  <h4 className="text-xl font-bold mb-2">Free Consultation</h4>
                  <p className="text-green-100">
                    We visit with you in your home to understand your needs and
                    create a personalized care plan
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="bg-mariposa-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                  Schedule Your Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
