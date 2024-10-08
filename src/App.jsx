import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Hero7 from './components/Hero7';
import Hero8 from './components/Hero8';

const heroes = [
    { component: Hero2, name: 'Attack of the Blobs', description: '3Dimensional blobs that you can click and drag around to really showcase transparency in an interactive way.' },
    { component: Hero3, name: 'Sherlock', description: 'Using glass circles and the 3rd dimension, we simulate a magnifying glass that can magnify the content underneath.' },
    { component: Hero4, name: 'Goldeneye', description: 'Deemed the "Goldeneye" effect, this slide has a glass overlay allowing the cursor to clear the fogged glass and reveal the content underneath.' },
    { component: Hero5, name: 'Simple Glass', description: 'Very simple and clean glass effect on the SVG revealing text underneath, pans with finger/cursor.' },
    { component: Hero6, name: 'Flashlight', description: 'Interactive scene where your mouse/finger controlls a flashlight. The flashlight reveals the transparent word "TRANSPARENT".' },
    { component: Hero7, name: 'Pinwheel', description: 'A 3d animation with multiple 3d shapes, the first layer being glass and the rest being company colors. On hover these can cause things to happen.' },
    { component: Hero8, name: 'Particle Effect', description: 'A particle mouseover effects, spawns circular particles that fade out to 0% transparency, when these particles "die" they fade out in transparency.' },
    { component: Hero1, name: 'Portal Animated Agency Concept', description: 'Showcasing the water element of transparency this page will be a portal, when you scroll down will take you "through" it to our content.' },
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
            <AnimatePresence>
                <motion.div
                    key={currentHeroIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
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
                        className="absolute bottom-24 left-4 right-4 md:left-8 md:right-8 p-4 md:p-6 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg text-white z-30"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heroes[currentHeroIndex].name}</h2>
                        <p className="text-sm md:text-lg">{heroes[currentHeroIndex].description}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glassmorphic Control Panel */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4 p-2 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full z-30">
                <button
                    onClick={prevHero}
                    className="p-1 md:p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Previous hero"
                >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
                <div className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-white bg-opacity-20">
                    <span className="text-sm md:text-base font-semibold text-white">
                        {currentHeroIndex + 1} / {heroes.length}
                    </span>
                </div>
                <button
                    onClick={nextHero}
                    className="p-1 md:p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Next hero"
                >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
                <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="p-1 md:p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label={isAutoplay ? "Stop autoplay" : "Start autoplay"}
                >
                    {isAutoplay ? (
                        <Pause className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    ) : (
                        <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    )}
                </button>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="p-1 md:p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                    aria-label="Toggle info"
                >
                    <Info className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
            </div>
        </div>
    );
}

export default App;
