import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Projects.css';

const allProjects = [
    // Builders
    { id: 1, title: 'Luxury Residency Project', category: 'builders', img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&q=80' },
    { id: 2, title: 'Commercial Plaza Skyfall', category: 'builders', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
    { id: 3, title: 'Downtown Infrastructure', category: 'builders', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' },
    
    // Real Estate
    { id: 4, title: 'Emerald Township', category: 'real-estate', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
    { id: 5, title: 'Sea View Villas', category: 'real-estate', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
    { id: 6, title: 'Aspen Modern Condos', category: 'real-estate', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80' },
    
    // Jewellery
    { id: 7, title: 'Bridal Diamond Collection', category: 'jewellery', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
    { id: 8, title: 'Heritage Gold Series', category: 'jewellery', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
    { id: 9, title: 'Platinum Elegance', category: 'jewellery', img: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80' },
    
    // Garments
    { id: 10, title: 'Summer Linen Line', category: 'garments', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80' },
    { id: 11, title: 'Corporate Suiting', category: 'garments', img: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80' },
    { id: 12, title: 'Premium Cotton Export', category: 'garments', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80' },
    
    // Finance
    { id: 13, title: 'Corporate Wealth Fund', category: 'finance', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
    { id: 14, title: 'Global Tech ETF Tracking', category: 'finance', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
    { id: 15, title: 'Regional Analytics Hub', category: 'finance', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' },
    
    // Organic Products
    { id: 16, title: 'Organic Superfarms', category: 'organic-products', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80' },
    { id: 17, title: 'Natural Grocery Line', category: 'organic-products', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80' },
    { id: 18, title: 'Farm-to-Table Supply', category: 'organic-products', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80' },
];

const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'builders', label: 'Builders' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'jewellery', label: 'Jewellery' },
    { value: 'garments', label: 'Garments' },
    { value: 'finance', label: 'Finance' },
    { value: 'organic-products', label: 'Organic Products' }
];

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxImg, setLightboxImg] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        document.title = "Our Projects | SS International Group";
    }, []);

    const filteredProjects = filter === 'all'
        ? (showAll ? allProjects : allProjects.filter((p, index, self) => 
            index === self.findIndex((t) => (t.category === p.category))
          ))
        : allProjects.filter(p => p.category === filter);

    const openLightbox = (imgSrc) => {
        setLightboxImg(imgSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImg(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="projects-page pt-20">
            <section className="bg-primary text-white py-16 mt-16 text-center">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Project Showcase
                    </motion.h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        A comprehensive gallery of our finest work across all global divisions.
                    </p>
                </div>
            </section>

            <section className="section bg-light min-h-[70vh]">
                <div className="container">

                    {/* Filters */}
                    <div className="portfolio-filters mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                                onClick={() => setFilter(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="portfolio-grid">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={project.id}
                                    className="portfolio-item"
                                    onClick={() => openLightbox(project.img)}
                                >
                                    <img src={project.img} alt={project.title} />
                                    <div className="portfolio-overlay">
                                        <ZoomIn size={40} className="zoom-icon" />
                                        <h4>{project.title}</h4>
                                        <span className="capitalize text-secondary font-semibold">
                                            {project.category.replace('-', ' ')}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredProjects.length === 0 && (
                            <div className="text-center w-full py-12 text-gray-500 text-lg col-span-full">
                                No projects found in this category.
                            </div>
                        )}
                    </motion.div>

                    {/* View All Button */}
                    {filter === 'all' && (
                        <div className="text-center mt-20 mb-8 overflow-hidden">
                            <button 
                                onClick={() => setShowAll(!showAll)} 
                                className="btn btn-primary relative z-10"
                                style={{ padding: '12px 30px', fontSize: '1rem', borderRadius: '30px' }}
                            >
                                {showAll ? 'Show Less' : 'View All Projects'}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={closeLightbox}
                    >
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={36} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={lightboxImg}
                            alt="Enlarged Project"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
