import React, { useState } from 'react';
import { Heart, Plus, Search, Bookmark, Share2, Edit, Trash2 } from 'lucide-react';
import { affirmations } from '../data/affirmations';

const Affirmations: React.FC = () => {
  const [savedAffirmations, setSavedAffirmations] = useState<string[]>([
    "I am worthy of love and respect.",
    "I trust my journey and embrace the path I'm on.",
    "I choose peace over worry and faith over fear."
  ]);
  
  const [customAffirmations, setCustomAffirmations] = useState<string[]>([
    "I am growing stronger every day despite challenges.",
    "My creativity flows freely and inspires others."
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAffirmations = affirmations.filter(
    affirmation => affirmation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addCustomAffirmation = () => {
    // In a real app, this would open a modal or form
    const newAffirmation = prompt("Enter your custom affirmation:");
    if (newAffirmation && newAffirmation.trim() !== '') {
      setCustomAffirmations([...customAffirmations, newAffirmation]);
    }
  };

  const saveAffirmation = (affirmation: string) => {
    if (!savedAffirmations.includes(affirmation)) {
      setSavedAffirmations([...savedAffirmations, affirmation]);
    }
  };

  const removeAffirmation = (affirmation: string, isCustom: boolean) => {
    if (isCustom) {
      setCustomAffirmations(customAffirmations.filter(a => a !== affirmation));
    } else {
      setSavedAffirmations(savedAffirmations.filter(a => a !== affirmation));
    }
  };

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Daily Affirmations</h1>
          <p className="text-gray-600">Positive statements to uplift your day</p>
        </div>
        <button 
          onClick={addCustomAffirmation}
          className="flex items-center py-2.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} className="mr-1.5" />
          Create New
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Saved Affirmations */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5 h-full">
            <div className="flex items-center mb-4">
              <Heart className="h-5 w-5 text-pink-500 mr-2" />
              <h2 className="text-lg font-semibold text-indigo-900">Your Favorites</h2>
            </div>
            
            {savedAffirmations.length > 0 ? (
              <div className="space-y-3">
                {savedAffirmations.map((affirmation, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-pink-50 to-indigo-50 rounded-xl group relative">
                    <p className="text-indigo-900 mb-2">{affirmation}</p>
                    <div className="flex justify-end space-x-1">
                      <button className="p-1.5 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-white/50 transition-colors">
                        <Share2 size={16} />
                      </button>
                      <button 
                        onClick={() => removeAffirmation(affirmation, false)}
                        className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 px-4">
                <p className="text-gray-500 mb-3">No saved affirmations yet</p>
                <p className="text-sm text-gray-500">Save your favorite affirmations by clicking the bookmark icon</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Affirmations Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5 mb-6">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search affirmations..."
                  className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-500" />
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Discover Affirmations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredAffirmations.map((affirmation, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl group relative"
                  >
                    <p className="text-indigo-900 mb-3">{affirmation}</p>
                    <div className="flex justify-end space-x-1">
                      <button 
                        onClick={() => saveAffirmation(affirmation)}
                        className={`p-1.5 rounded-lg hover:bg-white/50 transition-colors ${savedAffirmations.includes(affirmation) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                      >
                        <Bookmark size={16} fill={savedAffirmations.includes(affirmation) ? "currentColor" : "none"} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-white/50 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Affirmations */}
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Edit className="h-5 w-5 text-indigo-500 mr-2" />
                <h2 className="text-lg font-semibold text-indigo-900">Your Custom Affirmations</h2>
              </div>
              <button 
                onClick={addCustomAffirmation}
                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            
            {customAffirmations.length > 0 ? (
              <div className="space-y-3">
                {customAffirmations.map((affirmation, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl group relative">
                    <p className="text-indigo-900 mb-2">{affirmation}</p>
                    <div className="flex justify-end space-x-1">
                      <button className="p-1.5 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-white/50 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => removeAffirmation(affirmation, true)}
                        className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 px-4">
                <p className="text-gray-500 mb-3">No custom affirmations yet</p>
                <p className="text-sm text-gray-500">Create your own personal affirmations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affirmations;