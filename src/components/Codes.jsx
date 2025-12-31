import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LaserFlow from '../animations/LaserFlow';
import SplitText from "../animations/SplitText";
import MagicBento from '../animations/MagicBento';

const Codes = () => {
    const revealImgRef = useRef(null);
    const [isLowPower, setIsLowPower] = useState(false);

    // PERFORMANCE OPTIMIZATION: Detect Mobile/iPad to reduce lag
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) setIsLowPower(true);
    }, []);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const projects = [
        {
            label: "Full Stack",
            title: "X-Clone",
            description: "A full-stack Social platform built with React and Express.js.",
            github: "https://github.com/01-vijayaragunathan-01/Twitter-Clone",
        },
        {
            label: "Frontend",
            title: "3D Modern Frontend Template",
            description: "Animated Modern Web template using html,css,js",
            github: "https://github.com/01-vijayaragunathan-01/3D_Modern_Website",
        },
        {
            label: "Full stack",
            title: "Tool Market",
            description: "A full-stack commerce platform built with MERN.",
            github: "https://github.com/01-vijayaragunathan-01/Tool-kit-frontend",
        },
        {
            label: "MongoDB",
            title: "MongoDB CRUD",
            description: "A crud Application",
            github: "https://github.com/01-vijayaragunathan-01/MONGODB_crud",
        },
        {
            label: "Frontend",
            title: "Snake Game",
            description: "Made with basic frontend",
            github: "https://github.com/01-vijayaragunathan-01/snake_game",
        },
        {
            label: "MERN",
            title: "Mentor Mentee",
            description: "Social Interaction Platform between Student and Mentor",
            github: "https://github.com/01-vijayaragunathan-01/Mentor-Metee",
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#060010] relative py-20 px-4 flex flex-col items-center overflow-x-hidden">
            
            {/* 1. CREATIVE NAVIGATION (HOME ARROW) - Desktop Only */}
            <Link 
                to="/" 
                className="hidden md:flex fixed left-10 top-10 z-[100] items-center gap-4 text-white/40 hover:text-white transition-all group"
            >
                <div className="p-3 border border-white/10 rounded-full group-hover:border-[#FF79C6] group-hover:bg-[#FF79C6] transition-all">
                    <FiArrowLeft className="text-2xl transition-transform group-hover:-translate-x-1" />
                </div>
                <span className="text-xs font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">HOME</span>
            </Link>

            {/* 2. BACKGROUND ANIMATION - Throttled for Mobile */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%'
                }}
            >
                <LaserFlow
                    horizontalBeamOffset={0.1}
                    verticalBeamOffset={0.0}
                    color="#FF79C6"
                    speed={isLowPower ? 0.6 : 1.2} // Reduce speed on mobile to save CPU
                />
            </div>

            {/* 3. MOUSE REVEAL IMAGE - Disabled on Mobile to stop heavy lag */}
            {!isLowPower && (
                <img
                    ref={revealImgRef}
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1500&auto=format"
                    alt="Code Reveal"
                    style={{
                        position: 'fixed',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                        mixBlendMode: 'lighten',
                        opacity: 0.15,
                        zIndex: 10,
                        maskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 300px)',
                        WebkitMaskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 300px)',
                    }}
                />
            )}

            {/* Section Title - Fluid Typography */}
            <div className="relative z-20 text-center mb-12 w-full px-4">
                <SplitText
                    text="Code Showcase"
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white"
                    delay={isLowPower ? 50 : 100} // Faster delay on mobile to feel snappy
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <p className="text-white/60 text-sm sm:text-lg mt-4 max-w-lg mx-auto">
                    Explore my open-source projects and contributions
                </p>
            </div>

            {/* MagicBento Grid */}
            <div
                className="relative z-20 w-full max-w-7xl"
                onMouseMove={(e) => {
                    if (isLowPower) return; // Prevent calculations on mobile
                    const el = revealImgRef.current;
                    if (el) {
                        el.style.setProperty('--mx', `${e.clientX}px`);
                        el.style.setProperty('--my', `${e.clientY}px`);
                    }
                }}
            >
                <MagicBento
                    enableStars={!isLowPower} // Disable expensive star particles on mobile
                    glowColor="255, 121, 198" // Matching LaserFlow pink
                    enableTilt={!isLowPower} // Disable GPU-heavy tilt on mobile
                    clickEffect={true}
                    enableMagnetism={!isLowPower}
                    projects={projects}
                />
            </div>
        </div>
    );
};

export default Codes;