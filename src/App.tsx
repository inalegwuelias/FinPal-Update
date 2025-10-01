import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import ChatInterface from './components/ChatInterface';
import EducationHub from './components/EducationHub';
import Dashboard from './components/Dashboard';
import GoalTracker from './components/GoalTracker';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveSection} />;
      case 'calculator':
        return <Calculator onNavigate={setActiveSection} />;
      case 'chat':
        return <ChatInterface onNavigate={setActiveSection} />;
      case 'learn':
        return <EducationHub onNavigate={setActiveSection} />;
      case 'goals':
        return <GoalTracker onNavigate={setActiveSection} />;
      default:
        return (
          <>
            <Hero onNavigate={setActiveSection} />
            <Features onNavigate={setActiveSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/50">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;