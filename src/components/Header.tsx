import React, { useState } from 'react';
import { Bell, User, Settings, Search, LogOut, UserCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    { id: 1, title: 'Meditation Reminder', message: 'Time for your daily meditation session', time: '5m ago' },
    { id: 2, title: 'Goal Achievement', message: "You've completed your weekly mindfulness goal!", time: '2h ago' },
    { id: 3, title: 'New Feature', message: 'Check out our new guided meditation sessions', time: '1d ago' },
  ];

  const closeAllMenus = () => {
    setShowNotifications(false);
    setShowProfile(false);
    setShowSettings(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-indigo-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center lg:hidden">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-semibold text-indigo-900"
        >
          MindEase
        </motion.h1>
      </div>

      <div className="flex-1 mx-4 lg:mx-8">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              closeAllMenus();
              setShowNotifications(!showNotifications);
            }}
            className="relative p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden"
              >
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 border-b border-gray-100 hover:bg-indigo-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              closeAllMenus();
              setShowSettings(!showSettings);
            }}
            className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"
          >
            <Settings size={20} />
          </motion.button>

          <AnimatePresence>
            {showSettings && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Settings</h3>
                  <div className="space-y-2">
                    {['Account', 'Notifications', 'Privacy', 'Appearance', 'Help'].map((item) => (
                      <button
                        key={item}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              closeAllMenus();
              setShowProfile(!showProfile);
            }}
            className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full overflow-hidden hover:bg-indigo-200 transition-colors"
          >
            <User size={18} />
          </motion.button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden"
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
                      <UserCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Sara Johnson</h3>
                      <p className="text-sm text-gray-600">sara@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  {[
                    { label: 'Profile', icon: <User size={16} /> },
                    { label: 'Settings', icon: <Settings size={16} /> },
                    { label: 'Messages', icon: <Mail size={16} /> },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </button>
                  ))}
                  <hr className="my-2" />
                  <button className="w-full flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut size={16} />
                    <span className="ml-2">Sign Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;