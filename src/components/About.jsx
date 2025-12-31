import React, { useState, useEffect } from 'react';
import ElectricBorder from '../animations/Electric';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Performance Check: Detect if device is mobile or tablet to reduce lag
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const skills = ['Frontend Developer', 'FullStack Developer', 'AI Agent Developer'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentSkill.length) {
          setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSkillIndex, typingSpeed]);

  return (
    <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-12 md:py-0 overflow-x-hidden">
      <div className="max-w-6xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <div className="space-y-4 md:space-y-6 text-white text-center md:text-left">
          {/* h1: Reduced mobile size and ensured it wraps */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight break-words">
            I am Vijayaragunathan
          </h1>

          {/* Typewriter: Scaled down for mobile */}
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold min-h-[3rem]">
            <span className="text-white/90">I am a </span>
            <span className="text-purple-400 block sm:inline">
              {displayedText}<span className="animate-pulse">|</span>
            </span>
          </div>

          {/* p: Fluid max-width and font size */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
            Passionate about creating innovative solutions and building seamless digital experiences with modern web technologies.
          </p>

          {/* Social Icons - Centered on mobile */}
          <div className="flex items-center justify-center md:justify-start gap-5 py-2">
            <a href="https://github.com/01-vijayaragunathan-01" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white/50 hover:text-purple-400 transition-all">
              <SiGithub />
            </a>
            <a href="https://www.instagram.com/01_v_i_j_a_y_01/" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white/50 hover:text-purple-400 transition-all">
              <SiInstagram />
            </a>
            <a href="https://www.linkedin.com/in/vijayaragunathan01/" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white/50 hover:text-purple-400 transition-all">
              <SiLinkedin />
            </a>
            <div className="hidden md:block h-[1px] w-12 bg-white/20"></div>
          </div>

          {/* Buttons: Stack on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={() => navigate('/projects')}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg transition-all font-medium active:scale-95"
            >
              View Projects
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg transition-all backdrop-blur-sm active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center items-center">
          <ElectricBorder 
            color="#a855f7"
            speed={isMobile ? 0.5 : 1} // Slow down for mobile performance
            chaos={isMobile ? 0.2 : 0.5} // Reduce calculations for mobile
            thickness={isMobile ? 3 : 5}
            style={{ borderRadius: '50%' }}
          >
            <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );
};

export default About;