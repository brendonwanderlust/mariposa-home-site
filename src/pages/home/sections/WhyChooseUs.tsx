import {
  BicepsFlexed,
  CheckCircle,
  Handshake,
  Heart,
  PartyPopper,
  Shield,
  Star,
} from "lucide-react";
import seniorsOverTeaImg from "../../../assets/images/seniors-over-tea.jpg";

const WhyChooseUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion First",
      description:
        "We lead with empathy and kindness in every interaction, treating each client with dignity and respect.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Excellence in Service",
      description:
        "We are dedicated to delivering reliable, high-quality care tailored to each individual's needs.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity & Trust",
      description:
        "We honor honesty, transparency, and respect in all we do, building lasting relationships with our clients.",
    },
    {
      icon: <BicepsFlexed className="w-8 h-8" />,
      title: "Empowerment",
      description:
        "We encourage independence and confidence for those we serve and those who serve with us.",
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Celebration of Life's Seasons",
      description:
        "We embrace and honor the unique journeys of every stage of life with joy and understanding.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Personalized Matchmaking",
      description:
        "Our detailed matchmaking process ensures you're aligned with caregivers who truly understand your needs.",
    },
  ];

  const ValueCard = ({ value, index }: { value: any; index: number }) => (
    <div
      className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm hover:bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white shadow-lg hover:shadow-2xl border border-gray-100"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-current transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-current transform -translate-x-12 translate-y-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-mariposa-navy text-white shadow-lg">
          {value.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center leading-tight mb-4 text-mariposa-navy">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-center leading-relaxed text-gray-600">
          {value.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 250, 252, 0.4) 30%, rgba(255, 255, 255, 0.95) 70%, rgba(248, 250, 252, 0.9) 100%), url('${seniorsOverTeaImg}')`,
        }}
      />

      {/* Additional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-mariposa-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-mariposa-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-mariposa-navy mb-6 leading-tight drop-shadow-sm">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mariposa-orange to-mariposa-green">
              Mariposa?
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            Our core values guide everything we do, creating a supportive and
            nurturing environment that builds lasting relationships within the
            communities we serve.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-mariposa-navy via-blue-900 to-mariposa-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Care You Can Trust
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every interaction,
              every service, and every relationship we build.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mariposa-orange mb-2">
                  100%
                </div>
                <p className="text-gray-300">Personalized Care Plans</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mariposa-green mb-2">
                  24/7
                </div>
                <p className="text-gray-300">Support Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  5★
                </div>
                <p className="text-gray-300">Compassionate Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story Section */}
        <div className="bg-gradient-to-r from-mariposa-navy to-blue-900 rounded-3xl p-8 lg:p-12 text-white mt-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Founder's Story</h3>
              <blockquote className="text-lg italic mb-6">
                "Mariposa Home Care was born from love, loss, and a calling I
                couldn't ignore. I cared for both of my parents before they
                passed away, which gave me the inspiration for this company. I
                could not have done it without a helping hand and a loving heart
                standing beside me."
              </blockquote>
              <p className="text-gray-300">
                The name <em>Mariposa</em>—Spanish for butterfly—was inspired by
                our founder's mother's favorite symbol of beauty and
                transformation. That's what we strive to be: a source of light
                during life's most tender transitions.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-24 h-24 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-300">
                  To provide compassionate, personalized in-home care that
                  supports and uplifts the lives of older adults and growing
                  families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
