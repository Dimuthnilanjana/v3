import React from 'react';

interface LoaderProps {
  words?: string[];
}

const LoaderTxt: React.FC<LoaderProps> = ({ words = ['buttons', 'forms', 'switches'] }) => {
  return (
    <div className="rounded-[1.25rem]">
      <div className="flex h-10 rounded-lg text-2xl font-medium text-gray-500 font-['Poppins',sans-serif]">
        <p>I'm</p>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)] from-10% via-30% to-90%"></div>
          {words.map((word, index) => (
            <span 
              key={index}
              className="block h-full pl-1.5 text-purple-500 animate-word-spin"
              style={{
                animationDelay: `${index * 2}s`
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoaderTxt;