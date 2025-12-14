import React, { useEffect, useState } from 'react';
import { FortuneDefinition } from '../types';

interface ResultCardProps {
  fortune: FortuneDefinition;
  onReset: () => void;
  isReverseMode: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ fortune, onReset, isReverseMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative max-w-sm w-full mx-auto bg-stone-50 p-1 shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
    >
      <div className={`border-4 ${fortune.borderColorClass} p-6 h-full flex flex-col items-center justify-between min-h-[400px] bg-white`}>
        
        {/* Header */}
        <div className="text-center mb-4">
           <span className="text-xs tracking-[0.3em] text-stone-400 uppercase">Fortune Result</span>
           <div className="mt-2 w-16 h-1 bg-stone-200 mx-auto rounded-full"></div>
        </div>

        {/* Main Result */}
        <div className="flex-grow flex flex-col items-center justify-center py-6">
          <div className={`${fortune.colorClass} text-6xl md:text-8xl font-black font-serif tracking-widest mb-6 drop-shadow-sm`}>
            {fortune.label}
          </div>
          <div className={`text-sm md:text-base text-stone-600 font-serif text-center leading-loose px-4`}>
            {fortune.description}
          </div>
        </div>

        {/* Footer info */}
        <div className="w-full mt-6 pt-6 border-t border-dashed border-stone-300">
           <div className="flex justify-between items-center text-xs text-stone-400 font-mono">
              <span>MODE: {isReverseMode ? 'REVERSE' : 'NORMAL'}</span>
              <span>NO. {Math.floor(Math.random() * 100).toString().padStart(3, '0')}</span>
           </div>
        </div>

        <button 
          onClick={onReset}
          className="mt-6 w-full py-3 bg-stone-900 text-stone-50 font-bold hover:bg-stone-700 transition-colors rounded-sm tracking-widest uppercase text-sm"
        >
          もう一度引く
        </button>
      </div>
      
      {/* Decorative corner stamps */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-stone-900 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-stone-900 opacity-10"></div>
    </div>
  );
};