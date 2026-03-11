import React from 'react';
import { motion } from 'framer-motion';
import managingDirectorImg from '../assets/managing director.jpeg';

const About = () => {
    return (
        <div className="page-wrapper pt-20">
            <section className="hero-internal bg-primary text-white py-20 mt-16 text-center">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        About SS International Group
                    </motion.h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        A legacy of excellence across multiple industries since our inception.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision & Mission</h2>
                            <div className="heading-line"></div>
                            <h3 className="text-2xl font-semibold mb-3 text-accent">Vision</h3>
                            <p className="mb-6 text-gray-700">
                                To be a globally recognized conglomerate that drives sustainable growth, innovation, and positive impact across every industry we operate in.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 text-accent">Mission</h3>
                            <p className="text-gray-700">
                                To deliver uncompromising quality and value to our customers, while fostering a culture of excellence, integrity, and social responsibility in our workforce and operations worldwide.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team Meeting" className="rounded-lg shadow-lg w-full object-cover h-[400px]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Leadership</h2>
                        <div className="heading-line center"></div>

                        <div className="bg-white p-8 rounded-xl shadow-lg mt-10 text-left">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <img src={managingDirectorImg} alt="Managing Director" className="w-48 h-48 rounded-full object-cover shadow-md" />
                                <div>
                                    <h3 className="text-2xl font-bold text-accent mb-2">MR KUMAR</h3>
                                    <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">Managing Director</p>
                                    <p className="text-gray-700 italic">
                                        "At SS International Group, we don't just build businesses; we build trust. Our journey over the decades is a testament to our commitment to excellence, innovation, and most importantly, our people and partners. We look forward to continuing our expansion and creating value globally."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-primary">Company Milestones</h2>
                        <div className="heading-line center"></div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* Simple Timeline */}
                        <div className="relative border-l-4 border-primary ml-4 md:ml-0 pl-8 space-y-10 py-4">
                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-primary rounded-full -left-[43px] top-1"></div>
                                <h3 className="text-xl font-bold text-accent">1995</h3>
                                <h4 className="font-semibold text-primary mb-2">Foundation</h4>
                                <p className="text-gray-600">Established SS Builders as a local construction firm focusing on residential projects.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-primary rounded-full -left-[43px] top-1"></div>
                                <h3 className="text-xl font-bold text-accent">2005</h3>
                                <h4 className="font-semibold text-primary mb-2">Diversification & Expansion</h4>
                                <p className="text-gray-600">Launched SS Real Estate and expanded operations into the UAE market.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-primary rounded-full -left-[43px] top-1"></div>
                                <h3 className="text-xl font-bold text-accent">2012</h3>
                                <h4 className="font-semibold text-primary mb-2">Retail Sectors</h4>
                                <p className="text-gray-600">Initiated SS Jewellery and SS Garments, tapping into luxury retail and apparel manufacturing.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-primary rounded-full -left-[43px] top-1"></div>
                                <h3 className="text-xl font-bold text-accent">2018</h3>
                                <h4 className="font-semibold text-primary mb-2">Financial & Organic Frontiers</h4>
                                <p className="text-gray-600">Established SS Finance for corporate investment and SS Organic Products to promote healthy, sustainable living.</p>
                            </div>

                            <div className="relative">
                                <div className="absolute w-6 h-6 bg-accent rounded-full -left-[43px] top-1"></div>
                                <h3 className="text-xl font-bold text-accent">Present</h3>
                                <h4 className="font-semibold text-primary mb-2">Global Conglomerate</h4>
                                <p className="text-gray-600">Operating robustly across India, UAE, and USA with a unified vision for a sustainable future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
