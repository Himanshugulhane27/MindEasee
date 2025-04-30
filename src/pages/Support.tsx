import React from 'react';
import { Phone, MessageSquare, Headphones, Clock, FileQuestion, Users, ArrowRight, Globe } from 'lucide-react';
import EmergencySupport from '../components/widgets/EmergencySupport';

const Support: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: 'Crisis Hotlines',
      description: 'Immediate support for mental health emergencies',
      icon: <Phone size={22} />,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 2,
      title: 'Text Support',
      description: 'Text-based counseling and crisis intervention',
      icon: <MessageSquare size={22} />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 3,
      title: 'Therapist Directory',
      description: 'Find licensed mental health professionals',
      icon: <Headphones size={22} />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      title: 'Self-Help Resources',
      description: 'Articles, guides, and worksheets',
      icon: <FileQuestion size={22} />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 5,
      title: 'Support Groups',
      description: 'Connect with others facing similar challenges',
      icon: <Users size={22} />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 6,
      title: 'Crisis Centers',
      description: 'Locations for in-person support and resources',
      icon: <Globe size={22} />,
      color: 'bg-indigo-100 text-indigo-600'
    },
  ];

  const faqs = [
    {
      question: 'What should I do in a mental health emergency?',
      answer: 'If you or someone you know is in immediate danger, call emergency services (911) or go to your nearest emergency room. You can also call the National Suicide Prevention Lifeline at 988 for immediate support.'
    },
    {
      question: 'How do I know if I need professional help?',
      answer: 'Consider seeking professional help if your mental health symptoms persist for weeks, interfere with daily functioning, or include thoughts of harming yourself or others. A professional can provide proper assessment and treatment.'
    },
    {
      question: 'What\'s the difference between a therapist and psychiatrist?',
      answer: 'Therapists typically provide talk therapy and counseling but can\'t prescribe medication. Psychiatrists are medical doctors who can diagnose mental health conditions and prescribe medications in addition to providing therapy.'
    },
    {
      question: 'Is online therapy effective?',
      answer: 'Research shows that online therapy can be as effective as in-person therapy for many mental health conditions. It offers convenience and accessibility, though some complex conditions may benefit from in-person treatment.'
    },
  ];

  return (
    <div className="pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Support Resources</h1>
        <p className="text-gray-600">Get the help you need, when you need it</p>
      </div>

      <EmergencySupport />

      <div className="mt-8 mb-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Available Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map(resource => (
            <div
              key={resource.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors group cursor-pointer"
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full ${resource.color} flex items-center justify-center mr-4`}>
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                    Access
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Book a Consultation</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h3 className="font-medium text-lg text-gray-900 mb-2">Speak with a Mental Health Professional</h3>
              <p className="text-gray-600 mb-4">
                Schedule a confidential consultation with a licensed therapist to discuss your mental health concerns and explore treatment options.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Initial assessment and personalized recommendations',
                  'Flexible scheduling options',
                  'In-person or virtual appointments available',
                  'Insurance accepted or affordable self-pay rates'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="py-2.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full md:w-auto">
                Find a Therapist
              </button>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  <Clock size={20} />
                </div>
                <h3 className="font-medium text-indigo-900">Available Appointment Types</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { type: 'Initial Consultation', duration: '45 min', virtual: true },
                  { type: 'Therapy Session', duration: '60 min', virtual: true },
                  { type: 'Crisis Support', duration: '30 min', virtual: true },
                  { type: 'Wellness Check-in', duration: '20 min', virtual: true },
                ].map((appointment, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-white/80 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                      <p className="text-xs text-gray-500">{appointment.duration}</p>
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 py-1 px-2 rounded-full">
                      {appointment.virtual ? 'Virtual or In-person' : 'In-person only'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5">
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-medium text-indigo-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold mb-2">We're Here For You</h2>
            <p className="mb-4 opacity-90">
              Remember, seeking help is a sign of strength. Whatever you're going through, 
              you don't have to face it alone. Our community and resources are here to support 
              your mental health journey.
            </p>
            <button className="py-2.5 px-4 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
              Connect Now
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center">
                <Heart size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Heart = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default Support;