import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import "./Contact.css";

const WHATSAPP_NUMBER = "919442225656"; // +91 9442225656

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message }

  useEffect(() => {
    document.title = "Contact Us | SS International Group";
  }, []);

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // ── Show toast helper ───────────────────────────────────────────────────────
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4500);
  };

  // ── Submit → WhatsApp ───────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Build formatted message
    const waMessage =
      `*New Website Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    // Small delay for loading feedback, then open WhatsApp
    setTimeout(() => {
      window.open(waURL, "_blank", "noopener,noreferrer");
      setIsLoading(false);
      showToast("success", "WhatsApp opened! Your message is ready to send.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }, 800);
  };

  return (
    <div className="page-wrapper pt-20">
      {/* ── Toast Notification ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              position: "fixed",
              top: "80px",
              right: "24px",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 22px",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              fontWeight: 600,
              fontSize: "0.95rem",
              background: toast.type === "success"
                ? "linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#fff",
              maxWidth: "360px",
            }}
          >
            {toast.type === "success"
              ? <CheckCircle size={20} />
              : <AlertCircle size={20} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
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

      {/* ── Main Grid ──────────────────────────────────────────────────────── */}
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
                    <p>69C8+MGJ, Perumanallur,</p>
                    <p>Tamil Nadu 641666, India</p>
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <a
                href="https://maps.google.com/?q=69C8%2BMGJ,+Perumanallur,+Tamil+Nadu+641666,+India"
                target="_blank"
                rel="noreferrer"
                className="map-embed-container"
              >
                <div className="map-overlay">
                  <div className="map-btn">
                    <MapPin size={18} /> View on Google Maps
                  </div>
                </div>
              </a>
            </motion.div>

            {/* ── Contact Form ─────────────────────────────────────────────── */}
            <motion.div
              className="card contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <h3>Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={errors.name ? { borderColor: "#ef4444" } : {}}
                  />
                  {errors.name && (
                    <span style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "4px", display: "block" }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      style={errors.email ? { borderColor: "#ef4444" } : {}}
                    />
                    {errors.email && (
                      <span style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "4px", display: "block" }}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 94422 25656"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    style={errors.subject ? { borderColor: "#ef4444" } : {}}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="SS Builders Inquiry">SS Builders Inquiry</option>
                    <option value="SS Real Estate Inquiry">SS Real Estate Inquiry</option>
                    <option value="SS Jewellery Inquiry">SS Jewellery Inquiry</option>
                    <option value="SS Garments Inquiry">SS Garments Inquiry</option>
                    <option value="SS Finance Inquiry">SS Finance Inquiry</option>
                    <option value="SS Organic Products Inquiry">SS Organic Products Inquiry</option>
                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  </select>
                  {errors.subject && (
                    <span style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "4px", display: "block" }}>
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    style={errors.message ? { borderColor: "#ef4444" } : {}}
                  ></textarea>
                  {errors.message && (
                    <span style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: "4px", display: "block" }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* WhatsApp info note */}
                <p style={{
                  fontSize: "0.82rem",
                  color: "#6b7280",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0 0",
                }}>
                  <MessageCircle size={14} style={{ color: "#25D366", flexShrink: 0 }} />
                  Clicking "Send Message" will open WhatsApp with your details pre-filled.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full mt-4"
                  disabled={isLoading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    opacity: isLoading ? 0.8 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spinner keyframe (inline so it always works) */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Contact;
