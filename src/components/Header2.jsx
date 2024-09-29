import React, { useState, useEffect } from 'react';
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/30 backdrop-blur-md' : ''
                }`}
        >
            <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <img src={TCLLogo} alt="TCL Logo" className="w-[223px] h-[70px]" />
                </div>
                <nav>
                    <ul className="flex space-x-8 text-lg font-medium">
                        {['Home', 'About', 'Team', 'Services', 'Jobs', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-800 hover:text-[#cc5500] focus:text-[#cc5500] focus:outline-none transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
