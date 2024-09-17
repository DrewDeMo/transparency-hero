import React from 'react';

const Hero2 = () => {
    return (
        <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}>
            <div className="text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Coastal Serenity</h1>
                <p className="text-xl">Tranquil beach scene with crystal clear waters and soft sand.</p>
            </div>
        </div>
    );
};

export default Hero2;
