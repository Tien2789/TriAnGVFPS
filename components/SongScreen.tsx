
import React from 'react';
import BackButton from './BackButton';

interface SongScreenProps {
  onBack: () => void;
}

const SongScreen: React.FC<SongScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 relative flex flex-col items-center justify-center">
      <BackButton onClick={onBack} />
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-800 mb-8">
          Giai Điệu Tri Ân
        </h1>
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-4 sm:p-6 border border-teal-100 overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/g0-n921l23I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold text-teal-700 mt-6">Bụi Phấn</h2>
          <p className="text-gray-600 mt-2 italic">
            Khi thầy viết bảng, bụi phấn rơi rơi, có hạt bụi nào rơi trên bục giảng, có hạt bụi nào vương trên tóc thầy...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongScreen;
