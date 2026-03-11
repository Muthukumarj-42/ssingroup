import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/ssinlogo.png';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <motion.div 
                    className="loading-logo-wrapper"
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut"
                    }}
                >
                    <motion.img 
                        src={logoImg} 
                        alt="SS International Group" 
                        className="loading-logo-img" 
                        animate={{ 
                            scale: [1, 1.05, 1],
                            filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    {/* Decorative spinning rings */}
                    <motion.div 
                        className="outer-ring"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                        className="inner-ring"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                <motion.div 
                    className="loading-text-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="loading-title">
                        SS <span>International Group</span>
                    </h2>
                    <div className="loading-progress-bar">
                        <motion.div 
                            className="loading-progress-fill"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.8, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoadingScreen;
