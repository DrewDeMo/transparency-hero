import React from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';

const Hero7 = () => {
    return (
        <div className="relative h-screen">
            <Header2 />
            <main className="w-full h-full">
                <Spline
                    scene="https://prod.spline.design/xhVLxbIDg-dfTjmZ/scene.splinecode"
                />
            </main>
        </div>
    );
};

export default Hero7;
