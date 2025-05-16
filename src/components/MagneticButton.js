import React, { useRef } from 'react';

const MagneticButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={btnRef}
      className={`transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton; 