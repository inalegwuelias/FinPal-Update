import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  PieChart, 
  Calendar,
  ArrowRight,
  Wallet,
  CreditCard,
  Banknote,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data - in a real app, this would come from user's actual financial data
  const financialData = {
    totalBalance: 450000,
    monthlyIncome: 200000,
    monthlyExpenses: 165000,
    savingsGoal: 1000000,
    currentSavings: 280000,
    emergencyFund: 150000,
    investments: 95000
  };

  const recentTransactions = [
    { id: 1, type: 'income', description: 'Salary Payment', amount: 200000, date: '2025-01-15', category: 'salary' },
    { id: 2, type: 'expense', description: 'Rent Payment', amount: -50000, date: '2025-01-14', category: 'housing' },
    { id: 3, type: 'expense', description: 'Groceries', amount: -15000, date: '2025-01-13', category: 'food' },
    { id: 4, type: 'investment', description: 'Treasury Bills', amount: -25000, date: '2025-01-12', category: 'investment' },
    { id: 5, type: 'expense', description: 'Transport', amount: -8000, date: '2025-01-11', category: 'transport' }
  ];

  const goals = [
    { id: 1, title: 'Emergency Fund', target: 300000, current: 150000, deadline: '2025-06-01', priority: 'high' },
    { id: 2, title: 'New Laptop', target: 800000, current: 280000, deadline: '2025-12-01', priority: 'medium' },
    { id: 3, title: 'Investment Portfolio', target: 500000, current: 95000, deadline: '2025-08-01', priority: 'high' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'income': return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'expense': return <TrendingDown className="w-4 h-4 text-red-600" />;
      case 'investment': return <PieChart className="w-4 h-4 text-blue-600" />;
      default: return <DollarSign className="w-4 h-4 text-gray-600" />;
    }
  };

  const getGoalProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Good {currentTime.getHours() < 12 ? 'Morning' : currentTime.getHours() < 18 ? 'Afternoon' : 'Evening'}! 👋
              </h1>
              <p className="text-gray-600 text-lg">Here's your financial overview for today</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{currentTime.toLocaleDateString('en-NG', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </motion.div>

        {/* Financial Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="glass-effect p-6 rounded-2xl border border-emerald-100/50 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl">
                <Wallet className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-emerald-600 text-sm font-medium">+12.5%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(financialData.totalBalance)}</h3>
            <p className="text-gray-600 text-sm">Total Balance</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl border border-blue-100/50 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 text-sm font-medium">Monthly</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(financialData.monthlyIncome)}</h3>
            <p className="text-gray-600 text-sm">Income</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl border border-purple-100/50 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-purple-600 text-sm font-medium">Monthly</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(financialData.monthlyExpenses)}</h3>
            <p className="text-gray-600 text-sm">Expenses</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl border border-orange-100/50 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
                <Banknote className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-orange-600 text-sm font-medium">Growing</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(financialData.investments)}</h3>
            <p className="text-gray-600 text-sm">Investments</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-effect p-6 rounded-2xl border border-gray-100/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
                <button 
                  onClick={() => onNavigate('calculator')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{transaction.description}</h4>
                        <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${transaction.amount > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">{transaction.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-effect p-6 rounded-2xl border border-gray-100/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Goals</h2>
                <button 
                  onClick={() => onNavigate('goals')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
                >
                  <span>Manage</span>
                  <Target className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-6">
                {goals.map((goal) => {
                  const progress = getGoalProgress(goal.current, goal.target);
                  return (
                    <div key={goal.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{goal.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                          {goal.priority}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{formatCurrency(goal.current)} of {formatCurrency(goal.target)}</span>
                          <span className="font-medium text-emerald-600">{progress.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Due: {new Date(goal.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass-effect p-6 rounded-2xl border border-gray-100/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                onClick={() => onNavigate('calculator')}
                className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 group"
              >
                <div className="p-3 bg-emerald-500 rounded-lg mb-3 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-emerald-700">Budget Planner</p>
              </button>

              <button 
                onClick={() => onNavigate('goals')}
                className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500 rounded-lg mb-3 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-blue-700">Set Goals</p>
              </button>

              <button 
                onClick={() => onNavigate('chat')}
                className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="p-3 bg-purple-500 rounded-lg mb-3 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-purple-700">Ask FinPal</p>
              </button>

              <button 
                onClick={() => onNavigate('learn')}
                className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 group"
              >
                <div className="p-3 bg-orange-500 rounded-lg mb-3 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-orange-700">Learn More</p>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Financial Health Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="glass-effect p-8 rounded-2xl border border-emerald-100/50">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Health Score</h2>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.78)}`}
                    className="text-emerald-500"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">78</div>
                    <div className="text-sm text-gray-600">Good</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4 max-w-md mx-auto">
                Your financial health is good! You're saving regularly and managing expenses well. 
                Consider increasing your emergency fund to reach excellent status.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;