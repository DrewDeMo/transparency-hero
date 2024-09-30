import React from 'react';
import Spline from '@splinetool/react-spline';
import HeaderLight from './HeaderLight';

const Hero6 = () => {
    return (
        <div className="relative w-full h-screen">
            <HeaderLight />
            <main className="w-full h-full">
                <Spline
                    className="w-full h-full"
                    scene="https://prod.spline.design/OR73aXc8O3YQTRGt/scene.splinecode"
                />
            </main>
        </div>
    );
};

export default Hero6;
