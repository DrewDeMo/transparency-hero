import React from 'react';
import Spline from '@splinetool/react-spline';
import AnimatedWords from './AnimatedHero/AnimatedWords';

const Hero1 = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Spline
                    className="w-full h-full"
                    scene="https://prod.spline.design/3zU-jQGH2HJGhvUY/scene.splinecode"
                />
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <AnimatedWords />
            </div>
        </div>
    );
};

export default Hero1;
