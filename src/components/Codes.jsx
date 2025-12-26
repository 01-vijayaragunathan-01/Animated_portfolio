import React, { useRef } from 'react';
import { Github } from 'lucide-react';
import { FiExternalLink } from 'react-icons/fi';
import LaserFlow from '../animations/LaserFlow';
import SplitText from "../animations/SplitText";
import MagicBento from '../animations/MagicBento';

const Codes = () => {
    const revealImgRef = useRef(null);
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };


    const projects = [
        {
            label: "Full Stack",
            title: "X-Clone",
            description: "A full-stack Social platform built with React and Express.js.",
            github: "https://github.com/01-vijayaragunathan-01/Twitter-Clone",
            // live: "https://ecommerce-demo.com"
        },
        {
            label: "Frontend",
            title: "3D Modern Frontend Template",
            description: "Animated Modern Web template using html,css,js",
            github: "https://github.com/01-vijayaragunathan-01/3D_Modern_Website",
            // live: "https://ai-agent-demo.com"
        },
        {
            label: "Full stack",
            title: "Tool Market",
            description: "A full-stack commerce platform built with MERN.",
            github: "https://github.com/01-vijayaragunathan-01/Tool-kit-frontend",
            // live: "https://ecommerce2-demo.com"
        },
        {
            label: "MongoDB",
            title: "MongoDB CRUD",
            description: "A crud Application",
            github: "https://github.com/01-vijayaragunathan-01/MONGODB_crud",
            // live: "https://ai-agent2-demo.com"
        },
        {
            label: "Frontend",
            title: "Snake Game",
            description: "Made with basic frontend",
            github: "https://github.com/01-vijayaragunathan-01/snake_game",
            // live: "https://ecommerce3-demo.com"
        },
        {
            label: "MERN",
            title: "Mentor Mentee",
            description: "Socail Interaction Platform between Student and Mentor",
            github: "https://github.com/01-vijayaragunathan-01/Mentor-Metee",
            // live: "https://ai-agent3-demo.com"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#060010] relative py-20 px-4 flex flex-col items-center overflow-hidden">

            
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
                    speed={1.2}
                />
            </div>

            {/* Mouse Reveal Image */}
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
                    opacity: 0.2,
                    zIndex: 10,
                    maskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 300px)',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 300px)',
                }}
            />

            {/* Section Title */}
            <div className="relative z-20 text-center mb-12">
                
                <SplitText
                    text="Code Showcase"
                    className="text-6xl font-semibold text-center "
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <p className="text-white/60 text-lg">
                    Explore my open-source projects and contributions
                </p>
            </div>

            {/* MagicBento Grid */}
            <div
                className="relative z-20 w-full max-w-7xl"
                onMouseMove={(e) => {
                    const el = revealImgRef.current;
                    if (el) {
                        el.style.setProperty('--mx', `${e.clientX}px`);
                        el.style.setProperty('--my', `${e.clientY}px`);
                    }
                }}
            >
                <MagicBento
                    enableStars={true}
                    glowColor="132, 0, 255"
                    enableTilt={true}
                    clickEffect={true}
                    enableMagnetism={true}
                    projects={projects}
                />
            </div>
        </div>
    );
};

export default Codes;