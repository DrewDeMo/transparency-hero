import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero1 = () => {
    return (
        <div className="relative h-screen w-full">
            <Spline
                className="absolute inset-0 w-full h-full"
                scene="https://prod.spline.design/3zU-jQGH2HJGhvUY/scene.splinecode"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-4">Mountain Vista</h1>
                    <p className="text-xl">A breathtaking view of snow-capped mountains at sunrise.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
