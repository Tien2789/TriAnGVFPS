
import React from 'react';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}></div>
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-2">Mừng Ngày Nhà Giáo Việt Nam</h2>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-rose-800 mb-4 tracking-wider">20 - 11</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 mb-10">
          "Người thầy vẫn lặng lẽ đi về sớm trưa. Từng ngày, giọt mồ hôi rơi nhòe trang giấy..."
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <NavButton onClick={() => onNavigate(Screen.Wishes)} title="Lời Chúc Ý Nghĩa" />
          <NavButton onClick={() => onNavigate(Screen.Moments)} title="Khoảnh Khắc Đẹp" />
          <NavButton onClick={() => onNavigate(Screen.Song)} title="Giai Điệu Tri Ân" />
          <NavButton onClick={() => onNavigate(Screen.Poem)} title="Vần Thơ Dâng Tặng" />
        </div>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ onClick: () => void; title: string }> = ({ onClick, title }) => (
  <button
    onClick={onClick}
    className="bg-white/60 backdrop-blur-sm border border-rose-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-rose-100/80 transition-all duration-300 transform hover:-translate-y-1"
  >
    <span className="text-base md:text-lg font-bold text-rose-700">{title}</span>
  </button>
);

export default HomeScreen;
