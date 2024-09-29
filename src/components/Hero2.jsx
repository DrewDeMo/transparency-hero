import React from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';

const Hero2 = () => {
    return (
        <div className="relative" style={{ width: '100vw', height: '100vh' }}>
            <Header2 />
            <Spline
                className="absolute inset-0 w-full h-full"
                scene="https://prod.spline.design/rUNTVLYEUaGyCkrU/scene.splinecode"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center mt-16"> {/* Added mt-16 to push content down */}
                    <h1 className="text-5xl font-bold mb-4">Coastal Serenity</h1>
                    <p className="text-xl">Tranquil beach scene with crystal clear waters and soft sand.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
