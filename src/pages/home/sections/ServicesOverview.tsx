import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: "Senior Companion Care",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H17c-.8 0-1.5.7-1.5 1.5v6c0 1.1.9 2 2 2h.5v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-4c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM5.5 6C6.33 6 7 5.33 7 4.5S6.33 3 5.5 3 4 3.67 4 4.5 4.67 6 5.5 6zm2.5 16v-6H10l-1.54-4.63A1.5 1.5 0 0 0 7 10H5.5c-.8 0-1.5.7-1.5 1.5v6c0 1.1.9 2 2 2H6.5v6h1.5z"/>
        </svg>
      ),
      description: "Companionship and socialization to combat isolation and loneliness. Our care companions provide warm support and meaningful connection.",
      highlights: ["Companionship & socialization", "Emotional support", "Activity assistance", "Safety monitoring"]
    },
    {
      title: "Personal Care Assistance",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1A3,3 0 0,1 15,4V7A3,3 0 0,1 12,10A3,3 0 0,1 9,7V4A3,3 0 0,1 12,1M12,3A1,1 0 0,0 11,4V7A1,1 0 0,0 12,8A1,1 0 0,0 13,7V4A1,1 0 0,0 12,3M12,12A7,7 0 0,1 19,19V22H17V19A5,5 0 0,0 12,14A5,5 0 0,0 7,19V22H5V19A7,7 0 0,1 12,12Z"/>
        </svg>
      ),
      description: "Assistance with daily activities to help maintain independence and dignity in the comfort of your own home.",
      highlights: ["Bathing & oral hygiene", "Meal preparation", "Medication reminders", "Light housekeeping"]
    },
    {
      title: "Newborn & New Family Support",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M14.5,6.5C14.5,7.06 14.35,7.58 14.08,8H9.92C9.65,7.58 9.5,7.06 9.5,6.5A2.5,2.5 0 0,1 12,4A2.5,2.5 0 0,1 14.5,6.5M7,9A2.5,2.5 0 0,1 4.5,6.5A2.5,2.5 0 0,1 7,4A2.5,2.5 0 0,1 9.5,6.5A2.5,2.5 0 0,1 7,9M18.5,10C19.11,10 19.69,10.19 20.19,10.5L22,17H20L18.5,12L17,17H15L16.81,10.5C17.31,10.19 17.89,10 18.5,10M12,10A1,1 0 0,1 13,11V22H11V16H10V22H8V11A1,1 0 0,1 9,10H12M7,10C7.61,10 8.19,10.19 8.69,10.5L10.5,17H8.5L7,12L5.5,17H3.5L5.31,10.5C5.81,10.19 6.39,10 7,10Z"/>
        </svg>
      ),
      description: "Support for new mothers and families during the critical early weeks. We help you focus on healing while we handle the rest.",
      highlights: ["Postpartum recovery support", "Baby gear organization", "Meal preparation", "Emotional support"]
    },
    {
      title: "Caregiver Respite",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      description: "Short-term relief for family caregivers. Take time to rest and recharge while your loved one receives quality care.",
      highlights: ["Flexible scheduling", "24-hour care options", "Emergency backup care", "Peace of mind"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mariposa-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer customized hourly assistance with compassionate, reliable care 
            tailored to your specific needs and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-mariposa-green text-white rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-mariposa-navy mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-mariposa-orange rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center bg-mariposa-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;