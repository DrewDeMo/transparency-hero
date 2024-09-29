import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './AnimatedWords.css';

const AnimatedLogo = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: {
        pathLength: { type: "spring", duration: 3, bounce: 0 },
        opacity: { duration: 3 }
      }
    }
  };

  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 216 216"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M140.46 132.01V24.43C137.82 23.4 135.11 22.5 132.36 21.72C124.61 19.54 116.44 18.37 108 18.37C58.5 18.37 18.36 58.51 18.36 108.01C18.36 134.9 30.21 159.04 48.97 175.47V185.92C25.45 168.07 10.25 139.81 10.25 108.01C10.26 54.03 54.03 10.26 108 10.26C116.41 10.26 124.57 11.32 132.36 13.32C135.11 14.03 137.81 14.85 140.46 15.78C143.34 16.79 146.15 17.94 148.9 19.2V124.32H174.15V132H140.47L140.46 132.01ZM197.64 108C197.64 157.5 157.5 197.64 108 197.64C95.85 197.64 84.26 195.22 73.69 190.84C70.92 189.69 68.21 188.4 65.59 186.99V91.82H80.82V84H41.85V91.82H57.08V191.45C59.83 193.13 62.67 194.68 65.59 196.09C68.23 197.36 70.93 198.52 73.69 199.56C84.37 203.56 95.93 205.75 108 205.75C161.97 205.75 205.74 161.98 205.74 108.01C205.74 71.9 186.14 40.35 157.01 23.43V32.95C181.47 48.96 197.64 76.6 197.64 108.01V108ZM101.11 85.12C98.09 86.42 95.48 88.21 93.29 90.47C91.09 92.73 89.39 95.38 88.18 98.39C86.97 101.41 86.36 104.63 86.36 108.06C86.36 111.49 86.98 114.78 88.21 117.8C89.44 120.82 91.15 123.44 93.32 125.65C95.49 127.87 98.06 129.62 101.04 130.9C104.01 132.18 107.26 132.82 110.78 132.82C113.02 132.82 115.07 132.63 116.92 132.24C118.77 131.85 120.48 131.28 122.03 130.53C123.59 129.77 125.04 128.88 126.39 127.85C127.74 126.82 129.03 125.64 130.27 124.32L124.85 118.83C122.79 120.75 120.71 122.27 118.61 123.39C116.51 124.51 113.99 125.07 111.06 125.07C108.77 125.07 106.66 124.62 104.72 123.73C102.78 122.84 101.1 121.61 99.68 120.06C98.26 118.5 97.16 116.69 96.39 114.61C95.61 112.53 95.22 110.3 95.22 107.92C95.22 105.54 95.61 103.32 96.39 101.27C97.17 99.21 98.26 97.42 99.68 95.88C101.1 94.35 102.78 93.14 104.72 92.24C106.66 91.35 108.78 90.9 111.06 90.9C113.8 90.9 116.25 91.45 118.4 92.55C120.55 93.65 122.58 95.09 124.5 96.87L129.92 90.63C128.78 89.53 127.56 88.53 126.28 87.61C125 86.7 123.6 85.91 122.1 85.24C120.59 84.58 118.93 84.06 117.13 83.7C115.32 83.33 113.32 83.15 111.13 83.15C107.47 83.15 104.13 83.8 101.11 85.1V85.12Z"
        variants={draw}
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </motion.svg>
  );
};

function AnimatedWords() {
    const textContainerRef = useRef(null);
    const heroRef = useRef(null);
    const logoRef = useRef(null);

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

        // After all words have animated, show the hero text and logo
        tl.to(heroRef.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
        }, "+=1")
        .fromTo(logoRef.current, 
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.7)" },
            "-=1.5"
        );

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
                <div className="line transparent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div>TRANSPARENT</div>
                    <div ref={logoRef} style={{ marginTop: '20px', opacity: 0 }}>
                        <AnimatedLogo />
                    </div>
                </div>
                <div className="line">Agency</div>
            </div>
        </div>
    );
}

export default AnimatedWords;
