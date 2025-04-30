import React from 'react';
import { Book, Search, Plus, Calendar, Tag } from 'lucide-react';

const Journal: React.FC = () => {
  const journalEntries = [
    {
      id: 1,
      date: 'October 15, 2023',
      title: 'Finding my calm',
      content: 'Today I practiced mindfulness for 20 minutes and felt a significant reduction in my anxiety. I focused on my breathing and the sensation of being present in the moment.',
      tags: ['meditation', 'anxiety', 'mindfulness']
    },
    {
      id: 2,
      date: 'October 12, 2023',
      title: 'Anxiety reflection',
      content: 'I noticed my anxiety triggers were mainly related to work deadlines. When I feel overwhelmed, I\'m going to try taking 5 deep breaths before responding to the situation.',
      tags: ['anxiety', 'work', 'coping strategies']
    },
    {
      id: 3,
      date: 'October 8, 2023',
      title: 'Weekend self-care',
      content: 'Took time for myself this weekend. I read a book, went for a long walk in the park, and prepared a healthy meal. These simple activities really improved my mood.',
      tags: ['self-care', 'weekend', 'mood']
    },
  ];

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Your Wellness Journal</h1>
          <p className="text-gray-600">Record your thoughts, feelings, and progress</p>
        </div>
        <button className="flex items-center py-2.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus size={18} className="mr-1.5" />
          New Entry
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search your journal entries..."
              className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-500" />
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button className="flex items-center py-2 px-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Calendar size={16} className="mr-1.5" />
              Date
            </button>
            <button className="flex items-center py-2 px-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Tag size={16} className="mr-1.5" />
              Tags
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {journalEntries.map(entry => (
            <div key={entry.id} className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-colors cursor-pointer">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-lg text-indigo-900">{entry.title}</h3>
                <span className="text-xs text-gray-500">{entry.date}</span>
              </div>
              <p className="text-gray-700 mb-3 line-clamp-2">{entry.content}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
            <Book size={24} />
          </div>
          <div>
            <h3 className="font-medium text-indigo-900">Journal Prompts</h3>
            <p className="text-sm text-indigo-700">Need inspiration? Try our guided prompts for reflection.</p>
          </div>
        </div>
        <button className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Explore Prompts
        </button>
      </div>
    </div>
  );
};

export default Journal;