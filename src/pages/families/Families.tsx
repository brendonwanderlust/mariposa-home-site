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

const Families = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-orange to-orange-600 text-white py-20 pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              New Family Support
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Compassionate care for new mothers and growing families during
              life's most precious and challenging moments.
            </p>
            <Link
              to="/contact"
              className="bg-white text-mariposa-orange border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-100"
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
