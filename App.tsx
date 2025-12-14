import React, { useState, useCallback } from 'react';
import { PROBABILITY_NORMAL, PROBABILITY_REVERSE, FORTUNE_DEFINITIONS } from './constants';
import { drawFortune } from './utils/random';
import { FortuneDefinition } from './types';
import { OmikujiBox } from './components/OmikujiBox';
import { ResultCard } from './components/ResultCard';

type GamePhase = 'idle' | 'shaking' | 'stick';

const App: React.FC = () => {
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [result, setResult] = useState<FortuneDefinition | null>(null);
  const [mode, setMode] = useState<'normal' | 'reverse'>('normal');

  const handleDraw = useCallback((selectedMode: 'normal' | 'reverse') => {
    if (phase !== 'idle') return;

    setMode(selectedMode);
    setPhase('shaking');
    setResult(null);

    // 1. Shake for 1.5 seconds
    setTimeout(() => {
      setPhase('stick');

      // 2. Show stick for 1 second, then show result
      setTimeout(() => {
        const probabilities = selectedMode === 'normal' ? PROBABILITY_NORMAL : PROBABILITY_REVERSE;
        const drawnLevel = drawFortune(probabilities);
        const drawnFortune = FORTUNE_DEFINITIONS[drawnLevel];
        
        setPhase('idle');
        setResult(drawnFortune);
      }, 1000);
    }, 1500);
  }, [phase]);

  const handleReset = () => {
    setResult(null);
    setPhase('idle');
  };

  const isInteracting = phase !== 'idle';

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <header className="z-10 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-stone-800 mb-2 tracking-widest font-serif">
          運勢試し
        </h1>
        <p className="text-stone-500 text-sm font-serif">今日の運勢を占ってみましょう</p>
      </header>

      <main className="z-10 w-full max-w-2xl flex flex-col items-center justify-center min-h-[500px]">
        
        {!result ? (
          <>
            <OmikujiBox isShaking={phase === 'shaking'} showStick={phase === 'stick'} />
            
            <div className={`transition-opacity duration-300 flex flex-col gap-4 w-full max-w-sm mt-8 ${isInteracting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              
              {/* Normal Button */}
              <button
                onClick={() => handleDraw('normal')}
                disabled={isInteracting}
                className="group relative w-full overflow-hidden rounded-md bg-white border-2 border-red-700 px-6 py-4 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-0 bg-red-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <div className="relative flex items-center justify-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold border border-red-200">
                     常
                   </div>
                   <div className="flex flex-col items-start">
                     <span className="text-lg font-bold text-stone-800">おみくじを引く</span>
                     <span className="text-xs text-stone-500">通常の確率で運試し</span>
                   </div>
                </div>
              </button>

              {/* Reverse Button */}
              <button
                onClick={() => handleDraw('reverse')}
                disabled={isInteracting}
                className="group relative w-full overflow-hidden rounded-md bg-stone-900 border-2 border-stone-900 px-6 py-4 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] duration-1000 group-hover:bg-[position:200%_0,0_0]"></div>
                <div className="relative flex items-center justify-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-stone-700 text-yellow-400 flex items-center justify-center text-sm font-bold border border-stone-600">
                     逆
                   </div>
                   <div className="flex flex-col items-start">
                     <span className="text-lg font-bold text-stone-50 bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400">確率逆転おみくじ</span>
                     <span className="text-xs text-stone-400">大吉率71%の超高確率モード</span>
                   </div>
                </div>
              </button>

              <div className="mt-4 p-4 bg-stone-300/30 rounded text-xs text-stone-500 text-center font-mono">
                 ※ 確率逆転モードは大吉が出やすくなりますが、<br/>
                 大凶のリスクも跳ね上がります。
              </div>

            </div>
          </>
        ) : (
          <ResultCard 
            fortune={result} 
            onReset={handleReset} 
            isReverseMode={mode === 'reverse'}
          />
        )}
      </main>

      <footer className="mt-12 text-stone-400 text-xs text-center z-10 font-sans">
        &copy; {new Date().getFullYear()} Omikuji App. All rights reserved.
      </footer>
    </div>
  );
};

export default App;