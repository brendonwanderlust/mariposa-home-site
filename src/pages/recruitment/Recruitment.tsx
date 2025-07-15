import { Heart, Clock, Users, User, Headphones } from "lucide-react";
import NavigationButton from "../../components/NavigationButton";
import PhoneLink from "../../components/PhoneLink";

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-green to-green-700 text-white py-20 pt-40 lg:pt-48 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-mariposa-orange/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Make a meaningful difference in your community. Join a
              mission-driven team that values compassion, flexibility, and
              connection.
            </p>
            <NavigationButton
              url="https://www.linkedin.com/company/mariposa-home-care/jobs/"
              openInNewTab={true}
              className="bg-mariposa-orange border-2 border-mariposa-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-mariposa-orange hover:scale-105"
            >
              Apply Today
            </NavigationButton>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Why Work with Mariposa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe meaningful work changes lives—both for those we serve
              and those who serve with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-mariposa-navy to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Purpose-Filled Work
              </h3>
              <p className="text-gray-600">
                Make a real difference in people's lives every single day while
                building meaningful relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-mariposa-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Work schedules that fit your life, with opportunities for
                part-time and full-time positions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-mariposa-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Supportive Leadership
              </h3>
              <p className="text-gray-600">
                Work with a team that values your contributions and provides
                ongoing support and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're providing hands-on care, coordinating support, or
              volunteering your time, you'll be part of a mission that matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Caregivers */}
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Caregivers
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our caregivers provide heart-led, hands-on support to older
                adults and new families—bringing comfort, connection, and peace
                of mind into the home.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                <li>• Companion care and socialization</li>
                <li>• Personal care assistance</li>
                <li>• Meal preparation and light housekeeping</li>
                <li>• Transportation and errands</li>
                <li>• New family support</li>
              </ul>
              <NavigationButton
                url="https://www.linkedin.com/company/mariposa-home-care/jobs/"
                openInNewTab={true}
                className="block w-full bg-green-600 text-white text-center py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mt-auto"
              >
                Apply for Caregiver Position
              </NavigationButton>
            </div>

            {/* Care Staff */}
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Care Staff
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                The care staff are the bridge between clients, caregivers, and
                the community. They manage logistics, scheduling, and
                relationships with care and precision.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                <li>• Client coordination and scheduling</li>
                <li>• Caregiver-client matching</li>
                <li>• Quality assurance and support</li>
                <li>• Community event planning</li>
                <li>• Administrative support</li>
              </ul>
              <NavigationButton
                url="https://www.linkedin.com/company/mariposa-home-care/jobs/"
                openInNewTab={true}
                className="block w-full bg-orange-500 text-white text-center py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors mt-auto"
              >
                Apply for Care Staff Position
              </NavigationButton>
            </div>

            {/* Volunteers */}
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Volunteers
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our volunteers exude joy, kindness, and community spirit.
                Whether offering companionship, helping at events, or sharing
                time, they create meaningful moments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                <li>• Companionship visits</li>
                <li>• Community event assistance</li>
                <li>• Administrative support</li>
                <li>• Special projects and outreach</li>
                <li>• Flexible time commitment</li>
              </ul>
              <NavigationButton
                url="https://www.linkedin.com/company/mariposa-home-care/jobs/"
                openInNewTab={true}
                className="block w-full bg-blue-900 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors mt-auto"
              >
                Apply to Volunteer
              </NavigationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make a difference? Here's how to join our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-white">
                1
              </div>
              <h3 className="font-bold mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">
                Fill out our online application with your information and
                availability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-white">
                2
              </div>
              <h3 className="font-bold mb-2">Interview Process</h3>
              <p className="text-sm text-gray-600">
                Meet with our team to discuss your experience and passion for
                caregiving
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-white">
                3
              </div>
              <h3 className="font-bold mb-2">Background Check</h3>
              <p className="text-sm text-gray-600">
                Complete background screening and reference verification
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-white">
                4
              </div>
              <h3 className="font-bold mb-2">Welcome & Training</h3>
              <p className="text-sm text-gray-600">
                Join our team with comprehensive orientation and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              What We Look For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek team members who share our core values and commitment to
              compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Compassion First
              </h3>
              <p className="text-gray-600">
                Lead with empathy and kindness in every interaction
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Reliability
              </h3>
              <p className="text-gray-600">
                Consistent, dependable service our clients can count on
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honor honesty, transparency, and respect in all we do
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Communication
              </h3>
              <p className="text-gray-600">
                Clear, caring communication with clients and team members
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Flexibility
              </h3>
              <p className="text-gray-600">
                Adapt to changing needs while maintaining quality care
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Community Spirit
              </h3>
              <p className="text-gray-600">
                Care about service to others and improving lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our team and be part of a mission that transforms lives every
            day. Apply today and start your journey with Mariposa Home Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavigationButton
              url="https://www.linkedin.com/company/mariposa-home-care/jobs/"
              openInNewTab={true}
              className="bg-orange-500 border-2 border-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:text-orange-500"
            >
              Submit Application
            </NavigationButton>
            <PhoneLink
              displayText="Call (612) 400-4532"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
