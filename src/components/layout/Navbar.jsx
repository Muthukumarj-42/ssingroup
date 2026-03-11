import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../../assets/ssinlogo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const divisions = [
        { name: 'SS Builders', path: '/division/builders' },
        { name: 'SS Real Estate', path: '/division/real-estate' },
        { name: 'SS Jewellery', path: '/division/jewellery' },
        { name: 'SS Garments', path: '/division/garments' },
        { name: 'SS Finance', path: '/division/finance' },
        { name: 'SS Organic Products', path: '/division/organic-products' }
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo nav-brand">
                    <img src={logoImg} alt="SS International Group Logo" className="brand-logo-img" />
                    <h1 className="brand-title">SS <span>International Group</span></h1>
                </Link>

                <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About Us</Link>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className="dropdown-trigger">
                            Divisions <ChevronDown size={16} />
                        </span>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            {divisions.map((div, idx) => (
                                <Link key={idx} to={div.path}>{div.name}</Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
                </nav>

                <div className="nav-actions">
                    <Link to="/contact" className="btn btn-primary nav-btn">Get in Touch</Link>
                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
