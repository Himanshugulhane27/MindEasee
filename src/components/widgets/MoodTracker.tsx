import React, { useState } from 'react';
import { LineChart, BarChart3, Info } from 'lucide-react';
import { MoodDataPoint, moodData } from '../../data/moodData';

const MoodTracker: React.FC = () => {
  const [activeMood, setActiveMood] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [viewMode, setViewMode] = useState<'chart' | 'log'>('chart');

  const moods = [
    { name: 'Joyful', emoji: '😊', color: 'bg-green-100 text-green-600 border-green-200' },
    { name: 'Good', emoji: '🙂', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { name: 'Okay', emoji: '😐', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { name: 'Low', emoji: '😔', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { name: 'Stressed', emoji: '😰', color: 'bg-red-100 text-red-600 border-red-200' },
  ];

  const handleLogMood = () => {
    alert(`Mood logged: ${activeMood} with note: ${note}`);
    setActiveMood(null);
    setNote('');
  };

  const renderMoodChart = () => {
    return (
      <div className="relative h-52 mt-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-between px-2">
          {moodData.map((dataPoint: MoodDataPoint, index: number) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div 
                style={{ height: `${dataPoint.level * 20}%` }}
                className={`w-5/6 rounded-t-lg ${
                  dataPoint.level >= 4 ? 'bg-green-400' :
                  dataPoint.level >= 3 ? 'bg-blue-400' :
                  dataPoint.level >= 2 ? 'bg-yellow-400' :
                  'bg-orange-400'
                }`}
              ></div>
              <div className="text-xs mt-2 text-gray-600">{dataPoint.day}</div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 right-0 bottom-8 h-px bg-gray-200"></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden h-full">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-indigo-900 text-lg">Mood Tracker</h3>
          <div className="flex space-x-1">
            <button 
              onClick={() => setViewMode('chart')}
              className={`p-2 rounded-lg ${viewMode === 'chart' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <BarChart3 size={18} />
            </button>
            <button 
              onClick={() => setViewMode('log')}
              className={`p-2 rounded-lg ${viewMode === 'log' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <LineChart size={18} />
            </button>
          </div>
        </div>

        {viewMode === 'chart' ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">Your mood this week</p>
              <button className="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
                <Info size={15} className="mr-1" />
                Details
              </button>
            </div>
            {renderMoodChart()}
          </>
        ) : (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-3">How are you feeling right now?</p>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => setActiveMood(mood.name)}
                  className={`
                    flex flex-col items-center justify-center py-2 px-1 rounded-xl border transition-all
                    ${activeMood === mood.name ? mood.color : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50'}
                  `}
                >
                  <span className="text-2xl mb-1">{mood.emoji}</span>
                  <span className="text-xs">{mood.name}</span>
                </button>
              ))}
            </div>
            <div className="mb-4">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note about how you're feeling... (optional)"
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                rows={2}
              ></textarea>
            </div>
            <button
              onClick={handleLogMood}
              disabled={!activeMood}
              className={`
                w-full py-2.5 rounded-xl font-medium text-white transition-all
                ${activeMood ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'}
              `}
            >
              Log Mood
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;