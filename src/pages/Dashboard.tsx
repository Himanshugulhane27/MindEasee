import React from 'react';
import MoodTracker from '../components/widgets/MoodTracker';
import MeditationTimer from '../components/widgets/MeditationTimer';
import DailyAffirmation from '../components/widgets/DailyAffirmation';
import WellnessJournal from '../components/widgets/WellnessJournal';
import GoalTracker from '../components/widgets/GoalTracker';
import EmergencySupport from '../components/widgets/EmergencySupport';
import SelfCareReminder from '../components/widgets/SelfCareReminder';

const Dashboard: React.FC = () => {
  return (
    <div className="pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Welcome back, Sara</h1>
        <p className="text-gray-600">How are you feeling today?</p>
      </div>

      <SelfCareReminder />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MoodTracker />
        </div>
        <div className="lg:row-span-2">
          <MeditationTimer />
        </div>
        <div>
          <DailyAffirmation />
        </div>
        <div>
          <WellnessJournal />
        </div>
        <div className="lg:col-span-2">
          <GoalTracker />
        </div>
      </div>

      <div className="mt-6">
        <EmergencySupport />
      </div>
    </div>
  );
};

export default Dashboard;