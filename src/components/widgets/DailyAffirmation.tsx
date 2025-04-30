import React, { useState } from 'react';
import { Bookmark, RefreshCw, Share2 } from 'lucide-react';
import { affirmations } from '../../data/affirmations';

const DailyAffirmation: React.FC = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const getNewAffirmation = () => {
    let newAffirmation;
    do {
      newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    } while (newAffirmation === currentAffirmation);
    
    setCurrentAffirmation(newAffirmation);
    setIsBookmarked(false);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden h-full">
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-indigo-900 text-lg">Daily Affirmation</h3>
          <button 
            onClick={toggleBookmark} 
            className={`p-2 rounded-lg ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark affirmation"}
          >
            <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="flex-grow p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center mb-3">
          <p className="text-center text-indigo-900 text-lg font-medium leading-relaxed">
            "{currentAffirmation}"
          </p>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={getNewAffirmation}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <RefreshCw size={15} className="mr-1" /> New affirmation
          </button>
          
          <button 
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <Share2 size={15} className="mr-1" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyAffirmation;