import React from 'react';

const Button = ({ as: Component = 'button', children, className = '', variant = 'primary', ...props }) => {
  // Secondary button style
  if (variant === 'secondary') {
    return (
      <Component
        className={`inline-flex items-center justify-center gap-x-[10px] bg-white text-black border border-gray-300 rounded-[5px] font-poppins font-bold text-xs md:text-sm px-4 md:px-5 py-3 transition hover:bg-gray-100 shadow-sm leading-tight text-center ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }

  if (variant === 'cta') {
    return (
      <Component
        className={`inline-flex items-center justify-center font-poppins font-medium text-white text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-[9px] bg-[#1795FF] hover:bg-[#0f7dd4] transition-shadow duration-200 shadow-[0_10px_20px_rgba(23,149,255,0.35)] border border-[#0D94D1] ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }

  // Primary button style (with aura)
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Gradient aura */}
      <div
        className="absolute inset-0 z-0 rounded-full blur-[22px] opacity-80"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 89, 255, 0.5) 0%, rgba(0, 255, 233, 0.5) 30%, rgba(174, 0, 255, 0.5) 63%, rgba(255, 0, 153, 0.5) 100%)',
        }}
      ></div>

      {/* Button */}
      <Component
        className="relative z-10 font-poppins font-medium flex items-center justify-center gap-x-[10px] transition hover:bg-[#181818] shadow-none cursor-pointer text-xs md:text-sm leading-tight text-center"
        style={{
          backgroundColor: 'rgb(15, 15, 15)',
          color: 'rgb(255, 255, 255)',
          borderRadius: '5px',
          fontSize: '12px',
          fontWeight: '700',
          padding: '12px 16px',
        }}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

export default Button;
