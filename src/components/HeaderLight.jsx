import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TCLLogo from '../assets/TCL_Logo_Full.svg';

export default function HeaderLight() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = ['Home', 'About', 'Team', 'Services', 'Jobs', 'Contact'];

    const menuVariants = {
        closed: { opacity: 0, scale: 0.95 },
        open: { opacity: 1, scale: 1 }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : ''
                    } font-montserrat`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <img src={TCLLogo} alt="TCL Logo" className="w-[150px] h-auto sm:w-[223px] invert" />
                    </motion.div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8 text-lg font-medium">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white hover:text-[#cc5500] focus:text-[#cc5500] focus:outline-none transition-colors"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="md:hidden text-white focus:outline-none z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-between items-center">
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </motion.header>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40 md:hidden font-montserrat"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="h-full flex items-center justify-center">
                            <ul className="space-y-8 text-center">
                                {menuItems.map((item) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-2xl text-white hover:text-[#cc5500] focus:text-[#cc5500] focus:outline-none transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
