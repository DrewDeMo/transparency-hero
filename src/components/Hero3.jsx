import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3 = () => {
    return (
        <div className="relative" style={{ width: '100vw', height: '100vh' }}>
            <Spline
                className="absolute inset-0 w-full h-full"
                scene="https://prod.spline.design/ms2VYd1AKdHSaP0n/scene.splinecode"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-4">Urban Nightscape</h1>
                    <p className="text-xl">A vibrant cityscape illuminated by countless lights at night.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
