import React, { useState } from 'react';
import { Calculator as CalcIcon, DollarSign, PiggyBank, TrendingUp, ArrowLeft } from 'lucide-react';

interface CalculatorProps {
  onBack?: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onBack }) => {
  const [activeCalculator, setActiveCalculator] = useState('budget');
  const [budgetData, setBudgetData] = useState({
    income: '',
    rent: '',
    food: '',
    transport: '',
    utilities: '',
    other: ''
  });

  const [savingsData, setSavingsData] = useState({
    currentAmount: '',
    monthlyContribution: '',
    targetAmount: '',
    interestRate: '10'
  });

  const calculators = [
    { id: 'budget', name: 'Budget Planner', icon: CalcIcon, color: 'green' },
    { id: 'savings', name: 'Savings Goal', icon: PiggyBank, color: 'blue' },
    { id: 'investment', name: 'Investment Growth', icon: TrendingUp, color: 'purple' }
  ];

  const calculateBudget = () => {
    const income = parseFloat(budgetData.income) || 0;
    const expenses = (parseFloat(budgetData.rent) || 0) + 
                    (parseFloat(budgetData.food) || 0) + 
                    (parseFloat(budgetData.transport) || 0) + 
                    (parseFloat(budgetData.utilities) || 0) + 
                    (parseFloat(budgetData.other) || 0);
    const remaining = income - expenses;
    const savingsRate = income > 0 ? (remaining / income) * 100 : 0;
    
    return { expenses, remaining, savingsRate };
  };

  const calculateSavings = () => {
    const current = parseFloat(savingsData.currentAmount) || 0;
    const monthly = parseFloat(savingsData.monthlyContribution) || 0;
    const target = parseFloat(savingsData.targetAmount) || 0;
    const rate = parseFloat(savingsData.interestRate) / 100 / 12;
    
    if (monthly === 0) return { months: 0, totalInterest: 0 };
    
    let months = 0;
    let amount = current;
    
    while (amount < target && months < 1200) { // Max 100 years
      amount += monthly;
      amount += amount * rate;
      months++;
    }
    
    const totalInterest = amount - current - (monthly * months);
    return { months, totalInterest };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderBudgetCalculator = () => {
    const { expenses, remaining, savingsRate } = calculateBudget();
    
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Income & Expenses</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₦)</label>
              <input
                type="number"
                value={budgetData.income}
                onChange={(e) => setBudgetData({...budgetData, income: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 200000"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rent/Housing (₦)</label>
                <input
                  type="number"
                  value={budgetData.rent}
                  onChange={(e) => setBudgetData({...budgetData, rent: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="50000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Food (₦)</label>
                <input
                  type="number"
                  value={budgetData.food}
                  onChange={(e) => setBudgetData({...budgetData, food: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="30000"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transport (₦)</label>
                <input
                  type="number"
                  value={budgetData.transport}
                  onChange={(e) => setBudgetData({...budgetData, transport: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="20000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Utilities (₦)</label>
                <input
                  type="number"
                  value={budgetData.utilities}
                  onChange={(e) => setBudgetData({...budgetData, utilities: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="15000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Other Expenses (₦)</label>
              <input
                type="number"
                value={budgetData.other}
                onChange={(e) => setBudgetData({...budgetData, other: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="25000"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Budget Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Monthly Income</span>
                <span className="font-semibold text-lg text-green-600">
                  {formatCurrency(parseFloat(budgetData.income) || 0)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Total Expenses</span>
                <span className="font-semibold text-lg text-red-600">
                  {formatCurrency(expenses)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Available for Savings</span>
                <span className={`font-bold text-xl ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(remaining)}
                </span>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Savings Rate</span>
                  <span className={`font-semibold ${savingsRate >= 20 ? 'text-green-600' : savingsRate >= 10 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {savingsRate.toFixed(1)}%
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {savingsRate >= 20 ? '✅ Excellent! You\'re saving well.' : 
                   savingsRate >= 10 ? '⚠️ Good start. Try to increase savings.' : 
                   '❌ Consider reducing expenses to save more.'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 FinPal Tip:</h4>
          <p className="text-blue-700">
            Aim to save at least 20% of your income. The 50-30-20 rule suggests: 50% needs, 30% wants, 20% savings and debt repayment.
          </p>
        </div>
      </div>
    );
  };

  const renderSavingsCalculator = () => {
    const { months, totalInterest } = calculateSavings();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Savings Goal Calculator</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings (₦)</label>
              <input
                type="number"
                value={savingsData.currentAmount}
                onChange={(e) => setSavingsData({...savingsData, currentAmount: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 50000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Contribution (₦)</label>
              <input
                type="number"
                value={savingsData.monthlyContribution}
                onChange={(e) => setSavingsData({...savingsData, monthlyContribution: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 20000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Amount (₦)</label>
              <input
                type="number"
                value={savingsData.targetAmount}
                onChange={(e) => setSavingsData({...savingsData, targetAmount: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 1000000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual Interest Rate (%)</label>
              <input
                type="number"
                value={savingsData.interestRate}
                onChange={(e) => setSavingsData({...savingsData, interestRate: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10"
              />
              <p className="text-xs text-gray-500 mt-1">
                Treasury bills: 10-15%, High-yield savings: 5-8%
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Goal Timeline</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {years > 0 ? `${years}y ${remainingMonths}m` : `${months} months`}
                </div>
                <div className="text-gray-600">Time to reach goal</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Target Amount</span>
                  <span className="font-semibold">
                    {formatCurrency(parseFloat(savingsData.targetAmount) || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Amount</span>
                  <span className="font-semibold">
                    {formatCurrency(parseFloat(savingsData.currentAmount) || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Savings</span>
                  <span className="font-semibold">
                    {formatCurrency(parseFloat(savingsData.monthlyContribution) || 0)}
                  </span>
                </div>
                
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-gray-600">Interest Earned</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-2">💡 FinPal Tip:</h4>
          <p className="text-purple-700">
            Start with treasury bills (CBN rates) for guaranteed returns, then explore mutual funds for potentially higher growth. Always have 3-6 months of expenses in emergency savings first.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Financial Calculators
            </h1>
            <p className="text-gray-600">
              Plan your budget, savings goals, and investments with Nigerian context.
            </p>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            const isActive = activeCalculator === calc.id;
            
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? calc.color === 'green' ? 'bg-green-100 text-green-700 border-2 border-green-200'
                    : calc.color === 'blue' ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                    : 'bg-purple-100 text-purple-700 border-2 border-purple-200'
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{calc.name}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {activeCalculator === 'budget' && renderBudgetCalculator()}
          {activeCalculator === 'savings' && renderSavingsCalculator()}
          {activeCalculator === 'investment' && (
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Calculator</h3>
              <p className="text-gray-600 mb-4">Coming soon! We're building an advanced investment calculator with Nigerian stocks, bonds, and mutual funds.</p>
              <div className="bg-purple-50 p-4 rounded-xl inline-block">
                <p className="text-purple-700 font-medium">💡 Meanwhile, try our savings calculator with 10-15% interest rates for treasury bills!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;