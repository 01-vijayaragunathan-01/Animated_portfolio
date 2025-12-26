import React from 'react';
import PixelBlast from '../animations/PixelBlast';
import InfiniteMenu from '../animations/InfiniteMenu';

const Live = () => {
    const items = [
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
            image: '/assets/live%20(1).png',
            link: 'https://mentor-metee.netlify.app/',
            title: 'Mentor Mentee',
            description: 'Full-stack social networking',
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
            image: '/assets/live%20(1).png',
            link: 'https://mentor-metee.netlify.app/',
            title: 'Mentor Mentee',
            description: 'Full-stack social networking',
        }
    ];

    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            position: 'relative', 
            backgroundColor: '#030014', 
            overflow: 'hidden' 
        }}>
            
            
            <div style={{ 
                position: 'absolute', 
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none' 
            }}>
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples={true}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={true}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent={true} 
                />
            </div>

            
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(3,0,20,0) 0%, rgba(3,0,20,0.4) 50%, rgba(3,0,20,0.8) 100%)',
                pointerEvents: 'none',
                zIndex: 2
            }} />

           
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 15,
                textAlign: 'center',
                pointerEvents: 'none'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #B19EEF 0%, #FF9FFC 50%, #5227FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em'
                }}>
                    {/* LIVE PROJECTS */}
                </h1>
                <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    fontWeight: '400'
                }}>
                    Explore my deployed applications
                </p>
            </div>

            
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