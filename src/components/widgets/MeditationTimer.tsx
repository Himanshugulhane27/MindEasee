import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const MeditationTimer: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(300); // 5 minutes in seconds
  const [breathState, setBreathState] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathCount, setBreathCount] = useState(0);

  // Format time as MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Breathing cycle effect
  useEffect(() => {
    let breathInterval: NodeJS.Timeout;
    
    if (isActive) {
      const breathCycle = 12; // 4s inhale, 4s hold, 4s exhale
      breathInterval = setInterval(() => {
        setBreathCount((prev) => {
          const newCount = (prev + 1) % breathCycle;
          
          if (newCount === 0) {
            setBreathState('inhale');
          } else if (newCount === 4) {
            setBreathState('hold');
          } else if (newCount === 8) {
            setBreathState('exhale');
          }
          
          return newCount;
        });
      }, 1000);
    }
    
    return () => {
      if (breathInterval) clearInterval(breathInterval);
    };
  }, [isActive]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && seconds < duration) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (seconds >= duration) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds, duration]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setBreathCount(0);
    setBreathState('inhale');
  };

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
    resetTimer();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden h-full">
      <div className="p-5 flex flex-col h-full">
        <div className="mb-3">
          <h3 className="font-semibold text-indigo-900 text-lg">Meditation Timer</h3>
          <p className="text-sm text-gray-600">Take a mindful breath break</p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center py-6">
          {/* Breathing circle animation */}
          <div className="relative mb-8">
            <div 
              className={`
                w-48 h-48 rounded-full border-4 border-indigo-200 flex items-center justify-center
                transition-all duration-1000 ease-in-out
                ${breathState === 'inhale' ? 'scale-100' : breathState === 'hold' ? 'scale-110' : 'scale-95'}
              `}
            >
              <div 
                className={`
                  absolute inset-0 rounded-full bg-indigo-100 opacity-40
                  transform scale-90 transition-all duration-4000 ease-in-out
                  ${breathState === 'inhale' ? 'scale-95' : breathState === 'hold' ? 'scale-100' : 'scale-90'}
                `}
              ></div>
              <div className="z-10 text-center">
                <div className="text-3xl font-light text-indigo-900 mb-1">
                  {formatTime(duration - seconds)}
                </div>
                <p className="text-sm text-indigo-600 capitalize">{breathState}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button 
              onClick={resetTimer}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Reset timer"
            >
              <RotateCcw size={20} />
            </button>
            
            <button 
              onClick={toggleTimer}
              className={`
                p-5 rounded-full transition-colors
                ${isActive 
                  ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'}
              `}
              aria-label={isActive ? "Pause meditation" : "Start meditation"}
            >
              {isActive ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>

          {/* Duration presets */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {[
              { label: '5 min', value: 300 },
              { label: '10 min', value: 600 },
              { label: '15 min', value: 900 },
            ].map((preset) => (
              <button
                key={preset.value}
                onClick={() => handleDurationChange(preset.value)}
                className={`
                  py-2 px-3 rounded-lg text-sm font-medium transition-colors
                  ${duration === preset.value
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationTimer;