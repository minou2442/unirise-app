import React from 'react';
import logo from '../../assets/logo.png'; // 👈 adjusted path for UI folder

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center ${className} group`}>
      <div className="flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-black rounded-xl p-2.5 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <img
          src={logo}
          alt="UniRise Logo"
          className="w-6 h-6 object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <span className="ml-3 font-bold text-xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-500 transition-all duration-300 group-hover:tracking-wider">
        UniRise
      </span>
    </div>
  );
};

export default Logo;
