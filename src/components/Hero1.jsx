import React from 'react';

const Hero1 = () => {
    return (
        <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80')" }}>
            <div className="text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Mountain Vista</h1>
                <p className="text-xl">A breathtaking view of snow-capped mountains at sunrise.</p>
            </div>
        </div>
    );
};

export default Hero1;
