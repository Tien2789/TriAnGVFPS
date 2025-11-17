
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import HomeScreen from './components/HomeScreen';
import WishesScreen from './components/WishesScreen';
import MomentsScreen from './components/MomentsScreen';
import SongScreen from './components/SongScreen';
import PoemScreen from './components/PoemScreen';

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
