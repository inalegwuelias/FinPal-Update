import React from 'react';
import { DollarSign, Calculator, MessageCircle, BookOpen, Home, BarChart3, Target } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'chat', label: 'Ask FinPal', icon: MessageCircle },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'goals', label: 'Goals', icon: Target },
  ];

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 pulse-glow">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FinPal</h1>
              <p className="text-xs gradient-text font-medium">Your Money Companion</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 shadow-lg'
                    : 'text-gray-600 hover:bg-white/60 hover:text-gray-900 hover:shadow-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="md:hidden flex space-x-2">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 shadow-lg'
                    : 'text-gray-600 hover:bg-white/60 hover:shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;