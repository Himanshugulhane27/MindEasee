import React, { useState } from 'react';
import { Target, Check, Clock, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Goal {
  id: number;
  title: string;
  target: string;
  progress: number;
  status: 'on-track' | 'behind' | 'at-risk';
  daysStreak: number;
}

const GoalTracker: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { 
      id: 1, 
      title: 'Mindfulness Practice', 
      target: 'Practice 10 minutes daily', 
      progress: 0.7, 
      status: 'on-track',
      daysStreak: 5 
    },
    { 
      id: 2, 
      title: 'Gratitude Journaling', 
      target: 'Write 3 things daily', 
      progress: 0.4, 
      status: 'behind',
      daysStreak: 2 
    },
    { 
      id: 3, 
      title: 'Positive Affirmations', 
      target: 'Practice morning and evening', 
      progress: 0.9, 
      status: 'on-track',
      daysStreak: 7 
    },
  ]);

  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', target: '' });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'on-track': 
        return 'bg-green-100 text-green-700';
      case 'behind': 
        return 'bg-orange-100 text-orange-700';
      case 'at-risk': 
        return 'bg-red-100 text-red-700';
      default: 
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgressBarColor = (progress: number) => {
    if (progress >= 0.7) return 'bg-green-500';
    if (progress >= 0.4) return 'bg-blue-500';
    return 'bg-orange-500';
  };

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.target) {
      const goal: Goal = {
        id: Date.now(),
        title: newGoal.title,
        target: newGoal.target,
        progress: 0,
        status: 'on-track',
        daysStreak: 0
      };
      setGoals([...goals, goal]);
      setNewGoal({ title: '', target: '' });
      setIsAddingGoal(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden h-full backdrop-blur-lg bg-white/80">
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-indigo-900 text-lg">Goal Tracker</h3>
            <p className="text-sm text-gray-600">Track your wellness journey</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAddingGoal(true)}
            className="py-1.5 px-3 text-sm bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors flex items-center"
          >
            <Plus size={16} className="mr-1" /> New Goal
          </motion.button>
        </div>

        <AnimatePresence>
          {isAddingGoal && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 bg-indigo-50 rounded-xl p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-indigo-900">Add New Goal</h4>
                <button 
                  onClick={() => setIsAddingGoal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Goal title"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="w-full p-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Target (e.g., '30 minutes daily')"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  className="w-full p-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                />
                <button
                  onClick={handleAddGoal}
                  className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Add Goal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          {goals.map(goal => (
            <motion.div 
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  <p className="text-sm text-gray-600">{goal.target}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                  {goal.status === 'on-track' ? (
                    <Check size={14} className="inline-block mr-1" />
                  ) : (
                    <Clock size={14} className="inline-block mr-1" />
                  )}
                  {goal.status.replace('-', ' ')}
                </span>
              </div>
              
              <div className="mt-3 mb-2">
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-2.5 rounded-full ${getProgressBarColor(goal.progress)}`}
                  ></motion.div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{Math.round(goal.progress * 100)}% complete</span>
                  <span className="text-xs font-medium text-indigo-600">
                    {goal.daysStreak} day streak 🔥
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl"
        >
          <p className="text-sm text-indigo-700 text-center">
            <span className="font-medium">You're doing great!</span> Keep up the good work on your mindfulness journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GoalTracker;