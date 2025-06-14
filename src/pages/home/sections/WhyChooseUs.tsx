const WhyChooseUs = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      ),
      title: "Compassion First",
      description: "We lead with empathy and kindness in every interaction, treating each client with dignity and respect."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
        </svg>
      ),
      title: "Excellence in Service",
      description: "We are dedicated to delivering reliable, high-quality care tailored to each individual's needs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Integrity & Trust",
      description: "We honor honesty, transparency, and respect in all we do, building lasting relationships with our clients."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
        </svg>
      ),
      title: "Empowerment",
      description: "We encourage independence and confidence for those we serve and those who serve with us."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,18.5L10.5,17H7.5C6.67,17 6,16.33 6,15.5V6.5C6,5.67 6.67,5 7.5,5H16.5C17.33,5 18,5.67 18,6.5V15.5C18,16.33 17.33,17 16.5,17H13.5L12,18.5Z"/>
        </svg>
      ),
      title: "Celebration of Life's Seasons",
      description: "We embrace and honor the unique journeys of every stage of life with joy and understanding."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      title: "Personalized Matchmaking",
      description: "Our detailed matchmaking process ensures you're aligned with caregivers who truly understand your needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mariposa-navy mb-6">
            Why Choose Mariposa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do, creating a supportive and nurturing 
            environment that builds lasting relationships within the communities we serve.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mariposa-green to-mariposa-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Story Section */}
        <div className="bg-gradient-to-r from-mariposa-navy to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Founder's Story</h3>
              <blockquote className="text-lg italic mb-6">
                "Mariposa Home Care was born from love, loss, and a calling I couldn't ignore. 
                I cared for both of my parents before they passed away, which gave me the inspiration 
                for this company. I could not have done it without a helping hand and a loving heart 
                standing beside me."
              </blockquote>
              <p className="text-gray-300">
                The name <em>Mariposa</em>—Spanish for butterfly—was inspired by our founder's mother's 
                favorite symbol of beauty and transformation. That's what we strive to be: a source of 
                light during life's most tender transitions.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-24 h-24 bg-mariposa-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-300">
                  To provide compassionate, personalized in-home care that supports and uplifts 
                  the lives of older adults and growing families.
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