import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TCLLogo from '../assets/TCL_Logo_Full.svg';

export default function Header2() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/30 backdrop-blur-md' : ''
                }`}
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
                    <img src={TCLLogo} alt="TCL Logo" className="w-[223px] h-[70px]" />
                </motion.div>
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ul className="flex space-x-8 text-lg font-medium">
                        {['Home', 'About', 'Team', 'Services', 'Jobs', 'Contact'].map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-800 hover:text-[#cc5500] focus:text-[#cc5500] focus:outline-none transition-colors"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            </div>
        </motion.header>
    );
}
