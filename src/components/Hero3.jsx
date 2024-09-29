import React from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';

const Hero3 = () => {
    return (
        <div className="relative" style={{ width: '100vw', height: '100vh' }}>
            <Header2 />
            <Spline
                className="absolute inset-0 w-full h-full"
                scene="https://prod.spline.design/ms2VYd1AKdHSaP0n/scene.splinecode"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* This is where text will go when needed */}
            </div>
        </div>
    );
};

export default Hero3;
