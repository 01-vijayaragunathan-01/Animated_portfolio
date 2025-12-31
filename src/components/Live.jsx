import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import PixelBlast from '../animations/PixelBlast';
import InfiniteMenu from '../animations/InfiniteMenu';

const Live = () => {
    const [isLowPower, setIsLowPower] = useState(false);

    // Performance Optimization: Check for mobile/tablet to reduce lag
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) setIsLowPower(true);
    }, []);

    const items = [
         {
            image: '/assets/live%20(1).png',
            link: 'https://mentor-metee.netlify.app/',
            title: 'social platform',
            description: 'Student and Teacher online interation platform Built with MERN'
        },
        {
            image: '/assets/live%20(2).png',
            link: 'https://kittool.netlify.app/',
            title: 'Tool Market',
            description: 'Built with MERN',
        },
        {
            image: '/assets/live%20(3).png',
            link: 'https://vijayaragunathan.netlify.app/',
            title: 'Portfolio Demo',
            description: 'Built with React',
        },
        {
            image: '/assets/live%20(4).png',
            link: 'https://twixtter.netlify.app/',
            title: 'X-clone',
            description: 'Full-stack social networking',
        },
        {
            image: '/assets/live%20(5).png',
            link: 'https://vijayfolio.netlify.app/',
            title: 'Animated Portfolio',
            description: 'Built with MERN',
        },
        // Duplicate items for the InfiniteMenu scroll effect
        {
            image: '/assets/live%20(2).png',
            link: 'https://kittool.netlify.app/',
            title: 'Tool Market',
            description: 'Built with MERN'
        },
        {
            image: '/assets/live%20(1).png',
            link: 'https://mentormettee.netlify.app/',
            title: 'social platform',
            description: 'Student and Teacher online interation platform Built with MERN'
        },
        {
            image: '/assets/live%20(5).png',
            link: 'https://vijayfolio.netlify.app/',
            title: 'Animated Portfolio',
            description: 'Built with MERN'
        },
        {
            image: '/assets/live%20(4).png',
            link: 'https://twixtter.netlify.app/',
            title: 'X-clone',
            description: 'Full-stack social networking'
        },
        {
            image: '/assets/live%20(3).png',
            link: 'https://vijayaragunathan.netlify.app/',
            title: 'Portfolio Demo',
            description: 'Built with React'
        },
        
        
    ];

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'relative',
            backgroundColor: '#030014',
            overflow: 'hidden'
        }}>

            {/* 1. DESKTOP BACK ARROW (Creative Navigation) */}
            <Link
                to="/"
                className="hidden md:flex fixed left-10 top-10 z-[100] items-center gap-4 text-white/40 hover:text-white transition-all group"
            >
                <div className="p-3 border border-white/10 rounded-full group-hover:border-[#5227FF] group-hover:bg-[#5227FF] transition-all">
                    <FiArrowLeft className="text-2xl transition-transform group-hover:-translate-x-1" />
                </div>
                <span className="text-xs font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">HOME</span>
            </Link>

            {/* 2. PIXEL BLAST BACKGROUND (Throttled for Mobile Performance) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                <PixelBlast
                    variant="circle"
                    pixelSize={isLowPower ? 10 : 6} // Larger pixels = fewer calculations for mobile
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={isLowPower ? 0.8 : 1.2} // Lower density for mobile
                    speed={isLowPower ? 0.3 : 0.6} // Slower speed reduces CPU load
                    enableRipples={!isLowPower} // Disable expensive ripples on mobile
                    transparent={true}
                />
            </div>

            {/* 3. VIGNETTE OVERLAY */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(3,0,20,0) 0%, rgba(3,0,20,0.4) 50%, rgba(3,0,20,0.8) 100%)',
                pointerEvents: 'none',
                zIndex: 2
            }} />

            {/* 4. TITLE CONTENT */}
            <div style={{
                position: 'absolute',
                top: '12%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 15,
                textAlign: 'center',
                width: '90%'
            }}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#B19EEF] via-[#FF9FFC] to-[#5227FF] bg-clip-text text-transparent mb-2 tracking-widest">
                    LIVE PROJECTS
                </h1>
                <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
                    fontWeight: '400'
                }}>
                    Explore my deployed applications
                </p>
            </div>

            {/* 5. INFINITE MENU (WEBGL STACK) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto'
            }}>
                <InfiniteMenu items={items} />
            </div>

            {/* 6. BOTTOM GRADIENT FADE */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(to top, rgba(3,0,20,0.9) 0%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 5
            }} />
        </div>
    );
};

export default Live;