import React from 'react';

interface OmikujiBoxProps {
  isShaking: boolean;
  showStick: boolean;
}

export const OmikujiBox: React.FC<OmikujiBoxProps> = ({ isShaking, showStick }) => {
  return (
    <div className={`relative w-48 h-64 mx-auto mb-8 transition-all duration-300 ${isShaking ? 'animate-shake' : ''}`}>
      {/* Hexagonal Box Body (CSS Representation) */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-br from-red-700 to-red-900 rounded-sm shadow-2xl flex items-center justify-center border-x-8 border-red-950 z-10">
         <div 
           className="w-16 h-32 bg-stone-100 opacity-90 flex items-center justify-center font-serif font-bold text-2xl text-stone-900 border-2 border-stone-800 tracking-widest shadow-inner"
           style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
         >
            御神籤
         </div>
      </div>
      
      {/* Box Lid */}
      <div className="absolute inset-x-0 top-0 h-16 bg-stone-200 z-0 rounded-t-lg border-b-4 border-stone-300 transform scale-90 translate-y-8 shadow-md"></div>
      
      {/* Stick coming out */}
      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-16 bg-amber-200 border-[3px] border-stone-900 z-0 transition-all duration-500 ease-out ${showStick ? '-translate-y-4 opacity-100' : 'translate-y-8 opacity-0'}`}></div>
    </div>
  );
};