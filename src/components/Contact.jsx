import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi';
import DecryptedText from '../animations/DecryptedText';
import ElectricBorder from '../animations/Electric';
import ShinyText from '../animations/ShinyText';
import PixelBlast from '../animations/PixelBlast';
import Magnet from '../animations/Magnet';
import LetterGlitch from '../animations/LetterGlitch'; 

/**
 * TRUCK DELIVERY SVG
 */
const DeliveryTruck = () => (
    <svg className="w-16 h-10" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10H44V32H2V10Z" fill="#5227FF" />
        <path d="M44 18H54L60 24V32H44V18Z" fill="#633aff" />
        <rect x="48" y="20" width="8" height="6" fill="#060010" />
        <circle cx="12" cy="34" r="4" fill="white" />
        <circle cx="38" cy="34" r="4" fill="white" />
        <circle cx="54" cy="34" r="4" fill="white" />
        <path d="M5 15H15V18H5V15Z" fill="white" opacity="0.3" />
    </svg>
);

const Contact = () => {
    const [status, setStatus] = useState('idle'); 
    const form = useRef();
    const[formData, setFormData] = useState({
        your_name: '',
        your_email: '',
        your_message: ''
    });

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Start Truck Animation
        const tl = gsap.timeline();
        tl.to(".form-content", { opacity: 0, y: -20, duration: 0.4 });
        tl.fromTo(".delivery-track", { width: 0, opacity: 0 }, { width: "100%", opacity: 1, duration: 0.5 });
        tl.fromTo(".truck-container", { x: "-20%" }, { x: "120%", duration: 2, ease: "power1.inOut" });

        emailjs.sendForm(
            'service_kjmchge',   
            'template_ygogqfq',  
            form.current,
            'Xu2g296K6DeR4kpon'    
        )

            .then((result) => {
                console.log('Success:', result.text);
                setTimeout(() => setStatus('success'), 500);
            }, (error) => {
                console.log('Error:', error.text);
                setStatus('error');
                alert("Transmission failed. Please check your connection.");
            });
    };

    return (
        <section className="relative w-full min-h-screen bg-[#060010] text-white overflow-hidden flex flex-col items-center justify-center py-20 px-4">

            
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <DecryptedText
                        text="GET IN TOUCH"
                        className="text-4xl md:text-9xl font-black tracking-tighter uppercase italic"
                        animateOn="view"
                    />
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-[1px] w-12 bg-purple-500"></div>
                        <p className="text-purple-400 font-mono text-xs tracking-[0.5em] uppercase">Secure Channel</p>
                        <div className="h-[1px] w-12 bg-purple-500"></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h3 className="text-xs font-bold text-white/40 tracking-[0.3em] uppercase">Connect With Me</h3>
                            <div className="flex flex-wrap gap-6">
                                {[
                                    { Icon: SiGithub, color: '#fff', link: 'https://github.com/01-vijayaragunathan-01' },
                                    { Icon: SiLinkedin, color: '#0077B5', link: 'https://www.linkedin.com/in/vijayaragunathan01/' },
                                    { Icon: SiInstagram, color: '#fff', link: 'https://www.instagram.com/01_v_i_j_a_y_01/' },
                                    { Icon: FiMail, color: '#5227FF', link: 'mailto:ragunathanvijay68@gmail.com' }
                                ].map((item, i) => (
                                    <Magnet key={i}>
                                        <a href={item.link} target="_blank" rel="noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-3xl hover:border-purple-500 hover:shadow-[0_0_20px_rgba(82,39,255,0.3)] transition-all duration-300">
                                            <item.Icon style={{ color: item.color }} />
                                        </a>
                                    </Magnet>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 border-l-2 border-purple-500 bg-purple-500/5 rounded-r-2xl">
                            <p className="text-white/60 leading-relaxed">
                                Currently open to <span className="text-white font-bold">Full-Stack Development</span> and <span className="text-white font-bold">Collabration</span>.
                                Based in India, working globally.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: CONTACT FORM */}
                    <div className="relative">
                        <ElectricBorder color="#5227FF" thickness={2}>
                            <div className="bg-black/60 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem] border border-white/5 min-h-[500px] flex flex-col justify-center">

                                {status !== 'success' ? (
                                    <div className="relative">
                                        <form ref={form} onSubmit={sendEmail} className="form-content space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">Your Name</label>
                                                <div className="relative">
                                                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                                                    <input type="text" name="your_name" placeholder='Your Name' required value={formData.your_name} onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-500 transition-all" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">Email Address</label>
                                                <div className="relative">
                                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                                                    <input type="email" name="your_email" placeholder='Your email' required value={formData.your_email} onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-500 transition-all" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">Message</label>
                                                <div className="relative">
                                                    <FiMessageSquare className="absolute left-4 top-4 text-white/20" />
                                                    <textarea name="your_message" rows="4" placeholder='Message...' required value={formData.message} onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-500 transition-all resize-none" />
                                                </div>
                                            </div>

                                            <button type="submit" disabled={status === 'sending'}
                                                className="w-full py-5 bg-[#5227FF] rounded-2xl font-black tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                                {status === 'sending' ? "TRANSMITTING..." : <><ShinyText text="DISPATCH MESSAGE" /> <FiSend /></>}
                                            </button>
                                        </form>

                                        {/* DELIVERY TRACK */}
                                        <div className="delivery-track absolute top-1/2 left-0 w-full h-[1px] bg-purple-500/30 opacity-0 pointer-events-none">
                                            <div className="truck-container absolute -top-8 left-0">
                                                <DeliveryTruck />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-8 py-10">
                                        <div className="relative inline-block">
                                            <PixelBlast transparent={true} color="#5227FF" />
                                            <FiCheckCircle className="text-8xl text-purple-500 relative z-10 mx-auto" />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-4xl font-black italic tracking-tighter">PACKAGE DELIVERED</h2>
                                            <p className="text-white/50 text-sm">Your message has reached the inbox successfully.</p>
                                        </div>
                                        <button onClick={() => setStatus('idle')} className="text-purple-400 font-bold border-b border-purple-400 pb-1">SEND ANOTHER?</button>
                                    </div>
                                )}
                            </div>
                        </ElectricBorder>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;