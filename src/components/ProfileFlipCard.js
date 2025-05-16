import React, { useState } from 'react';

const ProfileFlipCard = ({ frontImage, backImage, size = 180 }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      style={{ width: size, height: size }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`flip-card-inner${flipped ? ' flipped' : ''}`}
        style={{ width: size, height: size }}
      >
        <div className="flip-card-front" style={{ width: size, height: size }}>
          <img
            src={frontImage}
            alt="Profile Front"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <div className="flip-card-back" style={{ width: size, height: size }}>
          <img
            src={backImage}
            alt="Profile Back"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
      </div>
      <style>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
          display: inline-block;
          border-radius: 50%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
          border-radius: 50%;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 50%;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ProfileFlipCard; 