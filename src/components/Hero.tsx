import React from 'react';
import { TrendingUp, Shield, Users, ArrowRight, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Nigeria's #1 Financial Literacy Platform</span>
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your Money,
              <span className="gradient-text block">
                Build Your Future
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Transform your relationship with money through practical education, smart tools, 
            and personalized guidance designed for young Africans ready to build wealth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <>
            <button 
              onClick={() => onNavigate?.('dashboard')}
              className="btn-primary text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium">Join 10,000+ learners</span>
            </div>
            </>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <div className="glass-effect p-8 rounded-3xl card-hover border border-emerald-100/50">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 floating-animation">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Money Habits</h3>
            <p className="text-gray-600 leading-relaxed">
              Master budgeting, saving, and investment strategies with real Nigerian examples and actionable insights.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-3xl card-hover border border-blue-100/50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 floating-animation" style={{animationDelay: '2s'}}>
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">African Context</h3>
            <p className="text-gray-600 leading-relaxed">
              Navigate inflation, currency dynamics, and African financial markets with confidence and clarity.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-3xl card-hover border border-purple-100/50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 floating-animation" style={{animationDelay: '4s'}}>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive personalized advice and avoid costly mistakes with our AI-powered financial companion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border border-emerald-200/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Financial Literacy Matters in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            <div>
              <h4 className="font-bold text-emerald-700 mb-3 text-lg">💰 Beat Inflation</h4>
              <p className="text-gray-700 leading-relaxed">
                When inflation is 15-20% annually, your ₦100,000 today buys what ₦80,000 bought last year.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-3 text-lg">🏦 Smart Banking</h4>
              <p className="text-gray-700 leading-relaxed">
                Avoid hidden fees, understand loan terms, and choose the right savings accounts.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-purple-700 mb-3 text-lg">📈 Build Wealth</h4>
              <p className="text-gray-700 leading-relaxed">
                Learn about treasury bills, mutual funds, and stocks to grow your money over time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-orange-700 mb-3 text-lg">💼 Business Growth</h4>
              <p className="text-gray-700 leading-relaxed">
                Understand cash flow, pricing, and funding options for your side hustle or business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;