import { Link } from "react-router-dom";
import {
  Heart,
  Calendar,
  ChefHat,
  Package,
  Apple,
  Briefcase,
  ShoppingCart,
  Users,
  Scissors,
  Moon,
  Car,
  MapPin,
  Baby,
} from "lucide-react";
import Pricing from "../../components/Pricing";
import newFamilyImg from "../../assets/images/new-family.jpeg";

const Families = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-orange to-orange-600 text-white py-12 pt-32 lg:pt-40 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
                  {" "}
                  Serving families since 2025
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                New Family
                <span className="block text-yellow-200">Support</span>
              </h1>

              <p className="text-xl text-orange-100 mb-8 max-w-2xl lg:mx-0 mx-auto">
                Compassionate care for new mothers and growing families during
                life's most precious and challenging moments.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/contact"
                  className="bg-white text-mariposa-orange border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100 hover:scale-105"
                >
                  Get Your Free 30-Min Consultation
                </Link>
                <a
                  href="tel:+16124004532"
                  className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-mariposa-orange transition-all duration-300"
                >
                  Call Now: (612) 400-4532
                </a>
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
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Baby className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-orange-100 mb-6">
                    Join hundreds of families who've found peace of mind with
                    our support.
                  </p>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">
                      85%
                    </div>
                    <p className="text-sm">
                      of families see immediate stress relief
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Facts Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.6) 100%), url('${newFamilyImg}')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              Supporting New Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every family's journey is unique, but these challenges are common.
              We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Need Extra Support
              </h3>
              <p className="text-gray-600">
                85% of new parents need additional support during their first
                months. Our care provides the helping hands you need.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">72%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Feel Overwhelmed
              </h3>
              <p className="text-gray-600">
                Transitions can feel overwhelming for 72% of families. We bring
                calm, organization, and emotional support.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                Benefit from Care
              </h3>
              <p className="text-gray-600">
                90% of families report improved wellbeing with professional
                support during their transition to parenthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mariposa-navy mb-6">
              We're Here When You Feel...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              New parenthood brings incredible joy and overwhelming challenges.
              You don't have to navigate this alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                "I'm trying to hold everything together—and I'm falling apart."
              </h3>
              <p className="text-gray-600 mb-4">
                Feeding schedules, sleep deprivation, emotions all over the
                place...it's a lot.
              </p>
              <p className="text-mariposa-orange font-semibold">
                We show up lovingly and without judgment—lightening your load so
                you can find balance again.
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                "I'm so tired, I could cry. I just need a break."
              </h3>
              <p className="text-gray-600 mb-4">
                The early weeks with a baby can feel beautiful—and brutal.
              </p>
              <p className="text-mariposa-orange font-semibold">
                Mariposa is that calming, capable presence who folds the
                laundry, helps prepare meals, or simply reminds you: you are
                doing great!
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                "It feels like I'm doing this alone."
              </h3>
              <p className="text-gray-600 mb-4">
                Maybe family is far away, or maybe they don't quite understand.
              </p>
              <p className="text-mariposa-orange font-semibold">
                Mariposa caregivers are like an extra pair of hands and a kind
                heart— the kind of help that doesn't need asking.
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
                "We are supposed to enjoy this time—but we are drowning."
              </h3>
              <p className="text-gray-600 mb-4">
                When support has tapered off, or when you're just tired—it can
                feel overwhelming.
              </p>
              <p className="text-mariposa-orange font-semibold">
                Mariposa brings relief and rhythm to the chaos, helping your
                family rediscover joy, connection, and calm.
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
              New Family Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored to help new families thrive during
              those precious early weeks and months.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Emotional Support
              </h3>
              <p className="text-gray-600">
                Compassionate listening and emotional wellness support during
                your transition
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Family Scheduling and Alarms
              </h3>
              <p className="text-gray-600">
                Help organizing schedules and setting reminders for important
                family routines
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Meal Prep - Frozen Meals
              </h3>
              <p className="text-gray-600">
                Nutritious freezer meal preparation for busy new families
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Baby Gear Returns/Exchange
              </h3>
              <p className="text-gray-600">
                Assistance with returning or exchanging baby items and gear
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Snack Preparation
              </h3>
              <p className="text-gray-600">
                Healthy snack preparation to keep new parents nourished and
                energized
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Organization of Baby Supplies & Diaper Bags
              </h3>
              <p className="text-gray-600">
                Setting up and organizing baby gear, supplies, and diaper bags
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Grocery Planning
              </h3>
              <p className="text-gray-600">
                Complete grocery planning and meal coordination for your
                family's needs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Gentle Encouragement and Emotional Companionship
              </h3>
              <p className="text-gray-600">
                Warm companionship and gentle encouragement during your
                parenting journey
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Grooming Assistance
              </h3>
              <p className="text-gray-600">
                Personal grooming assistance when self-care feels overwhelming
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Support Through New Parent Rest and Recovery
              </h3>
              <p className="text-gray-600">
                Gentle care and assistance during postpartum recovery and rest
                periods
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Grocery Shopping, Pharmacy Pickups, and Basic Errands
              </h3>
              <p className="text-gray-600">
                Complete errand assistance including shopping and pharmacy runs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Light Event Help - First Doctor's Appointment Transportation,
                First Shopping Trip
              </h3>
              <p className="text-gray-600">
                Gentle assistance with important first outings and appointments
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-mariposa-orange rounded-lg flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-mariposa-navy mb-3">
                Help with Breastfeeding Set-up (Positioning Water/Snacks)
              </h3>
              <p className="text-gray-600">
                Support with positioning, comfort setup, and feeding assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-mariposa-navy mb-4">
              You Focus on Healing... We Handle the Rest
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Note:</strong> Services do not include deep cleaning,
              giving medical advice, or providing childcare services. Our
              companion care focuses on support, organization, and emotional
              wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <Pricing variant="families" />

      {/* CTA Section */}
      <section className="py-20 bg-mariposa-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get the Support You Deserve?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how we can help
            your family thrive during this beautiful, challenging time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-mariposa-orange border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+16124004532"
              className="bg-mariposa-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all duration-300"
            >
              Call (612) 400-4532
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Families;
