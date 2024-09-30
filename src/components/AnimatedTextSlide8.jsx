import React from 'react';
import { motion, easeInOut } from 'framer-motion';

const AnimatedTextSlide8 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: easeInOut,
            },
        },
    };

    const transparentVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: easeInOut,
            },
        },
    };

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 pointer-events-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 className="text-4xl md:text-6xl font-light mb-4 font-unbounded" variants={itemVariants}>
                Full-Service
            </motion.h2>
            <motion.div className="relative">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4 font-unbounded"
                    variants={transparentVariants}
                    style={{ color: 'rgba(255, 255, 255, 0.1)', WebkitTextStroke: '1px white' }}
                >
                    TRANSPARENT
                </motion.h1>
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4 font-unbounded absolute top-0 left-0"
                    variants={itemVariants}
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                    TRANSPARENT
                </motion.h1>
            </motion.div>
            <motion.h2 className="text-4xl md:text-6xl font-light font-unbounded" variants={itemVariants}>
                Agency
            </motion.h2>
        </motion.div>
    );
};

export default AnimatedTextSlide8;
