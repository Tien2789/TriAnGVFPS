
import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm text-gray-700 rounded-full shadow-lg hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span className="font-semibold hidden sm:inline">Trở Về</span>
    </button>
  );
};

export default BackButton;
