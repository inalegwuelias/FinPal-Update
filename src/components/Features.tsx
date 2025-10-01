import React from 'react';
import { Calculator, MessageCircle, BookOpen, Target, PieChart, TrendingUp } from 'lucide-react';

interface FeaturesProps {
  onNavigate: (section: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const features = [
    {
      id: 'calculator',
      title: 'Smart Calculator',
      description: 'Budget planner, savings calculator, and investment tools tailored for Nigerian income levels.',
      icon: Calculator,
      color: 'green',
      examples: ['Monthly budget for ₦150k salary', 'Emergency fund calculator', 'Loan payment estimator']
    },
    {
      id: 'chat',
      title: 'Ask FinPal',
      description: 'Get instant answers to your money questions with practical, Nigerian-focused advice.',
      icon: MessageCircle,
      color: 'blue',
      examples: ['Should I save in naira or dollars?', 'How to start investing with ₦50k?', 'Best bank accounts for students']
    },
    {
      id: 'learn',
      title: 'Learn & Grow',
      description: 'Educational content library with real African examples and actionable financial tips.',
      icon: BookOpen,
      color: 'purple',
      examples: ['Understanding inflation in Nigeria', 'First-time investor guide', 'Small business money management']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100 text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        text: 'text-green-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Master Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical tools and education designed specifically for young Nigerians and Africans ready to take control of their finances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div key={feature.id} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold ${colors.text} mb-3 text-sm uppercase tracking-wide`}>Examples:</h4>
                  <ul className="space-y-2">
                    {feature.examples.map((example, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className={`w-1.5 h-1.5 ${colors.button.split(' ')[0]} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => onNavigate(feature.id)}
                  className={`w-full ${colors.button} text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105`}
                >
                  Try {feature.title}
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Track Your Financial Progress
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Monitor your journey towards financial freedom with our visual tracking tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Goal Setting</h4>
              <p className="text-gray-600 text-sm">Set and track savings goals, from emergency funds to dream purchases.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Budget Analysis</h4>
              <p className="text-gray-600 text-sm">Visual breakdown of your spending and saving patterns.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Progress Reports</h4>
              <p className="text-gray-600 text-sm">Monthly insights and personalized tips for improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;