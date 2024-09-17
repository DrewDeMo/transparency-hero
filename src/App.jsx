import React from 'react';
import Hero1 from './components/Hero1.jsx';
import Hero2 from './components/Hero2.jsx';
import Hero3 from './components/Hero3.jsx';

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold text-center my-8">Transparency Hero Image Showcase</h1>
            <Hero1 />
            <Hero2 />
            <Hero3 />
        </div>
    );
}

export default App;
