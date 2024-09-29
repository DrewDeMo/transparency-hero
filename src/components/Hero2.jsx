import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';
import { motion } from 'framer-motion';

const Hero2 = () => {
    const onLoad = useCallback((spline) => {
        const wheelEventHandler = (e) => {
            // Allow default scrolling behavior
        };
        spline.canvas.addEventListener('wheel', wheelEventHandler, { passive: true });

        return () => {
            spline.canvas.removeEventListener('wheel', wheelEventHandler);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="relative">
            <Header2 />
            <div className="h-screen relative">
                <Spline
                    className="w-full h-full"
                    scene="https://prod.spline.design/rUNTVLYEUaGyCkrU/scene.splinecode"
                    onLoad={onLoad}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="font-black"
                            style={{
                                color: '#353535',
                                fontSize: 'clamp(2rem, 8vw, 6rem)',
                                lineHeight: '1.4',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            <motion.span className="block" variants={itemVariants}>
                                FULL-SERVICE
                            </motion.span>
                            <motion.span
                                className="block italic"
                                variants={itemVariants}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '0.2em 0.5em',
                                    borderRadius: '10px'
                                }}
                            >
                                TRANSPARENT
                            </motion.span>
                            <motion.span className="block" variants={itemVariants}>
                                AGENCY
                            </motion.span>
                        </motion.h1>
                    </motion.div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Get To Know Us</h2>
                    <p className="mb-4">TCL Marketing is a full-service agency dedicated to transparent client relationships and strategies that exceed marketing goals. We're large enough to conquer all of our client's needs and expectations and small enough to care for each, individually.</p>
                    <p className="mb-4">We're experienced, detailed and dedicated.</p>
                    <p className="mb-4">The lifeline of our success depends upon transparent client relationships, attention to detail, utilizing technology for efficiency and a successful campaign execution.</p>
                    <p className="mb-4">We're an asset, not an expense for our clients.</p>
                    <p className="mb-4 font-bold">- TCL MARKETING</p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
