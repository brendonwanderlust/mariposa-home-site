import { Globe, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    serviceType: "",
    preferredContact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create the subject line based on service type
      const serviceTypeMap: Record<string, string> = {
        "senior-care": "Senior Care Inquiry",
        "new-family": "New Family Support Inquiry",
        "not-sure": "General Care Inquiry"
      };

      const subject = serviceTypeMap[formData.serviceType] || "Contact Form Submission";

      // Prepare the data for the Firebase function
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject,
        message: `Service Type: ${formData.serviceType}
Phone: ${formData.phone}
Zip Code: ${formData.zipCode}
Preferred Contact Time: ${formData.preferredContact || "No preference"}

Message:
${formData.message}`
      };

      // Call the Firebase function
      const response = await fetch('https://us-central1-mariposa-home-care.cloudfunctions.net/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Thank you for your message! We'll contact you within 24 hours to schedule your free consultation.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          zipCode: "",
          serviceType: "",
          preferredContact: "",
          message: "",
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or call us directly at (612) 400-4532.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mariposa-navy to-blue-900 text-white pb-5 pt-40 lg:pt-48 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Started Today
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Schedule your free in-home consultation and discover how Mariposa
              Home Care can support you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-mariposa-navy mb-4">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you within 24 hours
                  to schedule your free in-home consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage && (
                  <div className={`p-4 rounded-xl ${submitMessage.includes('error') || submitMessage.includes('Sorry') 
                    ? 'bg-red-50 text-red-700 border border-red-200' 
                    : 'bg-green-50 text-green-700 border border-green-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-mariposa-navy mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-mariposa-orange`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-mariposa-navy mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-mariposa-orange`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-mariposa-navy mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-mariposa-orange`}
                      placeholder="(612) 555-0123"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Zip Code */}
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-semibold text-mariposa-navy mb-2"
                  >
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.zipCode ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-mariposa-orange`}
                    placeholder="55401"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-semibold text-mariposa-navy mb-2"
                  >
                    Type of Service *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.serviceType ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-mariposa-orange`}
                  >
                    <option value="">Select service type</option>
                    <option value="senior-care">Senior Care</option>
                    <option value="new-family">New Family Support</option>
                    <option value="not-sure">Not Sure - Need Guidance</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Preferred Contact Time */}
                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block text-sm font-semibold text-mariposa-navy mb-2"
                  >
                    Preferred Contact Time (Optional)
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mariposa-orange"
                  >
                    <option value="">No preference</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-mariposa-navy mb-2"
                  >
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mariposa-orange"
                    placeholder="Tell us about your specific needs or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-mariposa-orange hover:bg-mariposa-orange/90 hover:shadow-xl hover:scale-[1.02]'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by Mariposa
                  Home Care to schedule your free consultation.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 mt-8 lg:mt-0">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-mariposa-green to-green-600 rounded-3xl p-4 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Us Directly</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <a
                        href="tel:+16124004532"
                        className="text-xl font-bold hover:text-green-200"
                      >
                        (612) 400-4532
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Our Website</p>
                      <a
                        href="https://www.mariposahomecare.com"
                        className="text-xl font-bold hover:text-green-200"
                      >
                        www.mariposahomecare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-xl font-bold mb-2">
                        Twin Cities Metro Area
                      </p>
                      <p className="text-sm text-green-100">
                        We serve Anoka, Carver, Dakota, Hennepin, Ramsey, Scott,
                        and Washington counties. Please call to inquire about
                        additional locations and if we have service in your
                        area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-lg font-semibold mb-2">
                    English & Spanish Services
                  </p>
                  <p className="text-green-100">Hablamos Español</p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg border border-mariposa-navy/10">
                <h3 className="text-2xl font-bold text-mariposa-navy mb-6">
                  What Happens Next?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-mariposa-navy rounded-full flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-mariposa-navy">
                        We'll Call You
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Within 24 hours to discuss your needs and schedule your
                        free consultation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-mariposa-navy rounded-full flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-mariposa-navy">
                        In-Home Visit
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We visit you at home to understand your specific needs
                        and preferences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-mariposa-navy rounded-full flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-mariposa-navy">
                        Personalized Plan
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We create a customized care plan and match you with the
                        perfect caregiver
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-mariposa-navy rounded-full flex items-center justify-center mr-4 mt-1 text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-mariposa-navy">
                        Care Begins
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Start receiving compassionate, personalized care in the
                        comfort of your home
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
