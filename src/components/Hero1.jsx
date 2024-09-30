import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import AnimatedWords from './AnimatedHero/AnimatedWords';
import HeaderLight from './HeaderLight';

const Hero1 = () => {
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
        <div className="relative h-screen w-full overflow-hidden">
            <HeaderLight />
            <Spline
                className="absolute inset-0 w-full h-full z-0"
                scene="https://prod.spline.design/3zU-jQGH2HJGhvUY/scene.splinecode"
                onLoad={onLoad}
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <AnimatedWords />
            </div>
        </div>
    );
};

export default Hero1;
