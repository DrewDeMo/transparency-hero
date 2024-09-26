import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './AnimatedWords.css';

function AnimatedWords() {
    const textContainerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const words = [
            "MARKETERS",
            "CREATORS",
            "INNOVATORS",
            "COLLABORATORS",
            "PROBLEM SOLVERS"
        ];

        const textContainer = textContainerRef.current;

        // Create a GSAP timeline
        const tl = gsap.timeline();

        // Function to animate each word
        function animateWord(word, index) {
            const wordElement = document.createElement("div");
            wordElement.textContent = word;
            wordElement.style.position = "absolute";
            wordElement.style.fontSize = "6rem"; // Adjust as needed
            wordElement.style.fontFamily = "'Poppins', sans-serif";
            wordElement.style.color = "rgba(255, 255, 255, 0.9)";
            wordElement.style.whiteSpace = "nowrap";
            wordElement.style.pointerEvents = "none"; // Prevent mouse events

            // Random initial positions around the edges
            const positions = [
                { xPercent: -100, yPercent: -50 }, // Left
                { xPercent: 100, yPercent: -50 },  // Right
                { xPercent: -50, yPercent: -100 }, // Top
                { xPercent: -50, yPercent: 100 },  // Bottom
                { xPercent: -100, yPercent: -100 }, // Top-left
                { xPercent: 100, yPercent: -100 },  // Top-right
                { xPercent: -100, yPercent: 100 },  // Bottom-left
                { xPercent: 100, yPercent: 100 },   // Bottom-right
            ];
            const pos = positions[index % positions.length];

            wordElement.style.left = "50%";
            wordElement.style.top = "50%";
            wordElement.style.transform = `translate(${pos.xPercent}%, ${pos.yPercent}%)`;

            textContainer.appendChild(wordElement);

            // Animate the word's entrance with wiggle effect
            tl.fromTo(wordElement, {
                opacity: 0,
                scale: 0.5,
                rotation: gsap.utils.random(-30, 30),
            }, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
            }, index * 3)

                // Pause for a moment
                .to(wordElement, {
                    duration: 1,
                }, "+=0.5")

                // Animate the word being sucked into the center
                .to(wordElement, {
                    duration: 1.5,
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                    rotation: gsap.utils.random(-180, 180),
                    ease: "power3.in",
                    onComplete: () => {
                        wordElement.remove(); // Clean up after animation
                    }
                });
        }

        // Animate each word
        words.forEach((word, i) => animateWord(word, i));

        // After all words have animated, show the hero text
        tl.to(heroRef.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
        }, "+=1"); // Delay after last word animation

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="animated-words-container">
            <div className="text" ref={textContainerRef}></div>

            <div className="hero" ref={heroRef}>
                <div className="line">Full Service</div>
                <div className="line transparent">TRANSPARENT</div>
                <div className="line">Agency</div>
            </div>
        </div>
    );
}

export default AnimatedWords;
