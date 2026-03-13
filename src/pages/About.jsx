import React from 'react';
import { motion } from 'framer-motion';
import managingDirectorImg from '../assets/managing director.jpeg';
import './About.css';

const About = () => {
    return (
        <div className="page-wrapper pt-20">
            <section className="about-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        About SS International Group
                    </motion.h1>
                    <p>
                        A legacy of excellence across multiple industries since our inception.
                    </p>
                </div>
            </section>

            <section className="section vision-mission">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-gradient hover:scale-105 transition-transform duration-300 transform origin-left">Our Vision & Mission</h2>
                            <div className="heading-line"></div>
                            <h3>Vision</h3>
                            <p>
                                To be a globally recognized conglomerate that drives sustainable growth, innovation, and positive impact across every industry we operate in.
                            </p>

                            <h3>Mission</h3>
                            <p>
                                To deliver uncompromising quality and value to our customers, while fostering a culture of excellence, integrity, and social responsibility in our workforce and operations worldwide.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team Meeting" className="about-vision-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="text-center">
                        <h2>Leadership</h2>
                        <div className="heading-line center"></div>

                        <div className="leadership-card">
                            <img src={managingDirectorImg} alt="Managing Director" className="leadership-img" />
                            <div className="leadership-info">
                                <h3>MR KUMAR</h3>
                                <span className="leadership-title">Managing Director</span>
                                <p className="leadership-quote">
                                    "At SS International Group, we don't just build businesses; we build trust. Our journey over the decades is a testament to our commitment to excellence, innovation, and most importantly, our people and partners. We look forward to continuing our expansion and creating value globally."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center">
                        <h2>Company Milestones</h2>
                        <div className="heading-line center"></div>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline">
                            <motion.div 
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                            >
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-year">1995</h3>
                                <h4 className="timeline-title">Foundation</h4>
                                <p className="timeline-desc">Established SS Builders as a local construction firm focusing on residential projects.</p>
                            </motion.div>

                            <motion.div 
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            >
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-year">2005</h3>
                                <h4 className="timeline-title">Diversification & Expansion</h4>
                                <p className="timeline-desc">Launched SS Real Estate and expanded operations into the UAE market.</p>
                            </motion.div>

                            <motion.div 
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                            >
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-year">2012</h3>
                                <h4 className="timeline-title">Retail Sectors</h4>
                                <p className="timeline-desc">Initiated SS Jewellery and SS Garments, tapping into luxury retail and apparel manufacturing.</p>
                            </motion.div>

                            <motion.div 
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            >
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-year">2018</h3>
                                <h4 className="timeline-title">Financial & Organic Frontiers</h4>
                                <p className="timeline-desc">Established SS Finance for corporate investment and SS Organic Products to promote healthy, sustainable living.</p>
                            </motion.div>

                            <motion.div 
                                className="timeline-item active"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                            >
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-year">Present</h3>
                                <h4 className="timeline-title">Global Conglomerate</h4>
                                <p className="timeline-desc">Operating robustly across India, UAE, and USA with a unified vision for a sustainable future.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
