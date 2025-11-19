import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// --- Inlined Code from other files ---

// From: types.ts
enum Screen {
  Home,
  Wishes,
  Moments,
  Song,
  Poem,
  PoemGenerator,
}

// From: components/icons/ArrowLeftIcon.tsx
const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

// From: components/BackButton.tsx
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

// From: components/HomeScreen.tsx
interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}
const NavButton: React.FC<{ onClick: () => void; title: string }> = ({ onClick, title }) => (
  <button
    onClick={onClick}
    className="bg-white/60 backdrop-blur-sm border border-rose-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-rose-100/80 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-center h-full"
  >
    <span className="text-base md:text-lg font-bold text-rose-700">{title}</span>
  </button>
);
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <NavButton onClick={() => onNavigate(Screen.Wishes)} title="Lời Chúc Ý Nghĩa" />
          <NavButton onClick={() => onNavigate(Screen.Moments)} title="Khoảnh Khắc Đẹp" />
          <NavButton onClick={() => onNavigate(Screen.Song)} title="Giai Điệu Tri Ân" />
          <NavButton onClick={() => onNavigate(Screen.Poem)} title="Vần Thơ Dâng Tặng" />
          <NavButton onClick={() => onNavigate(Screen.PoemGenerator)} title="AI Sáng Tác Thơ" />
        </div>
      </div>
    </div>
  );
};

// From: components/WishesScreen.tsx
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

// From: components/MomentsScreen.tsx
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

// From: components/SongScreen.tsx
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

// From: components/PoemScreen.tsx
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

// From: components/PoemGeneratorScreen.tsx
interface PoemGeneratorScreenProps {
  onBack: () => void;
}
const PoemGeneratorScreen: React.FC<PoemGeneratorScreenProps> = ({ onBack }) => {
  const [keywords, setKeywords] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!keywords.trim()) {
      setError("Vui lòng nhập một vài từ khóa về người thầy của bạn.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedPoem('');

    try {
      // IMPORTANT: You need to set up environment variables for this to work in production
      const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing. Please set VITE_GEMINI_API_KEY in your .env file.");
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Hãy viết một bài thơ ngắn (4-8 câu) bằng tiếng Việt để tri ân thầy cô nhân ngày 20/11. Bài thơ cần trong sáng, giàu cảm xúc và dựa trên những từ khóa sau: "${keywords}".`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text;
      setGeneratedPoem(text.trim());
    } catch (e) {
      console.error(e);
      setError("Đã có lỗi xảy ra khi sáng tác thơ. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedPoem) {
      navigator.clipboard.writeText(generatedPoem);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const LoadingSpinner = () => (
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
  );
  
  const CopyIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
      </svg>
  );
  
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 relative flex flex-col items-center justify-center">
      <BackButton onClick={onBack} />
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-800 mb-4">
          AI Sáng Tác Thơ
        </h1>
        <p className="text-gray-600 mb-8">
          Nhập vài từ khóa về người thầy, người cô bạn yêu quý, AI sẽ giúp bạn viết nên một vần thơ tri ân.
        </p>
        
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 border border-teal-100">
          <textarea
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Ví dụ: tận tâm, nụ cười hiền, mái tóc bạc..."
            className="w-full p-3 rounded-lg border-2 border-rose-200 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition duration-300 resize-none"
            rows={3}
            disabled={isLoading}
            aria-label="Keywords for poem generation"
          />
          {error && <p className="text-red-500 mt-2 text-sm" role="alert">{error}</p>}
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-rose-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-rose-700 disabled:bg-rose-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? <LoadingSpinner /> : null}
            {isLoading ? 'Đang sáng tác...' : 'Tạo Thơ'}
          </button>
        </div>

        {generatedPoem && (
          <div className="mt-8 bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 border border-teal-100 relative animate-fade-in">
            <button onClick={handleCopy} className="absolute top-4 right-4 text-gray-500 hover:text-rose-600 transition-colors" aria-label="Copy poem to clipboard">
              {copied ? <CheckIcon/> : <CopyIcon />}
            </button>
            <div className="text-lg md:text-xl text-gray-700 leading-loose italic whitespace-pre-wrap text-left">
              {generatedPoem}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// From: App.tsx
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home);
  const [isFading, setIsFading] = useState(false);

  const navigateTo = (screen: Screen) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsFading(false);
    }, 300); // Duration should match the transition duration
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Wishes:
        return <WishesScreen onBack={() => navigateTo(Screen.Home)} />;
      case Screen.Moments:
        return <MomentsScreen onBack={() => navigateTo(Screen.Home)} />;
      case Screen.Song:
        return <SongScreen onBack={() => navigateTo(Screen.Home)} />;
      case Screen.Poem:
        return <PoemScreen onBack={() => navigateTo(Screen.Home)} />;
      case Screen.PoemGenerator:
        return <PoemGeneratorScreen onBack={() => navigateTo(Screen.Home)} />;
      case Screen.Home:
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 to-teal-50 text-gray-800 antialiased overflow-hidden">
      <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;