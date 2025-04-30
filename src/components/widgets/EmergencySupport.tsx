import React, { useState } from 'react';
import { Phone, MessageSquare, Info, Users, Heart } from 'lucide-react';

const EmergencySupport: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const supportOptions = [
    { 
      id: 1, 
      title: 'Crisis Hotline', 
      description: '24/7 Emergency Support', 
      icon: <Phone />, 
      action: 'Call Now', 
      color: 'bg-red-600 hover:bg-red-700' 
    },
    { 
      id: 2, 
      title: 'Text Support', 
      description: 'Text with a counselor', 
      icon: <MessageSquare />, 
      action: 'Text Now', 
      color: 'bg-indigo-600 hover:bg-indigo-700' 
    },
    { 
      id: 3, 
      title: 'Resources', 
      description: 'Self-help materials', 
      icon: <Info />, 
      action: 'View', 
      color: 'bg-blue-600 hover:bg-blue-700' 
    },
    { 
      id: 4, 
      title: 'Support Groups', 
      description: 'Connect with others', 
      icon: <Users />, 
      action: 'Join', 
      color: 'bg-purple-600 hover:bg-purple-700' 
    },
  ];

  return (
    <div 
      className={`
        bg-gradient-to-r from-red-50 to-indigo-50 rounded-2xl shadow-sm border border-red-100 overflow-hidden
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-96' : 'max-h-24'}
      `}
    >
      <div 
        className="p-4 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
              <Heart size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-red-900">Emergency Support</h3>
              <p className="text-sm text-red-700">
                {isExpanded ? 'Click to minimize' : 'Immediate help is available, click to expand'}
              </p>
            </div>
          </div>
          <button 
            className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open('tel:988', '_blank');
            }}
          >
            Get Help Now
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportOptions.map(option => (
            <div 
              key={option.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2">
                  {option.icon}
                </div>
                <h4 className="font-medium text-gray-900">{option.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">{option.description}</p>
              <button 
                className={`w-full py-2 text-white rounded-lg transition-colors ${option.color}`}
              >
                {option.action}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmergencySupport;