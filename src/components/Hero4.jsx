import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import Header2 from './Header2';

const Hero4 = () => {
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
        <div className="relative">
            <Header2 />
            <div className="h-screen relative">
                <Spline
                    className="w-full h-full"
                    scene="https://prod.spline.design/PKmRc5swSIyfNUQl/scene.splinecode"
                    onLoad={onLoad}
                />
            </div>
        </div>
    );
};

export default Hero4;
