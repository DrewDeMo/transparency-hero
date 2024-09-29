import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.05, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.05, duration: 0.01 }
            }
        })
    };

    return (
        <div className="relative w-[273px] h-[84px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-300 opacity-30 animate-wave"></div>
            <motion.svg
                width="273"
                height="84"
                viewBox="0 0 273 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    d="M41.62 83.24C64.6061 83.24 83.24 64.6061 83.24 41.62C83.24 18.6339 64.6061 0 41.62 0C18.6339 0 0 18.6339 0 41.62C0 64.6061 18.6339 83.24 41.62 83.24Z"
                    fill="white"
                    variants={pathVariants}
                    custom={0}
                />
                <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M53.3 50.25V11.55C52.35 11.18 51.38 10.85 50.39 10.58C47.6 9.79 44.66 9.37 41.63 9.37C23.82 9.37 9.38 23.81 9.38 41.62C9.38 51.29 13.64 59.98 20.39 65.89V69.65C11.93 63.23 6.46 53.06 6.46 41.62C6.46 22.2 22.2 6.46 41.62 6.46C44.65 6.46 47.58 6.84 50.38 7.56C51.37 7.81 52.34 8.11 53.29 8.45C54.32 8.81 55.34 9.23 56.33 9.68V47.49H65.41V50.25H53.29H53.3ZM73.86 41.62C73.86 59.43 59.42 73.87 41.61 73.87C37.24 73.87 33.07 73 29.27 71.42C28.27 71.01 27.3 70.54 26.36 70.04V35.8H31.84V32.99H17.82V35.8H23.3V71.64C24.29 72.24 25.31 72.8 26.36 73.31C27.31 73.77 28.28 74.18 29.27 74.56C33.11 76 37.27 76.79 41.61 76.79C61.03 76.79 76.77 61.04 76.77 41.63C76.77 28.64 69.72 17.29 59.24 11.2V14.62C68.04 20.38 73.86 30.32 73.86 41.62ZM80.47 41.62C80.47 20.17 63.07 2.77 41.62 2.77C20.17 2.77 2.76 20.16 2.76 41.62C2.76 63.08 20.16 80.47 41.61 80.47C63.06 80.47 80.46 63.07 80.46 41.62H80.47ZM39.14 33.39C38.05 33.86 37.12 34.5 36.33 35.31C35.54 36.12 34.93 37.07 34.49 38.16C34.05 39.25 33.84 40.41 33.84 41.64C33.84 42.87 34.06 44.06 34.51 45.14C34.95 46.23 35.57 47.17 36.35 47.97C37.13 48.77 38.06 49.4 39.13 49.86C40.2 50.32 41.37 50.55 42.63 50.55C43.44 50.55 44.17 50.48 44.84 50.34C45.51 50.2 46.12 49.99 46.68 49.72C47.24 49.45 47.76 49.13 48.25 48.76C48.74 48.39 49.2 47.97 49.64 47.49L47.69 45.52C46.95 46.21 46.2 46.76 45.44 47.16C44.68 47.56 43.78 47.76 42.73 47.76C41.91 47.76 41.15 47.6 40.45 47.28C39.75 46.96 39.15 46.52 38.64 45.96C38.13 45.4 37.74 44.75 37.46 44C37.18 43.25 37.04 42.45 37.04 41.59C37.04 40.73 37.18 39.94 37.46 39.2C37.74 38.46 38.13 37.81 38.64 37.26C39.15 36.71 39.75 36.27 40.45 35.95C41.15 35.63 41.91 35.47 42.73 35.47C43.72 35.47 44.6 35.67 45.37 36.06C46.14 36.45 46.88 36.97 47.57 37.61L49.52 35.36C49.11 34.97 48.67 34.6 48.21 34.27C47.75 33.94 47.25 33.66 46.7 33.42C46.16 33.18 45.56 33 44.91 32.86C44.26 32.73 43.54 32.66 42.75 32.66C41.43 32.66 40.23 32.89 39.15 33.36L39.14 33.39Z"
                    fill="#CE5527"
                    variants={pathVariants}
                    custom={1}
                />
                <motion.path
                    d="M272.82 33.58H264.5V35.62H270.63V40.63C269.94 41.19 269.09 41.66 268.07 42.05C267.05 42.44 265.97 42.64 264.82 42.64C263.59 42.64 262.49 42.43 261.51 42.01C260.53 41.59 259.7 41 259.01 40.25C258.32 39.5 257.79 38.61 257.41 37.59C257.04 36.56 256.85 35.45 256.85 34.24C256.85 33.11 257.04 32.04 257.43 31.03C257.81 30.02 258.34 29.15 259.01 28.4C259.68 27.65 260.49 27.06 261.43 26.62C262.37 26.18 263.4 25.96 264.51 25.96C265.22 25.96 265.87 26.02 266.45 26.13C267.04 26.24 267.57 26.4 268.06 26.6C268.55 26.8 269 27.04 269.43 27.32C269.85 27.6 270.25 27.91 270.64 28.26L272.11 26.53C271.61 26.11 271.1 25.73 270.57 25.39C270.04 25.05 269.48 24.77 268.87 24.54C268.27 24.31 267.61 24.14 266.91 24.02C266.21 23.9 265.44 23.85 264.59 23.85C263.07 23.85 261.7 24.13 260.46 24.7C259.22 25.27 258.16 26.03 257.28 26.99C256.4 27.95 255.71 29.06 255.22 30.33C254.73 31.6 254.49 32.92 254.49 34.3C254.49 35.68 254.73 37.09 255.2 38.36C255.67 39.63 256.35 40.73 257.24 41.67C258.13 42.61 259.21 43.35 260.46 43.89C261.72 44.43 263.14 44.7 264.73 44.7C266.44 44.7 267.98 44.4 269.35 43.79C270.72 43.19 271.88 42.46 272.82 41.62V33.58Z"
                    fill="#4C4C4D"
                    variants={pathVariants}
                    custom={2}
                />
                <motion.path
                    d="M171.68 33.01L180.31 24.21H177.38L165.81 36.24V24.21H163.54V44.35H165.81V38.94L170.1 34.6L177.84 44.35H180.69L171.68 33.01Z"
                    fill="#4C4C4D"
                    variants={pathVariants}
                    custom={3}
                />
                {/* Add more motion.path elements for the remaining parts of the logo */}
            </motion.svg>
        </div>
    );
};

export default AnimatedLogo;
