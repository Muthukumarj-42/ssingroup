import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | SS International Group";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // Formspree requires normal submission. Do not prevent default.
  };

  return (
    <div className="contact-page pt-20">
      <section className="bg-primary text-white py-16 mt-16 text-center">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            We operate globally. Reach out to our team for inquiries,
            partnerships, or support.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info & Map */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact-card bg-white shadow-lg rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-accent mb-6">
                  Global Headquarters
                </h3>

                <div className="info-item mb-6 flex items-start gap-4">
                  <div className="icon-box bg-blue-50 text-secondary p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">
                      Address
                    </h4>
                    <p className="text-gray-600">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="info-item mb-6 flex items-start gap-4">
                  <div className="icon-box bg-blue-50 text-secondary p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">
                      Phone
                    </h4>
                    <p className="text-gray-600">+91 944 222 56 56</p>
                  </div>
                </div>

                <div className="info-item flex items-start gap-4">
                  <div className="icon-box bg-blue-50 text-secondary p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">
                      Email
                    </h4>
                    <p className="text-gray-600">contact@ssingroup.com</p>
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <a
                  href="https://wa.me/971509876543"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>

              {/* Minimal Map UI Simulation */}
              <div className="map-embed-container rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center brightness-90">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 text-primary">
                    <MapPin size={18} /> View on Google Maps
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper bg-white shadow-lg rounded-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="success-message bg-green-50 text-green-700 p-6 rounded-lg text-center border border-green-200">
                  <p className="text-xl font-bold mb-2">Thank You!</p>
                  <p>
                    Your message has been successfully sent. Our team will get
                    back to you shortly.
                  </p>
                </div>
              ) : (
                <form action="https://formspree.io/f/mvzwrlzd" method="POST" onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Builders Inquiry">
                        SS Builders Inquiry
                      </option>
                      <option value="Real Estate Inquiry">
                        SS Real Estate Inquiry
                      </option>
                      <option value="Jewellery Inquiry">
                        SS Jewellery Inquiry
                      </option>
                      <option value="Garments Inquiry">
                        SS Garments Inquiry
                      </option>
                      <option value="Finance Inquiry">
                        SS Finance Inquiry
                      </option>
                      <option value="Organic Products Inquiry">
                        SS Organic Products Inquiry
                      </option>
                      <option value="General Inquiry">
                        General Corporate Inquiry
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full flex justify-center items-center gap-2 text-lg py-3 mt-4"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
