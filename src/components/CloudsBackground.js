import React from 'react';

const clouds = [
  { left: '10%', size: 80, duration: 22, delay: 0 },
  { left: '30%', size: 120, duration: 28, delay: 4 },
  { left: '55%', size: 100, duration: 25, delay: 2 },
  { left: '75%', size: 140, duration: 32, delay: 6 },
  { left: '85%', size: 90, duration: 20, delay: 1 },
];

const CloudSVG = ({ size }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="24" rx="20" ry="12" fill="#e0e7ef" />
    <ellipse cx="44" cy="20" rx="12" ry="8" fill="#e0e7ef" />
    <ellipse cx="32" cy="16" rx="16" ry="10" fill="#f5f8fa" />
  </svg>
);

const CloudsBackground = () => (
  <div className="clouds-bg">
    {clouds.map((cloud, i) => (
      <div
        key={i}
        className="cloud"
        style={{
          left: cloud.left,
          width: cloud.size,
          animationDuration: `${cloud.duration}s`,
          animationDelay: `${cloud.delay}s`,
        }}
      >
        <CloudSVG size={cloud.size} />
      </div>
    ))}
    <style>{`
      .clouds-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
      }
      .cloud {
        position: absolute;
        bottom: -120px;
        opacity: 0.7;
        animation: cloudRise linear infinite;
      }
      @keyframes cloudRise {
        0% {
          transform: translateY(0) scale(1) translateX(0);
          opacity: 0.7;
        }
        10% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          transform: translateY(-110vh) scale(1.1) translateX(30px);
          opacity: 0.7;
        }
      }
    `}</style>
  </div>
);

export default CloudsBackground; 