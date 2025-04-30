import React, { useState } from 'react';
import { X, Coffee, Bell, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Reminder {
  id: string;
  time: string;
  message: string;
  days: string[];
}

const SelfCareReminder: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newReminder, setNewReminder] = useState<Reminder>({
    id: '',
    time: '09:00',
    message: '',
    days: []
  });

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleDayToggle = (day: string) => {
    setNewReminder(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const handleSaveReminder = () => {
    if (newReminder.message && newReminder.days.length > 0) {
      setReminders([...reminders, { ...newReminder, id: Date.now().toString() }]);
      setShowReminderModal(false);
      setNewReminder({
        id: '',
        time: '09:00',
        message: '',
        days: []
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-sm border border-purple-100 overflow-hidden"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
              <Coffee size={20} />
            </div>
            <div>
              <h3 className="font-medium text-indigo-900">Self-Care Reminder</h3>
              <p className="text-sm text-indigo-700">
                Take a moment for yourself today. Have you had water recently?
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReminderModal(true)}
              className="py-1.5 px-3 text-sm bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors mr-2 flex items-center"
            >
              <Bell size={14} className="mr-1" />
              Set a reminder
            </motion.button>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Dismiss reminder"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {reminders.length > 0 && (
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              {reminders.map(reminder => (
                <div 
                  key={reminder.id}
                  className="bg-white/50 rounded-lg p-2 text-sm flex items-center"
                >
                  <Calendar size={14} className="mr-1 text-indigo-600" />
                  <span className="text-indigo-900">{reminder.time}</span>
                  <span className="mx-1 text-gray-400">|</span>
                  <span className="text-gray-600">{reminder.days.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {showReminderModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Set Self-Care Reminder</h3>
                  <button 
                    onClick={() => setShowReminderModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Reminder Message
                    </label>
                    <input
                      type="text"
                      value={newReminder.message}
                      onChange={(e) => setNewReminder({ ...newReminder, message: e.target.value })}
                      placeholder="e.g., Time to drink water"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={newReminder.time}
                      onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Repeat on days
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {daysOfWeek.map(day => (
                        <button
                          key={day}
                          onClick={() => handleDayToggle(day)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                            ${newReminder.days.includes(day)
                              ? 'bg-indigo-100 text-indigo-700'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                          `}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSaveReminder}
                    className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mt-4"
                  >
                    Save Reminder
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SelfCareReminder;