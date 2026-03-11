import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/ssinlogo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-primary">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col about-col">
                        <Link to="/" className="footer-logo">
                            <img src={logoImg} alt="SS International Group Logo" className="footer-logo-img" />
                            <h2 className="footer-brand-title">SS <span>International Group</span></h2>
                        </Link>
                        <p>
                            Building Global Businesses Across Industries. SS International Group is a diversified international business group operating in India, UAE, and USA.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col links-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/"><ArrowRight size={16} /> Home</Link></li>
                            <li><Link to="/about"><ArrowRight size={16} /> About Us</Link></li>
                            <li><Link to="/projects"><ArrowRight size={16} /> Projects Gallery</Link></li>
                            <li><Link to="/contact"><ArrowRight size={16} /> Contact Us</Link></li>
                            <li><Link to="/careers"><ArrowRight size={16} /> Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col divisions-col">
                        <h3>Our Divisions</h3>
                        <ul>
                            <li><Link to="/division/builders"><ArrowRight size={16} /> SS Builders</Link></li>
                            <li><Link to="/division/real-estate"><ArrowRight size={16} /> SS Real Estate</Link></li>
                            <li><Link to="/division/jewellery"><ArrowRight size={16} /> SS Jewellery</Link></li>
                            <li><Link to="/division/garments"><ArrowRight size={16} /> SS Garments</Link></li>
                            <li><Link to="/division/finance"><ArrowRight size={16} /> SS Finance</Link></li>
                            <li><Link to="/division/organic-products"><ArrowRight size={16} /> SS Organic Products</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h3>Contact Info</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={20} className="icon" />
                                <span>
                                    <strong>Headquarters:</strong><br />
                                    Tamil Nadu, India
                                </span>
                            </li>
                            <li>
                                <Phone size={20} className="icon" />
                                <span>+91 944 222 56 56</span>
                            </li>
                            <li>
                                <Mail size={20} className="icon" />
                                <span>info@ssingroup.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SS International Group. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
