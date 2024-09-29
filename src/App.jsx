import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';

const heroes = [
    { component: Hero2, name: 'Coastal Serenity', description: 'Tranquil beach scene with crystal clear waters and soft sand.' },
    { component: Hero3, name: 'Urban Nightscape', description: 'A vibrant cityscape illuminated by countless lights at night.' },
    { component: Hero1, name: 'Portal Animated Agency Concept', description: 'An engaging animation showcasing various aspects of our agency, culminating in "Full Service TRANSPARENT Agency".' },
    { component: Hero4, name: 'Forest Canopy', description: 'Sunlight filtering through a lush, green forest canopy.' },
    { component: Hero5, name: 'Valley Vista', description: 'A panoramic view of a lush valley with rolling hills and a winding river.' },
];

function App() {
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const [isAutoplay, setIsAutoplay] = useState(false);

    const nextHero = () => {
        setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroes.length);
    };

    const prevHero = () => {
        setCurrentHeroIndex((prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length);
    };

    useEffect(() => {
        let interval;
        if (isAutoplay) {
            interval = setInterval(nextHero, 5000); // Change hero every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoplay]);

    const CurrentHero = heroes[currentHeroIndex].component;

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Hero Component */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentHeroIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <CurrentHero />
                </motion.div>
            </AnimatePresence>

            {/* Glassmorphic Hero Information Overlay */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute bottom-24 left-8 right-8 p-6 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg text-white"
                    >
                        <h2 className="text-3xl font-bold mb-2">{heroes[currentHeroIndex].name}</h2>
                        <p className="text-lg">{heroes[currentHeroIndex].description}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glassmorphic Control Panel */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 p-2 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full">
                <button
                    onClick={prevHero}
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Previous hero"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <div className="px-4 py-2 rounded-full bg-white bg-opacity-20">
                    <span className="font-semibold text-white">
                        {currentHeroIndex + 1} / {heroes.length}
                    </span>
                </div>
                <button
                    onClick={nextHero}
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Next hero"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label={isAutoplay ? "Stop autoplay" : "Start autoplay"}
                >
                    {isAutoplay ? (
                        <Pause className="w-6 h-6 text-white" />
                    ) : (
                        <Play className="w-6 h-6 text-white" />
                    )}
                </button>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Toggle info"
                >
                    <Info className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
}

export default App;
