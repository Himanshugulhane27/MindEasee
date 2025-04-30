import React from 'react';
import { PenSquare, Calendar, ChevronRight } from 'lucide-react';

const WellnessJournal: React.FC = () => {
  const recentEntries = [
    { id: 1, date: 'Oct 15', title: 'Finding my calm', preview: 'Today I practiced mindfulness for 20 minutes and felt...' },
    { id: 2, date: 'Oct 12', title: 'Anxiety reflection', preview: 'I noticed my anxiety triggers were...' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden h-full">
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-indigo-900 text-lg">Wellness Journal</h3>
          <span className="flex items-center text-xs text-indigo-600 bg-indigo-50 py-1 px-2 rounded-full">
            <Calendar size={14} className="mr-1" /> 8 entries
          </span>
        </div>

        <div className="space-y-3 mb-4">
          {recentEntries.map(entry => (
            <div 
              key={entry.id}
              className="p-3 border border-gray-100 rounded-xl hover:border-indigo-200 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">{entry.title}</h4>
                <span className="text-xs text-gray-500">{entry.date}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">{entry.preview}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button className="flex items-center py-2.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <PenSquare size={16} className="mr-2" />
            New Entry
          </button>
          
          <button className="flex items-center py-2.5 px-4 text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            View All
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessJournal;