import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (follower) {
        follower.style.transform = `translate3d(${currentX - 16}px, ${currentY - 16}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'rgba(33, 150, 243, 0.25)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'lighten',
        transition: 'background 0.2s',
      }}
    />
  );
};

export default MouseFollower; 