import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Image as ImageIcon, Star, X } from 'lucide-react';
import buildersVideo from '../assets/6164052-hd_1920_1080_30fps.mp4';
import './DivisionTemplate.css';

const divisionData = {
    'builders': {
        title: 'SS Builders',
        heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
        description: 'Premier construction and infrastructure development company delivering world-class residential, commercial, and industrial projects.',
        services: ['Commercial Architecture', 'Residential Complexes', 'Industrial Facilities', 'Urban Infrastructure', 'Smart City Development', 'Green Building Solutions'],
        gallery: [
            'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&q=80',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
        ],
        video: buildersVideo
    },
    'real-estate': {
        title: 'SS Real Estate',
        heroImg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
        description: 'Leading property development and land investment firm, specializing in premium residential townships, commercial plazas, and land acquisitions.',
        services: ['Land Acquisition & Legal', 'Township Planning', 'Commercial Real Estate', 'Luxury Villas', 'Property Management', 'Leasing Services'],
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'
        ],
        video: 'https://player.vimeo.com/external/409605335.sd.mp4?s=f52bc5a6d3f23479a9ef1c71261a868f7da8b29c&profile_id=164&oauth2_token_id=57447761' // Real estate
    },
    'jewellery': {
        title: 'SS Jewellery',
        heroImg: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80',
        description: 'Exquisite jewellery manufacturing and sales, crafting timeless pieces of gold, diamonds, and precious metals with cultural heritage and modern aesthetics.',
        services: ['Bespoke Design Services', 'Diamond Trading', 'Gold Bullion Sales', 'Bridal Collections', 'Jewellery Valuations', 'Corporate Gifting'],
        gallery: [
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
            'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
            'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80'
        ],
        video: 'https://player.vimeo.com/external/396655519.sd.mp4?s=d9ff7b0c79ec5c38865618f0f0c0575d31fb84ec&profile_id=164&oauth2_token_id=57447761' // Jewellery
    },
    'garments': {
        title: 'SS Garments',
        heroImg: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80',
        description: 'Global textile and apparel manufacturing hub, delivering high-quality garments from raw cotton processing to finished fashion lines.',
        services: ['Textile Sourcing', 'Premium Apparel Manufacturing', 'Custom Tailoring Lines', 'Sustainable Fashion', 'Global Export Services', 'Uniforms & Corporate Wear'],
        gallery: [
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
            'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80',
            'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80'
        ],
        video: 'https://player.vimeo.com/external/406182236.sd.mp4?s=69d51e88860fecf62c0ba278a2e557147b469eef&profile_id=164&oauth2_token_id=57447761' // Garments sewing
    },
    'finance': {
        title: 'SS Finance',
        heroImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        description: 'Trusted financial services and investment advisory, guiding corporate entities and high net worth individuals towards substantial capital growth.',
        services: ['Wealth Management', 'Corporate Investment', 'Venture Capital', 'Portfolio Management', 'Financial Advisory', 'Market Research & Analytics'],
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80'
        ],
        video: 'https://player.vimeo.com/external/552601768.sd.mp4?s=d312bc4fbb3b37b6058e579737dc8827725ca3ac&profile_id=164&oauth2_token_id=57447761' // Finance graph data
    },
    'organic-products': {
        title: 'SS Organic Products',
        heroImg: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80',
        description: 'Premium organic food and agricultural products, championing farm-to-table sustainability and eco-friendly farming practices.',
        services: ['Organic Farming', 'Agri-product Export', 'Health Foods Distribution', 'Sustainable Packaging', 'Farm Consulting', 'Wholesale Supply'],
        gallery: [
            'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
            'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80'
        ],
        video: 'https://player.vimeo.com/external/388837330.sd.mp4?s=23cd48a1d7f4cbdfbab2c4315259cf36de4fe193&profile_id=164&oauth2_token_id=57447761' // Organic farm
    }
};

const DivisionTemplate = ({ division }) => {
    const data = divisionData[division] || divisionData['builders'];
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    useEffect(() => {
        document.title = `${data.title} | SS International Group`;
    }, [division, data.title]);

    return (
        <div className="division-page">
            {/* Hero Banner */}
            <section
                className="division-hero"
                style={{ backgroundImage: `url(${data.heroImg})` }}
            >
                <div className="division-hero-overlay"></div>
                <div className="container division-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {data.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* Services Component */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2>Our Services</h2>
                        <div className="heading-line center"></div>
                    </div>

                    <div className="services-grid">
                        {data.services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="service-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <CheckCircle2 className="service-icon" size={28} />
                                <h4>{service}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Gallery (Images & Video pseudo-component) */}
            <section className="section padding-top-0">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2>Project Showcase</h2>
                        <div className="heading-line center"></div>
                        <p className="subtitle">Discover our portfolio of excellence</p>
                    </div>

                    <div className="gallery-grid">
                        {/* Show 3 Images */}
                        {data.gallery.map((img, idx) => (
                            <motion.div
                                key={idx}
                                className="gallery-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <img src={img} alt={`${data.title} showcase ${idx + 1}`} />
                                <div className="gallery-overlay">
                                    <ImageIcon size={32} />
                                    <span>View Project</span>
                                </div>
                            </motion.div>
                        ))}

                        {/* Video Card - Real Video or Simulated */}
                        {data.video ? (
                            <motion.div
                                className="gallery-item video-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <video 
                                    src={data.video} 
                                    className="w-full h-full object-cover" 
                                    autoPlay
                                    muted 
                                    loop 
                                    playsInline 
                                />
                                <div className="video-overlay" style={{ pointerEvents: 'none' }}>Showcase Video</div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="gallery-item video-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <img src={data.heroImg} alt="Video Thumbnail" className="blur-sm h-full w-full object-cover" />
                                <div className="play-button pb-disabled" style={{ pointerEvents: 'none' }}>
                                    <Play size={40} fill="currentColor" className="ml-2 text-white opacity-50" />
                                </div>
                                <div className="video-overlay" style={{ pointerEvents: 'none' }}>Video Coming Soon</div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Video Modal */}
                {isVideoModalOpen && data.video && (
                    <div className="fixed inset-0 z-[10000] bg-black bg-opacity-70 flex justify-center items-center p-4">
                        <div className="relative w-full max-w-2xl">
                            <button 
                                className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors z-10"
                                onClick={() => setIsVideoModalOpen(false)}
                            >
                                <X size={32} />
                            </button>
                            <video 
                                src={data.video} 
                                autoPlay 
                                loop
                                muted
                                playsInline
                                className="w-full h-auto rounded-lg shadow-2xl pointer-events-none border-4 border-white/20"
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* Testimonials */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-white">What Our Clients Say</h2>
                        <div className="heading-line center bg-white"></div>
                    </div>

                    <div className="division-testimonials">
                        <motion.div
                            className="div-testimonial-card shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="stars mb-4 flex text-yellow-400">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <p className="italic text-lg mb-6">"Partnering with {data.title} has profoundly impacted our operations. Their excellence and dedication to standardizing quality sets them apart from the competition globally."</p>
                            <p className="font-bold text-lg">- Executive Director, Global Partner</p>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DivisionTemplate;
