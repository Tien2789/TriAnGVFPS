
import React from 'react';
import BackButton from './BackButton.tsx';

interface WishesScreenProps {
  onBack: () => void;
}

const wishes = [
  "Nhân ngày Nhà giáo Việt Nam 20/11, kính chúc các thầy cô luôn mạnh khoẻ, hạnh phúc và gặt hái được nhiều thành công trong sự nghiệp trồng người.",
  "Em xin gửi lời tri ân chân thành và sâu sắc nhất tới các thầy cô. Cảm ơn thầy cô đã dìu dắt chúng em nên người.",
  "Chúc các thầy cô giáo có một ngày 20/11 thật vui vẻ và ý nghĩa. Mong thầy cô luôn giữ vững ngọn lửa nhiệt huyết với nghề.",
  "Dù đã ra trường, em vẫn luôn nhớ về công ơn dạy dỗ của thầy cô. Kính chúc thầy cô một ngày lễ tràn đầy niềm vui!",
  "Cảm ơn thầy cô đã là người chèo lái con đò tri thức, đưa chúng em đến bến bờ thành công. Chúc mừng ngày Nhà giáo Việt Nam!",
  "Mỗi bài giảng của thầy cô đều là những bài học quý giá. Em xin kính chúc thầy cô luôn dồi dào sức khỏe để tiếp tục cống hiến cho sự nghiệp giáo dục.",
];

const WishesScreen: React.FC<WishesScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 relative">
      <BackButton onClick={onBack} />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-800 mt-16 mb-8">
          Lời Chúc Ý Nghĩa
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 border border-teal-100 transform transition-transform duration-300 hover:scale-105"
            >
              <p className="text-gray-700 italic">"{wish}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishesScreen;