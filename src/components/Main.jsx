import React from 'react';
import LiquidEther from '../animations/LiquiorEther';
import About from './About';
import LogoLoop from '../animations/Loop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiSpringboot, SiCplusplus } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi'; 
import { Link } from 'react-router-dom'; 

const Main = () => {
    const techLogos = [
        { node: <SiReact />, title: "React" },
        { node: <SiNextdotjs />, title: "Next.js" },
        { node: <SiTypescript />, title: "TypeScript" },
        { node: <SiTailwindcss />, title: "Tailwind CSS" },
        { node: <SiPython />, title: "python" },
        { node: <SiSpringboot />, title: "SpringBoot" },
        { node: <SiCplusplus />, title: "C++" },
    ];

    return (
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#030014' }}>
            {/* Background Layer - Fixed to prevent lag during scroll */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    autoDemo={true}
                />
            </div>

            {/* Content Layer */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                {/* DESKTOP ARROW NAVIGATION - Persistent for Desktop */}
                <div className="hidden md:block fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[100] space-y-8 lg:space-y-10">
                    {[
                        { label: 'LIVE', path: '/live' },
                        { label: 'PROJECTS', path: '/projects' },
                        { label: 'CONTACT', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="group flex items-center gap-4 text-white/40 hover:text-white transition-all duration-500"
                        >
                            <span className="text-[10px] lg:text-xs font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                {item.label}
                            </span>
                            <div className="p-2 lg:p-3 border border-white/10 rounded-full group-hover:border-[#5227FF] group-hover:bg-[#5227FF] transition-all">
                                <FiArrowUpRight className="text-xl lg:text-2xl group-hover:rotate-45 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* About Section */}
                <section id="about">
                    <About />
                </section>
                
                {/* Tech Stack Loop - Corrected fade color to match background */}
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#030014" 
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;