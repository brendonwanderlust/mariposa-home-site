import {
  Baby,
  Building2,
  Calendar,
  Heart,
  Home,
  Shield,
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
      {/* <section className="py-20 bg-white">
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
      {/* <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
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
            </div> */}

      {/* Educational Content */}
      {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
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
            </div> */}

      {/* Community Partnerships */}
      {/* <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
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
      </section> */}

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              About Mariposa Home Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're basically professional human helpers who show up with snacks,
              good vibes, and an impressive ability to find the TV remote.
              Serving Minnesota with 99.9% more fun than your average care service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                Our mission is simple: We're here to help you adult better when
                adulting gets tough. Whether you need someone to remind you to
                eat vegetables or help you figure out how to use that new fancy
                coffee machine, we've got your back. Think of us as your personal
                cheer squad with excellent organizational skills.
              </p>
              <p className="text-gray-600">
                We're basically professional best friends who happen to be really
                good at laundry, know all the good snacks, and can actually
                remember where you put your glasses.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-6">
                Why Choose Mariposa?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mariposa-orange rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    We're totally legit (licensed, bonded, and background-checked)
                    and promise not to judge your sock drawer
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mariposa-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Flexible scheduling because life is unpredictable and we get it
                    (no contracts that trap you like gym memberships)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mariposa-navy rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    We speak English, Spanish, and fluent "where did I put my keys?"
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-mariposa-orange rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">
                    Custom care plans because you're unique (like your weird but
                    endearing habit of talking to houseplants)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guides for Seniors Section */}
      <section
        id="guides"
        className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Care Guides for Seniors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources and guides to support seniors and their families in
              maintaining independence, safety, and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
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

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Caregiver Self-Care Tips
              </h3>
              <p className="text-gray-600 mb-4">
                How family caregivers can maintain their own wellbeing while
                caring for loved ones.
              </p>
              <span className="text-mariposa-green font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-green rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Safety at Home for Seniors
              </h3>
              <p className="text-gray-600 mb-4">
                Home safety tips and modifications to prevent falls and create a
                secure living environment.
              </p>
              <span className="text-mariposa-green font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guides for New Families Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Care Guides for New Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential resources and support guides for new parents navigating
              the early days of parenthood and recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
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

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-full flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Newborn Care Essentials
              </h3>
              <p className="text-gray-600 mb-4">
                Practical tips for caring for your newborn, including feeding,
                sleeping, and bonding techniques.
              </p>
              <span className="text-mariposa-orange font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Building Your Village
              </h3>
              <p className="text-gray-600 mb-4">
                How to create a support network and ask for help during the
                transition to parenthood.
              </p>
              <span className="text-mariposa-orange font-semibold">
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
      <section className="py-20 bg-white" id="events">
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-mariposa-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Connect with other families, share experiences, and get
                additional support through our social media communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
                <a
                  href="https://facebook.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      className="fill-current"
                      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                    />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://instagram.com/mariposahomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <svg
                    role="img"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path
                      className="fill-current"
                      d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                    />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

            {/* Events & Support */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100  rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                Events & Community Building
              </h3>
              <p className="text-gray-600 mb-6">
                Participate in virtual and in-person events designed to support
                families and caregivers in our community.
              </p>
              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-orange rounded-full mr-3"></div>
                  <span className="text-gray-600">Virtual support groups</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-orange rounded-full mr-3"></div>
                  <span className="text-gray-600">Educational workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mariposa-orange rounded-full mr-3"></div>
                  <span className="text-gray-600">
                    Community wellness events
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="bg-mariposa-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  New Family Events
                </Link>
                <Link
                  to="/contact"
                  className="bg-mariposa-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Senior Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-20 bg-white" id="gift-cards">
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
