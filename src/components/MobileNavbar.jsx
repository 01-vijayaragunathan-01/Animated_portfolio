import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (path) => {
        setIsOpen(false); 
        navigate(path);   
    };

    const menuItems = [
        { label: 'Home', path: '/' }, 
        { label: 'Live', path: '/live' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <>
            {/* MOBILE ONLY HEADER (Fixed at top) */}
            <nav className="md:hidden fixed top-0 left-0 w-full z-[100] bg-black/20 backdrop-blur-lg border-b border-white/10">
                <div className="px-6 h-16 flex items-center justify-between">
                    <div className="text-white font-bold tracking-tighter cursor-pointer" onClick={() => handleNavigation('/')}>
                        PORTFOLIO
                    </div>

                    <button onClick={toggleMenu} className="flex flex-col gap-1.5 z-[110] relative p-2">
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* FULL SCREEN SLIDING MENU */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden"
                        />

                        
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] bg-[#030014] border-l border-white/10 z-[102] md:hidden p-8 flex flex-col shadow-2xl"
                            style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #23153e 0%, transparent 50%)' }}
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Menu</span>
                                <button onClick={toggleMenu} className="text-white/60 text-2xl">✕</button>
                            </div>

                            <ul className="flex flex-col gap-8">
                                {menuItems.map((item) => (
                                    <li key={item.label}>
                                        <button
                                            onClick={() => handleNavigation(item.path)}
                                            className="text-3xl font-bold text-white hover:text-purple-400 transition-colors text-left w-full"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-8 border-t border-white/5 text-white/30 text-xs">
                                © 2025 Portfolio — Built with React
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNavbar;