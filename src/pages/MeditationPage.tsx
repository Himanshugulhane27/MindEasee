import React, { useState } from 'react';
import { Clock, Music, Play, Square, Volume2, VolumeX, Star, Filter } from 'lucide-react';
import MeditationTimer from '../components/widgets/MeditationTimer';

const MeditationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guided' | 'timer'>('guided');
  
  const categories = ['All', 'Sleep', 'Anxiety', 'Focus', 'Stress Relief', 'Beginners'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const guidedMeditations = [
    {
      id: 1,
      title: 'Calm Mind Meditation',
      duration: '10 min',
      category: 'Anxiety',
      image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: true
    },
    {
      id: 2,
      title: 'Peaceful Sleep',
      duration: '15 min',
      category: 'Sleep',
      image: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: false
    },
    {
      id: 3,
      title: 'Morning Clarity',
      duration: '8 min',
      category: 'Focus',
      image: 'https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: true
    },
    {
      id: 4,
      title: 'Deep Relaxation',
      duration: '20 min',
      category: 'Stress Relief',
      image: 'https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: false
    },
    {
      id: 5,
      title: 'Beginner\'s Mindfulness',
      duration: '5 min',
      category: 'Beginners',
      image: 'https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: false
    },
    {
      id: 6,
      title: 'Anxiety Release',
      duration: '12 min',
      category: 'Anxiety',
      image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      favorite: false
    },
  ];

  const filteredMeditations = activeCategory === 'All' 
    ? guidedMeditations
    : guidedMeditations.filter(m => m.category === activeCategory);

  return (
    <div className="pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Meditation</h1>
        <p className="text-gray-600">Find your calm with guided or timed sessions</p>
      </div>

      <div className="mb-6 bg-white rounded-2xl shadow-sm border border-indigo-100 p-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('guided')}
            className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-colors
              ${activeTab === 'guided' 
                ? 'bg-indigo-100 text-indigo-900' 
                : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <Music size={18} className="inline-block mr-2" />
            Guided Meditations
          </button>
          <button
            onClick={() => setActiveTab('timer')}
            className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-colors
              ${activeTab === 'timer' 
                ? 'bg-indigo-100 text-indigo-900' 
                : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <Clock size={18} className="inline-block mr-2" />
            Meditation Timer
          </button>
        </div>
      </div>

      {activeTab === 'guided' ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-indigo-900">Guided Meditations</h2>
              <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <Filter size={18} />
              </button>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-1.5 px-3 text-sm font-medium rounded-full whitespace-nowrap
                    ${activeCategory === category 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMeditations.map(meditation => (
                <div 
                  key={meditation.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
                >
                  <div 
                    className="h-40 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${meditation.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600">
                        <Play size={20} className="ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <button className={`p-1.5 rounded-full bg-black bg-opacity-40 ${meditation.favorite ? 'text-yellow-400' : 'text-white'}`}>
                        <Star size={16} fill={meditation.favorite ? "currentColor" : "none"} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
                      {meditation.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-xs inline-flex items-center text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {meditation.duration}
                      </span>
                      <span className="text-xs bg-indigo-50 text-indigo-700 py-1 px-2 rounded-full">
                        {meditation.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5">
            <h2 className="text-lg font-semibold text-indigo-900 mb-4">Now Playing</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-40 h-40 rounded-xl bg-cover bg-center" 
                   style={{ backgroundImage: `url(https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-medium text-lg text-indigo-900">Calm Mind Meditation</h3>
                <p className="text-gray-600 mb-4">Guided by Sarah Johnson</p>
                
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>4:10</span>
                  <span>10:00</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
                    <Volume2 size={20} />
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="19 20 9 12 19 4 19 20"></polygon>
                        <line x1="5" y1="19" x2="5" y2="5"></line>
                      </svg>
                    </button>
                    <button className="p-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                      <Square size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 4 15 12 5 20 5 4"></polygon>
                        <line x1="19" y1="5" x2="19" y2="19"></line>
                      </svg>
                    </button>
                  </div>
                  
                  <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
                    <Star size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MeditationTimer />
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
            <div className="p-5">
              <h3 className="font-semibold text-indigo-900 text-lg mb-4">Ambient Sounds</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Rain', icon: '🌧️', active: true },
                  { name: 'Ocean Waves', icon: '🌊', active: false },
                  { name: 'Forest', icon: '🌳', active: false },
                  { name: 'White Noise', icon: '🌫️', active: false },
                  { name: 'Soft Music', icon: '🎵', active: false },
                ].map((sound, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-colors cursor-pointer
                      ${sound.active 
                        ? 'border-indigo-300 bg-indigo-50' 
                        : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{sound.icon}</span>
                      <span className={sound.active ? 'font-medium text-indigo-900' : 'text-gray-700'}>
                        {sound.name}
                      </span>
                    </div>
                    <button className={`p-2 rounded-lg ${sound.active ? 'text-indigo-600' : 'text-gray-500'}`}>
                      {sound.active ? <Volume2 size={18} /> : <VolumeX size={18} />}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Volume
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="60"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeditationPage;