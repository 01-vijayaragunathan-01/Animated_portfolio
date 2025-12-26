import React, { useState, useEffect } from 'react';
import ElectricBorder from '../animations/Electric';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();
  const skills = [
    'Frontend Developer',
    'FullStack Developer',
    'AI Agent Developer'
  ];
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



  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];

  return (
    <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 py-20 md:py-0 overflow-y-auto">
      <div className="max-w-6xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            I am Vijayaragunathan
          </h1>

          <div className="text-3xl md:text-4xl font-semibold min-h-[3rem]">
            <span className="text-white/90">I am a </span>
            <span className="text-purple-400">
              {displayedText}<span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            Passionate about creating innovative solutions and building seamless digital experiences.
            With expertise in modern web technologies and AI integration.
          </p>

          {/* Social Icons  */}
          <div className="flex items-center gap-6 py-2">
            <a href="https://github.com/01-vijayaragunathan-01" target="_blank" rel="noreferrer" className="text-2xl text-white/50 hover:text-purple-400 transition-colors">
              <SiGithub />
            </a>
            <a href="https://www.instagram.com/01_v_i_j_a_y_01/" target="_blank" rel="noreferrer" className="text-2xl text-white/50 hover:text-purple-400 transition-colors">
              <SiInstagram />
            </a>
            <a href="https://www.linkedin.com/in/vijayaragunathan01/" target="_blank" rel="noreferrer" className="text-2xl text-white/50 hover:text-purple-400 transition-colors">
              <SiLinkedin />
            </a>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate('/projects')}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 font-medium"
            >
              View Projects
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg transition-all backdrop-blur-sm"
            >
              Contact Me
            </button>

          </div>

        </div>



        {/* Right Side*/}
        <div className="flex justify-center items-center scale-75 md:scale-100">
          <ElectricBorder color="#0f2bdb"
            speed={1}
            chaos={0.5}
            thickness={5}
            style={{ borderRadius: '50%' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-sm">
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