import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';

const Hero2 = () => {
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
        <div className="relative h-screen">
            <Header2 />
            <Spline
                className="w-full h-full"
                scene="https://prod.spline.design/rUNTVLYEUaGyCkrU/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
};

export default Hero2;
