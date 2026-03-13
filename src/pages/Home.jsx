import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home as HomeIcon, Gem, Shirt, Landmark, Leaf, MapPin, Quote } from 'lucide-react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => document.body.classList.remove('home-page');
    }, []);

    const divisions = [
        { title: 'SS Builders', icon: <Building2 size={32} />, desc: 'Construction & Infrastructure', link: '/division/builders' },
        { title: 'SS Real Estate', icon: <HomeIcon size={32} />, desc: 'Property Development and Land Investment', link: '/division/real-estate' },
        { title: 'SS Jewellery', icon: <Gem size={32} />, desc: 'Jewellery Manufacturing and Sales', link: '/division/jewellery' },
        { title: 'SS Garments', icon: <Shirt size={32} />, desc: 'Textile and Apparel Manufacturing', link: '/division/garments' },
        { title: 'SS Finance', icon: <Landmark size={32} />, desc: 'Financial Services and Investment', link: '/division/finance' },
        { title: 'SS Organic Products', icon: <Leaf size={32} />, desc: 'Organic Food and Agricultural Products', link: '/division/organic-products' },
    ];

    const projects = [
        { title: 'Luxury Residency', category: 'Real Estate', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
        { title: 'Commercial Plaza', category: 'Builders', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
        { title: 'Diamond Collection', category: 'Jewellery', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
        { title: 'Summer Line', category: 'Garments', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80' },
        { title: 'Organic Farms', category: 'Organic Products', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80' },
        { title: 'Investment Portfolio', category: 'Finance', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>SS International Group</h1>
                        <p className="hero-subtitle">Building Global Businesses Across Industries</p>
                        <div className="global-presence">
                            <span>India</span> <span className="divider">|</span> <span>UAE</span> <span className="divider">|</span> <span>USA</span>
                        </div>
                        <div className="hero-actions">
                            <Link to="/about" className="btn btn-primary">Explore Our Businesses</Link>
                            <Link to="/contact" className="btn btn-white">Contact Us</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="section about-summary">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>About The Group</h2>
                            <div className="heading-line"></div>
                            <p>
                                SS International Group is a premier diversified business conglomerate with a strong global footprint.
                                With operations spanning across India, the United Arab Emirates, and the United States, we have established
                                ourselves as leaders in multiple sectors.
                            </p>
                            <p>
                                Our commitment to excellence, innovation, and sustainable practices drives our success across construction,
                                real estate, jewellery, garments, finance, and organic products. We strive to create lasting value for our
                                stakeholders while contributing positively to the communities we serve.
                            </p>
                            <Link to="/about" className="btn btn-secondary mt-4">Read Full Story <ArrowRight size={18} className="ml-2" /></Link>
                        </motion.div>
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Corporate Office" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Business Divisions Section */}
            <section className="section section-light divisions">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Business Divisions</h2>
                        <div className="heading-line center"></div>
                        <p>Driving growth and innovation across diverse industries worldwide.</p>
                    </div>

                    <div className="divisions-grid">
                        {divisions.map((div, idx) => (
                            <motion.div
                                key={idx}
                                className="division-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: idx * 0.1,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20
                                }}
                            >
                                <div className="card-icon">{div.icon}</div>
                                <h3>{div.title}</h3>
                                <p>{div.desc}</p>
                                <Link to={div.link} className="card-link">Explore <ArrowRight size={16} /></Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section projects">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Featured Projects & Portfolio</h2>
                        <div className="heading-line center"></div>
                        <p>A glimpse into our world-class developments and premium products.</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="project-card"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: idx * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }}
                            >
                                <div className="project-img">
                                    <img src={project.img} alt={project.title} />
                                    <div className="project-overlay">
                                        <span className="project-category">{project.category}</span>
                                        <h4>{project.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/projects" className="btn btn-primary">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section section-primary global-map">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Global Presence</h2>
                        <div className="heading-line center bg-white"></div>
                        <p>Operating across continents to deliver excellence globally.</p>
                    </div>

                    <div className="map-wrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="world-map-img" />
                        <div className="map-point us">
                            <MapPin size={24} />
                            <span>USA</span>
                        </div>
                        <div className="map-point uae">
                            <MapPin size={24} />
                            <span>UAE</span>
                        </div>
                        <div className="map-point ind">
                            <MapPin size={24} />
                            <span>India</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Client Testimonials</h2>
                        <div className="heading-line center"></div>
                    </div>

                    <div className="testimonials-grid">
                        <motion.div
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Quote size={40} className="quote-icon" />
                            <p className="testimonial-text">"SS Builders delivered our commercial project ahead of schedule. Their attention to detail and professional approach is unmatched in the industry."</p>
                            <div className="client-info">
                                <h4>Rahul Sharma</h4>
                                <span>Director, TechPark</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Quote size={40} className="quote-icon" />
                            <p className="testimonial-text">"The quality of SS Jewellery is exceptional. We've been sourcing from them for 5 years and their craftsmanship continues to amaze our clientele."</p>
                            <div className="client-info">
                                <h4>Sarah Jenkins</h4>
                                <span>Boutique Owner, Dubai</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Ready to Partner with Us?</h2>
                    <p>Contact our team today to discuss how we can build success together.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Get in Touch Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
