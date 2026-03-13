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
    <div className="page-wrapper pt-20">
      <section className="contact-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Contact Us
          </motion.h1>
          <p>
            We operate globally. Reach out to our team for inquiries,
            partnerships, or support.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info & Map */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <div className="card contact-card">
                <h3>Global Headquarters</h3>

                <div className="info-item">
                  <div className="icon-box animate-pulse-glow">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 944 222 56 56</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>contact@ssingroup.com</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/9442225656"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>

              {/* Minimal Map UI Simulation */}
              <div className="map-embed-container">
                <div className="map-overlay">
                  <div className="map-btn">
                    <MapPin size={18} /> View on Google Maps
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="card contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <h3>Send Us a Message</h3>

              {submitted ? (
                <div className="success-message">
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

                  <div className="grid grid-cols-2 gap-8">
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
                      <option value="Builders Inquiry">SS Builders Inquiry</option>
                      <option value="Real Estate Inquiry">SS Real Estate Inquiry</option>
                      <option value="Jewellery Inquiry">SS Jewellery Inquiry</option>
                      <option value="Garments Inquiry">SS Garments Inquiry</option>
                      <option value="Finance Inquiry">SS Finance Inquiry</option>
                      <option value="Organic Products Inquiry">SS Organic Products Inquiry</option>
                      <option value="General Inquiry">General Corporate Inquiry</option>
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

                  <button type="submit" className="btn btn-primary w-full mt-4">
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
