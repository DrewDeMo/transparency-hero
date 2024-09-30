import React from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './HeaderLight';
import AnimatedTextSlide8 from './AnimatedTextSlide8';

const Hero8 = () => {
    return (
        <div className="relative h-screen">
            <Header2 />
            <main className="w-full h-full">
                <Spline
                    scene="https://prod.spline.design/TcaAgipqIe2q2aRU/scene.splinecode"
                />
                <AnimatedTextSlide8 />
            </main>
        </div>
    );
};

export default Hero8;
