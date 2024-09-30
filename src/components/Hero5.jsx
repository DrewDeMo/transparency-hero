import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';
import { motion } from 'framer-motion';

const Hero5 = () => {
    const onLoad = useCallback((spline) => {
        const wheelEventHandler = (e) => {
            // Allow default scrolling behavior
        };
        spline.canvas.addEventListener('wheel', wheelEventHandler, { passive: true });

        return () => {
            spline.canvas.removeEventListener('wheel', wheelEventHandler);
        };
    }, []);

    return (
        <div className="relative">
            <Header2 />
            <div className="h-screen relative">
                <Spline
                    className="w-full h-full"
                    scene="https://prod.spline.design/hUpV1oML0yxfdTeT/scene.splinecode"
                    onLoad={onLoad}
                />
                {/* Commented out slide text
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold mb-4">Valley Vista</h1>
                        <p className="text-xl">A panoramic view of a lush valley with rolling hills and a winding river.</p>
                    </div>
                </div>
                */}
            </div>
        </div>
    );
};

export default Hero5;
