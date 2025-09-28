import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 3 + 1; // Random increment between 1-4
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Keep showing for a bit after 100%
        setTimeout(() => {
          setIsVisible(false);
        }, 100);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything when not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div  className='bg-dark-brown'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        animation: 'pulse 3s infinite'
      }} className='bg-dark-brown'></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '60px',
        height: '60px',
        backgroundColor: 'rgba(245, 230, 211, 0.1)',
        borderRadius: '50%',
        animation: 'pulse 3s infinite 1s'
      }}></div>

      {/* Main loader content */}
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        
        {/* SPYLT Logo */}
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#F5E6D3',
          marginBottom: '3rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          fontFamily: 'serif',
          transform: `scale(${0.8 + (progress / 500)})`,
          transition: 'transform 0.3s ease'
        }}>
          Spylt
        </div>

        {/* Decorative underline */}
        <div style={{
          height: '3px',
          backgroundColor: '#F5E6D3',
          margin: '0 auto 3rem',
          borderRadius: '2px',
          width: `${progress * 2}px`,
          maxWidth: '200px',
          transition: 'width 0.3s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}></div>

        {/* Progress percentage */}
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#F5E6D3',
          marginBottom: '2rem',
          opacity: progress > 10 ? 1 : 0.5,
          transition: 'opacity 0.5s ease'
        }}>
          {progress} %
        </div>

        {/* Progress bar container */}
        <div style={{
          width: '300px',
          height: '8px',
          backgroundColor: 'rgba(245, 230, 211, 0.3)',
          borderRadius: '10px',
          margin: '0 auto 2rem',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Progress bar fill */}
          <div style={{
            height: '100%',
            backgroundColor: '#F5E6D3',
            borderRadius: '10px',
            width: `${progress}%`,
            transition: 'width 0.3s ease',
            boxShadow: '0 2px 8px rgba(245, 230, 211, 0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Shimmer effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 2s infinite'
            }}></div>
          </div>
        </div>

        {/* Loading text */}
        <div style={{
          fontSize: '1.1rem',
          color: '#F5E6D3',
          opacity: 0.8,
          fontWeight: '300'
        }}>
          {progress < 25 && "Initializing..."}
          {progress >= 25 && progress < 50 && "Loading content..."}
          {progress >= 50 && progress < 75 && "Preparing experience..."}
          {progress >= 75 && progress < 100 && "Almost ready..."}
          {progress === 100 && "Complete!"}
        </div>

        {/* Floating dots */}
        {progress > 30 && (
          <>
            <div style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              backgroundColor: '#F5E6D3',
              borderRadius: '50%',
              top: '20%',
              left: '20%',
              opacity: 0.6,
              animation: 'float 3s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: '#F5E6D3',
              borderRadius: '50%',
              bottom: '30%',
              right: '25%',
              opacity: 0.4,
              animation: 'float 3s ease-in-out infinite 1s'
            }}></div>
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;