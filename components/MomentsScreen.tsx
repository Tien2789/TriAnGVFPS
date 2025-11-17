
import React from 'react';
import BackButton from './BackButton.tsx';

interface MomentsScreenProps {
  onBack: () => void;
}

const imageIds = [1025, 237, 1074, 431, 1080, 88, 367, 493, 659];

const MomentsScreen: React.FC<MomentsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 relative">
      <BackButton onClick={onBack} />
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-800 mt-16 mb-8">
          Những Khoảnh Khắc Đẹp
        </h1>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imageIds.map((id) => (
            <div key={id} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
              <img
                src={`https://picsum.photos/id/${id}/500/` + Math.floor(300 + Math.random() * 300)}
                alt="Khoảnh khắc đẹp"
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentsScreen;