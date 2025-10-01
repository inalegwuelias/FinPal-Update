import React, { useState } from 'react';
import { Send, MessageCircle, Bot, User, ArrowLeft, Lightbulb } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onBack?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm FinPal, your friendly financial companion 👋\n\nI'm here to help you understand money matters with simple, practical advice. Ask me anything about:\n• Budgeting and saving in Nigeria\n• Understanding inflation and currency\n• Investment options for beginners\n• Banking and avoiding fees\n• Small business finances\n\nRemember: This is educational content, not financial advice. What would you like to learn about?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const commonQuestions = [
    "Should I save in naira or dollars?",
    "How to start investing with ₦50k?",
    "Best bank accounts for students",
    "What is inflation and how does it affect me?",
    "How to create a monthly budget?",
    "Emergency fund: how much should I save?"
  ];

  // Simulated responses - in a real app, this would connect to an AI service
  const getFinPalResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('naira') && message.includes('dollar')) {
      return `Great question! Here's the practical breakdown:\n\n**Saving in Naira:**\n✅ Easy access for daily expenses\n✅ No conversion fees\n❌ Loses value to inflation (15-20% annually)\n\n**Saving in Dollars:**\n✅ Protects against naira devaluation\n✅ More stable over time\n❌ Conversion fees and limited access\n❌ Harder to use for local purchases\n\n**FinPal's Take:**\nIf possible, do both! Keep 3-6 months of expenses in naira for emergencies, and long-term savings in stable currencies or assets that beat inflation.\n\n💡 **Quick tip:** Consider treasury bills or mutual funds that adjust for inflation instead of keeping cash.`;
    }
    
    if (message.includes('invest') && (message.includes('50k') || message.includes('50,000'))) {
      return `₦50k is a great start for investing! Here are beginner-friendly options:\n\n**1. Treasury Bills (Safest)**\n• Minimum: ₦50,000\n• Returns: 10-15% annually\n• Risk: Very low (government backed)\n• Where: Banks or CBN website\n\n**2. Mutual Funds**\n• Minimum: ₦5,000-₦25,000\n• Returns: 8-20% annually (varies)\n• Risk: Medium\n• Examples: Stanbic, ARM, Vetiva funds\n\n**3. Savings Apps**\n• PiggyVest, Cowrywise, Risevest\n• Auto-invest features\n• Start with ₦1,000\n\n**Before You Invest:**\n✅ Have emergency fund (3-6 months expenses)\n✅ Understand the risks\n✅ Start small and learn\n\n💡 **Quick tip:** Begin with treasury bills to learn, then gradually explore mutual funds as you gain confidence.`;
    }
    
    if (message.includes('bank account') && message.includes('student')) {
      return `Perfect! Here are the best student-friendly accounts in Nigeria:\n\n**Top Student Accounts:**\n🏦 **GTBank Student Account**\n• No maintenance fee\n• Debit card included\n• Online banking\n\n🏦 **FirstBank Aspire Account**\n• Zero account opening balance\n• Free monthly transactions\n• Mobile banking\n\n🏦 **UBA NextGen Account**\n• Designed for young people\n• Low minimum balance\n• Good mobile app\n\n**What to Avoid:**\n❌ High maintenance fees\n❌ Minimum balance penalties\n❌ Per-transaction charges\n\n**Pro Tips:**\n✅ Read all terms before opening\n✅ Ask about hidden fees\n✅ Enable SMS alerts\n✅ Use mobile apps to track spending\n\n💡 **Quick tip:** Always negotiate fees - banks often waive charges for students with proof of enrollment!`;
    }
    
    if (message.includes('inflation')) {
      return `Inflation is when prices go up and your money buys less over time. Think of it like this:\n\n**Simple Example:**\n🍞 If bread costs ₦500 today and inflation is 20%, next year that same bread will cost ₦600.\n💰 Your ₦10,000 today will only buy what ₦8,000 bought last year.\n\n**Why It Matters in Nigeria:**\n• Nigeria's inflation is often 15-20% annually\n• This is higher than most savings account interest (5-8%)\n• Your money in regular savings actually loses value!\n\n**How to Beat Inflation:**\n✅ Treasury bills (10-15% returns)\n✅ Mutual funds (potential for higher returns)\n✅ Invest in skills that increase your income\n✅ Buy assets that grow in value\n\n**What Causes It:**\n• Government printing more money\n• High demand for goods\n• Supply chain issues\n• Exchange rate changes\n\n💡 **Quick tip:** Never keep all your money in a regular savings account - inflation will eat it up! Look for investments that pay more than the inflation rate.`;
    }
    
    if (message.includes('budget')) {
      return `Creating a monthly budget is the foundation of financial success! Here's a simple Nigerian approach:\n\n**The 50-30-20 Rule (Adapted for Nigeria):**\n💰 **50% - Needs (₦100k from ₦200k salary)**\n• Rent/housing: ₦40k\n• Food: ₦30k\n• Transport: ₦20k\n• Utilities: ₦10k\n\n💫 **30% - Wants (₦60k)**\n• Entertainment: ₦20k\n• Clothes: ₦15k\n• Dining out: ₦15k\n• Personal: ₦10k\n\n📈 **20% - Savings & Goals (₦40k)**\n• Emergency fund: ₦20k\n• Investments: ₦15k\n• Future goals: ₦5k\n\n**Getting Started:**\n1. Track expenses for 1 week\n2. List all income sources\n3. Categorize every expense\n4. Find areas to cut back\n5. Automate savings first\n\n**Nigerian Pro Tips:**\n✅ Account for irregular income\n✅ Budget for festival seasons\n✅ Keep some cash for emergencies\n\n💡 **Quick tip:** Pay yourself first - save before spending on wants!`;
    }
    
    if (message.includes('emergency fund')) {
      return `An emergency fund is your financial safety net - money set aside for unexpected expenses.\n\n**How Much to Save:**\n💰 **Minimum:** 3 months of basic expenses\n💰 **Ideal:** 6 months of total expenses\n💰 **If self-employed:** 9-12 months\n\n**Example Calculation:**\nIf your monthly expenses are ₦150k:\n• Minimum emergency fund: ₦450k (3 months)\n• Ideal emergency fund: ₦900k (6 months)\n\n**What Counts as Emergencies:**\n✅ Job loss or reduced income\n✅ Medical emergencies\n✅ Major car or home repairs\n✅ Unexpected family obligations\n\n**What's NOT an Emergency:**\n❌ Vacation or shopping\n❌ Wedding or parties\n❌ New gadgets or wants\n\n**Where to Keep It:**\n🏦 High-yield savings account (easy access)\n🏦 Money market account\n🏦 Short-term treasury bills (3-6 months)\n\n**Building Strategy:**\n1. Start with ₦10k-₦20k\n2. Add ₦5k-₦10k monthly\n3. Use tax refunds or bonuses\n4. Sell items you don't need\n\n💡 **Quick tip:** Keep emergency funds separate from daily spending accounts to avoid temptation!`;
    }
    
    // Default response for unmatched questions
    return `I appreciate your question! While I'd love to give you a personalized response, I'm a demo version of FinPal.\n\nHere's what I can help you understand:\n\n**Money Basics:**\n• Budgeting with Nigerian salary ranges\n• Understanding inflation in our economy\n• Choosing between naira vs dollar savings\n\n**Investment Options:**\n• Treasury bills and government bonds\n• Mutual funds and savings apps\n• Risk levels for different investments\n\n**Banking Smart:**\n• Avoiding hidden fees and charges\n• Best accounts for students and young professionals\n• Mobile banking and fintech options\n\nTry asking something specific like:\n"Should I save in naira or dollars?" or\n"How to start investing with ₦50k?"\n\n💡 **Remember:** This is educational content, not financial advice. Always do your own research and consult professionals for major financial decisions!`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getFinPalResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Ask FinPal
            </h1>
            <p className="text-gray-600">
              Get instant answers to your money questions with practical Nigerian advice.
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

        {messages.length === 1 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
              Popular Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors duration-200 text-blue-700 font-medium"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="h-96 md:h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-blue-500' 
                    : 'bg-gradient-to-br from-green-500 to-blue-600'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about budgeting, saving, investing..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Educational content only • Not financial advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;