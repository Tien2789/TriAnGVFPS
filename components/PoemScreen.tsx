
import React from 'react';
import BackButton from './BackButton';

interface PoemScreenProps {
  onBack: () => void;
}

const PoemScreen: React.FC<PoemScreenProps> = ({ onBack }) => {
  const poemLines = [
    "Có một nghề bụi phấn bám đầy tay",
    "Người ta bảo là nghề trong sạch nhất",
    "Có một nghề không trồng cây vào đất",
    "Mà cho đời những đóa hoa thơm.",
    "",
    "Lặng xuôi năm tháng êm trôi",
    "Con đò kể chuyện một thời rất xưa",
    "Rằng người chèo chống đón đưa",
    "Mặc cho bụi phấn giữa trưa rơi nhiều.",
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 relative flex flex-col items-center justify-center">
      <BackButton onClick={onBack} />
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-800 mb-8">
          Vần Thơ Dâng Tặng
        </h1>
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-8 sm:p-12 border border-teal-100">
          <div className="text-lg md:text-xl text-gray-700 leading-loose italic">
            {poemLines.map((line, index) => (
              <p key={index} className={line === "" ? "my-4" : ""}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemScreen;
