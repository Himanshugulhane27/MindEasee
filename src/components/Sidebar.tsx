import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Heart, Clock, HeartPulse, LifeBuoy, Menu, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
    { name: 'Journal', icon: <BookOpen size={20} />, path: '/journal' },
    { name: 'Affirmations', icon: <Heart size={20} />, path: '/affirmations' },
    { name: 'Meditation', icon: <Clock size={20} />, path: '/meditation' },
    { name: 'Support', icon: <LifeBuoy size={20} />, path: '/support' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed z-20 bottom-4 right-4 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar backdrop for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-800/40 backdrop-blur-sm z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-20
        w-64 bg-white shadow-lg border-r border-indigo-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-6 border-b border-indigo-100">
            <HeartPulse className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-xl font-bold text-indigo-900">MindEase</h1>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="px-2 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`
                        flex items-center px-4 py-3 rounded-xl text-sm font-medium
                        transition-colors duration-150 ease-in-out
                        ${isActive 
                          ? 'bg-indigo-100 text-indigo-900' 
                          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-900'}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`mr-3 ${isActive ? 'text-indigo-600' : ''}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="p-4">
            <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
              <h3 className="font-medium text-indigo-900 mb-1">Need help?</h3>
              <p className="text-xs text-indigo-800 mb-3">Access our support resources anytime.</p>
              <Link
                to="/support"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;