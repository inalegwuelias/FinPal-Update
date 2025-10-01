import React, { useState } from 'react';
import { BookOpen, TrendingUp, Shield, Zap, ArrowRight, ArrowLeft, Clock, Users } from 'lucide-react';

interface EducationHubProps {
  onBack?: () => void;
}

const EducationHub: React.FC<EducationHubProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('basics');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const categories = [
    { id: 'basics', name: 'Money Basics', icon: BookOpen, color: 'green' },
    { id: 'investing', name: 'Investing 101', icon: TrendingUp, color: 'blue' },
    { id: 'protection', name: 'Protect Your Money', icon: Shield, color: 'purple' },
    { id: 'advanced', name: 'Advanced Topics', icon: Zap, color: 'orange' }
  ];

  const articles = {
    basics: [
      {
        id: 'inflation-nigeria',
        title: 'Understanding Inflation in Nigeria',
        excerpt: 'Why your ₦1000 buys less rice today than last year, and what to do about it.',
        readTime: '5 min',
        difficulty: 'Beginner',
        content: `
# Understanding Inflation in Nigeria

## What Is Inflation?

Inflation means prices go up and your money buys less. Think of inflation like your money getting weaker over time.

**Simple Example:**
- Last year: ₦1,000 bought 5 loaves of bread
- This year: ₦1,000 only buys 3 loaves of bread
- That's inflation at work!

## Nigeria's Inflation Reality

Nigeria's inflation rate is often 15-20% annually. This means:
- Your ₦100,000 today has the buying power of ₦80,000-85,000 next year
- Regular savings accounts (paying 5-8%) actually lose money to inflation
- You need investments that pay more than 15-20% just to break even

## What Causes Inflation in Nigeria?

**1. Naira Devaluation**
When the naira loses value against the dollar, imported goods become more expensive.

**2. Supply Chain Issues**
Bad roads, fuel costs, and security issues make transporting goods expensive.

**3. Government Spending**
When government prints more money or spends heavily, it can drive up prices.

**4. Food Production**
Farmer-herder conflicts and climate change affect food supply, driving prices up.

## How to Protect Yourself

**✅ Beat Inflation Strategies:**
1. **Treasury Bills** - Government guaranteed, 10-15% returns
2. **Mutual Funds** - Professionally managed, potential for higher returns
3. **Real Estate** - Property values often rise with inflation
4. **Skills Investment** - Increase your earning power
5. **Dollar Assets** - Stable currency exposure (if accessible)

**❌ Avoid These:**
- Keeping all money in regular savings (5-8% interest)
- Hiding cash at home (0% growth)
- Expensive consumer debt (20%+ interest)

## Practical Action Steps

**This Week:**
1. Calculate your real returns: Subtract inflation rate from your savings interest
2. If negative, your money is losing value

**This Month:**
1. Research treasury bills at your bank
2. Look into mutual fund options
3. Start with small amounts to learn

**Remember:** The goal isn't to beat inflation by a lot, just to stay ahead of it. Even 2-3% above inflation rate helps preserve your purchasing power.

💡 **FinPal Tip:** Start with treasury bills for safety, then gradually explore other options as you learn more.
        `
      },
      {
        id: 'naira-vs-dollar',
        title: 'Should You Save in Naira or Dollars?',
        excerpt: 'The pros and cons of currency choices for your savings in Nigeria.',
        readTime: '4 min',
        difficulty: 'Beginner',
        content: `
# Should You Save in Naira or Dollars?

This is one of the most common questions young Nigerians ask, and the answer is: **It depends on your situation.**

## Saving in Naira

**✅ Advantages:**
- **Easy Access** - Use your ATM card anywhere
- **No Conversion Fees** - What you save is what you get
- **Local Transactions** - Perfect for rent, food, transport
- **Bank Interest** - Some accounts pay 5-8% annually
- **Government Protection** - NDIC insures deposits up to ₦500,000

**❌ Disadvantages:**
- **Inflation Impact** - Your purchasing power decreases over time
- **Currency Risk** - Naira has historically weakened against major currencies
- **Limited Growth** - Savings interest often below inflation rate

**Best For:** Emergency funds, daily expenses, short-term goals (less than 2 years)

## Saving in Dollars

**✅ Advantages:**
- **Stable Value** - Dollar is more stable than naira
- **Inflation Protection** - Protects against naira devaluation
- **Global Purchasing Power** - Useful for international transactions
- **Long-term Preservation** - Better for wealth preservation over years

**❌ Disadvantages:**
- **Access Challenges** - Hard to spend directly in Nigeria
- **Conversion Costs** - Banks charge 2-5% for conversions
- **Regulatory Limits** - CBN limits on dollar transactions
- **Storage Issues** - Domiciliary accounts have restrictions
- **No Interest** - Most dollar accounts pay 0-1% interest

**Best For:** Long-term savings, international goals, large purchases

## The Smart Strategy: Do Both!

**FinPal's Recommended Approach:**

**60% in Naira (For Immediate Needs)**
- 3-6 months emergency fund in high-yield naira account
- Daily expense money
- Short-term goals (less than 2 years)

**40% in Stable Assets (For Long-term Growth)**
- Treasury bills (naira-denominated but inflation-beating)
- Dollar assets if accessible and legal
- Mutual funds with foreign exposure
- Real estate or other inflation-hedging assets

## Practical Examples

**Example 1: Student with ₦100k**
- ₦70k in naira savings (emergency + expenses)
- ₦30k in treasury bills or mutual funds

**Example 2: Young Professional with ₦500k**
- ₦300k in naira (emergency fund + near-term goals)
- ₦200k in growth investments (treasury bills, mutual funds)

**Example 3: Small Business Owner with ₦2M**
- ₦800k in naira (business operations + emergency)
- ₦1.2M in diverse investments (treasury bills, real estate, some dollar exposure if legal)

## Getting Started

**This Week:**
1. Calculate your monthly expenses
2. Ensure you have 3-6 months in accessible naira savings

**This Month:**
1. Research treasury bill rates at your bank
2. Look into mutual funds with good track records
3. Consider domiciliary accounts if you have legitimate dollar needs

**Avoid These Mistakes:**
- Putting all money in one currency
- Keeping dollars at home (unsafe and illegal)
- Using black market for currency conversion
- Forgetting about taxes on investments

💡 **FinPal Tip:** Start with building your naira emergency fund first, then gradually diversify. The goal is balance, not putting all eggs in one basket!
        `
      },
      {
        id: 'first-budget',
        title: 'Creating Your First Budget in Nigeria',
        excerpt: 'A step-by-step guide to budgeting with real Nigerian salary examples.',
        readTime: '6 min',
        difficulty: 'Beginner',
        content: `
# Creating Your First Budget in Nigeria

Budgeting isn't about restricting yourself - it's about giving every naira a purpose so you can afford what matters most.

## The Nigerian 50-30-20 Rule

This rule works well for most Nigerian salaries:

**50% - Needs (Must-Have Expenses)**
- Rent/Housing
- Food and groceries
- Transportation
- Utilities (electricity, water, internet)
- Essential phone bills

**30% - Wants (Nice-to-Have)**
- Entertainment and outings
- New clothes (beyond basics)
- Dining out
- Hobbies and personal treats
- Non-essential subscriptions

**20% - Savings and Future**
- Emergency fund
- Investments
- Retirement savings
- Debt payments
- Future goals

## Real Nigerian Examples

### Example 1: ₦150,000 Monthly Salary

**Needs (₦75,000 - 50%):**
- Rent: ₦30,000
- Food: ₦25,000
- Transport: ₦12,000
- Utilities: ₦8,000

**Wants (₦45,000 - 30%):**
- Entertainment: ₦15,000
- Clothes: ₦10,000
- Dining out: ₦12,000
- Personal: ₦8,000

**Savings (₦30,000 - 20%):**
- Emergency fund: ₦15,000
- Investments: ₦10,000
- Future goals: ₦5,000

### Example 2: ₦80,000 Monthly Salary

**Needs (₦40,000 - 50%):**
- Rent: ₦15,000 (shared apartment)
- Food: ₦18,000
- Transport: ₦5,000
- Utilities: ₦2,000

**Wants (₦24,000 - 30%):**
- Entertainment: ₦8,000
- Clothes: ₦5,000
- Dining out: ₦6,000
- Personal: ₦5,000

**Savings (₦16,000 - 20%):**
- Emergency fund: ₦10,000
- Investments: ₦6,000

## Step-by-Step Budget Creation

### Step 1: Track Current Spending (1 Week)
Write down every expense:
- ₦200 for bus fare
- ₦1,500 for lunch
- ₦500 for recharge card
- ₦3,000 for groceries

### Step 2: List All Income
- Main salary
- Side hustle income
- Any other regular money

### Step 3: Categorize Expenses
Put each expense into Needs, Wants, or Savings categories.

### Step 4: Calculate Percentages
- Total Needs ÷ Total Income × 100
- Total Wants ÷ Total Income × 100
- Total Savings ÷ Total Income × 100

### Step 5: Adjust to Meet 50-30-20
If your needs are over 50%, look for ways to reduce:
- Share rent with roommates
- Cook more at home
- Use public transport
- Find cheaper phone/internet plans

## Nigerian-Specific Budget Tips

**Account for Irregular Expenses:**
- Festive seasons (Christmas, Eid, New Year)
- Family obligations and emergencies
- Quarterly bills (school fees, insurance)
- Generator fuel and inverter batteries

**Prepare for Income Fluctuations:**
- Delay in salary payments
- Reduced business income during recession
- Economic policy changes

**Use Local Tools:**
- PiggyVest for automated savings
- Bank mobile apps for expense tracking
- Simple notebook if you prefer writing

## Common Budgeting Mistakes in Nigeria

**❌ Mistake 1: Not Planning for Family Obligations**
Extended family requests can break your budget. Set aside 5-10% for this.

**❌ Mistake 2: Ignoring Inflation**
Prices increase yearly. Review and adjust your budget every 6 months.

**❌ Mistake 3: No Emergency Buffer**
Always have extra ₦5,000-₦10,000 for truly unexpected expenses.

**❌ Mistake 4: Forgetting About Fuel/Generator Costs**
Power issues mean extra costs. Budget for fuel, inverter batteries, solar panels.

**❌ Mistake 5: Not Accounting for Multiple Transport Modes**
Bus, Keke, Uber, fuel - transportation costs vary. Be realistic.

## Making Your Budget Work

**Week 1:** Track everything, no judgment
**Week 2:** Categorize and calculate percentages
**Week 3:** Make adjustments and set up automatic savings
**Week 4:** Review and refine

**Monthly Review Questions:**
1. Did I stick to my budget?
2. What surprised me about my spending?
3. Where can I improve next month?
4. Are my savings goals on track?

**Tools to Help You:**
- Bank SMS alerts for all transactions
- Mobile banking apps with spending categories
- Simple Excel sheet or notebook
- Savings apps that round up purchases

💡 **FinPal Tip:** Start with tracking for just one week. You'll be amazed at where your money actually goes. Small leaks sink big ships - those ₦200 here and ₦500 there add up quickly!

Remember: The best budget is one you can actually follow. Start simple and improve over time.
        `
      }
    ],
    investing: [
      {
        id: 'investing-50k',
        title: 'How to Start Investing with ₦50,000',
        excerpt: 'Beginner-friendly investment options perfect for young Nigerians.',
        readTime: '7 min',
        difficulty: 'Beginner',
        content: `
# How to Start Investing with ₦50,000

₦50,000 might seem small, but it's actually a perfect amount to start your investment journey. Here's exactly how to make it work.

## Before You Invest: The Checklist

**✅ Prerequisites (Do These First):**
1. **Emergency Fund** - Have 3-6 months of expenses saved
2. **High-Interest Debt** - Pay off credit card debt (20%+ interest)
3. **Stable Income** - Don't invest money you need within 2 years
4. **Basic Knowledge** - Understand what you're investing in

**Only invest money you won't need for at least 3-5 years.**

## Best Options for ₦50,000

### 1. Treasury Bills (Safest Start)
**Investment:** Full ₦50,000
**Expected Return:** 10-15% annually
**Risk Level:** Very Low
**Liquidity:** 91, 182, or 364 days

**Why Start Here:**
- Government guaranteed (safest investment)
- Better than savings account interest
- Learn investing basics with minimal risk
- Can reinvest when it matures

**How to Buy:**
- Visit any commercial bank
- Use bank mobile apps (some banks offer this)
- Minimum usually ₦50,000 (perfect!)
- Choose 91-day bills for beginners

**Real Numbers:**
- ₦50k @ 12% for 91 days = ₦1,500 profit
- That's better than keeping it in savings account

### 2. Mutual Funds (Slightly Higher Risk, Higher Potential)
**Investment:** ₦25,000 - ₦40,000
**Expected Return:** 8-20% annually (varies)
**Risk Level:** Low to Medium
**Liquidity:** Usually available anytime

**Top Nigerian Mutual Funds for Beginners:**
- **Stanbic IBTC Money Market Fund** (conservative)
- **ARM Discovery Fund** (balanced)
- **Vetiva Money Market Fund** (conservative)

**Why Consider This:**
- Professional management
- Diversified investments
- Start with small amounts
- Some have lower minimums (₦5,000-₦25,000)

**How to Start:**
- Visit fund management companies
- Use their mobile apps
- Some banks offer mutual funds
- Read the fund factsheet first

### 3. Mixed Approach (Recommended)
**Split Your ₦50,000:**
- **₦30,000** in Treasury Bills (safe base)
- **₦20,000** in Money Market Mutual Fund (growth potential)

This gives you safety plus growth potential.

## The ₦50,000 Investment Strategy

### Month 1-3: Learn the Basics
- Put ₦50k in 91-day treasury bills
- Use these 3 months to research mutual funds
- Read about different investment types
- Join investment groups on social media

### Month 4-6: Diversify
When treasury bills mature:
- **₦35,000** back to treasury bills (longer term, 182 days)
- **₦15,000** into a conservative mutual fund
- **Keep profit** as additional emergency fund or reinvest

### Month 7-12: Build and Learn
- Continue reinvesting
- Add ₦5,000-₦10,000 monthly if possible
- Learn about stocks, bonds, real estate
- Track your returns vs inflation

## What to Avoid with ₦50,000

**❌ Don't Do These:**
- **Individual Stocks** (too risky for beginners)
- **Cryptocurrency** (very volatile)
- **Get-Rich-Quick Schemes** (Ponzi schemes)
- **Forex Trading** (90% of beginners lose money)
- **Real Estate** (₦50k is too small)
- **Business Investment** (unless you're experienced)

## Expected Realistic Returns

**Conservative Approach (Treasury Bills Only):**
- Year 1: ₦50k becomes ₦56k-₦58k
- Year 5: About ₦90k-₦100k

**Balanced Approach (Treasury Bills + Mutual Funds):**
- Year 1: ₦50k becomes ₦56k-₦60k
- Year 5: About ₦95k-₦130k (if economy does well)

**Remember:** These are estimates. Investments can go down too.

## Tax Considerations

**Good News:** Most of these investments have favorable tax treatment:
- Treasury bills: 10% withholding tax (automatically deducted)
- Mutual funds: Some are tax-efficient
- Keep records for tax purposes

## Building Your Investment Habit

**Monthly Investment Plan:**
- Month 1: Start with ₦50k
- Month 2: Add ₦5k-₦10k if possible
- Month 3: Add another ₦5k-₦10k
- Continue growing your investment pot

**Track Your Progress:**
- Write down starting amount
- Record returns each month
- Compare to inflation rate (15-20%)
- Celebrate small wins!

## Warning Signs to Watch

**🚨 Red Flags:**
- Guaranteed returns over 30% annually
- Pressure to invest immediately
- "Secret" investment strategies
- No proper documentation
- No regulatory approval

**✅ Good Signs:**
- Clear documentation
- Regulated by SEC or CBN
- Transparent fees
- Professional management
- Historical track record

## Next Steps After ₦50,000

Once you're comfortable and have grown your investment:
- **₦100k-₦500k:** Consider bond funds, balanced funds
- **₦500k+:** Explore individual stocks, REIT funds
- **₦1M+:** Real estate, more sophisticated strategies

## Action Plan This Week

**Day 1:** Ensure you have emergency fund separate from this ₦50k
**Day 2:** Visit your bank or research treasury bills online
**Day 3:** Read about 2-3 mutual fund options
**Day 4:** Make your first investment decision
**Day 5:** Set up automatic investment plan for future months

💡 **FinPal Tip:** The best time to start investing was 10 years ago. The second best time is today. Your ₦50k invested now will be worth much more than ₦50k sitting in a regular savings account. Start small, start safe, but start!

Remember: Every expert was once a beginner. Your ₦50,000 is your ticket to learning how money can work for you.
        `
      }
    ],
    protection: [
      {
        id: 'avoid-bank-fees',
        title: 'How to Avoid Hidden Bank Fees',
        excerpt: 'Protect your money from unnecessary charges and fees in Nigerian banks.',
        readTime: '5 min',
        difficulty: 'Beginner',
        content: `
# How to Avoid Hidden Bank Fees in Nigeria

Bank fees can eat up your money faster than you think. A ₦50 charge here, ₦100 there - before you know it, you've lost thousands to fees. Here's how to keep more of your hard-earned money.

## Common Hidden Fees in Nigerian Banks

### 1. Account Maintenance Fees
**What It Is:** Monthly charge for keeping your account open
**Typical Cost:** ₦500 - ₦2,000 per month
**How to Avoid:**
- Choose zero-maintenance accounts
- Maintain minimum balance requirements
- Use student accounts if eligible
- Consider digital banks (less overhead, fewer fees)

### 2. ATM Fees
**What It Is:** Charges for using ATMs, especially from other banks
**Typical Cost:** ₦35-₦100 per transaction
**How to Avoid:**
- Use your own bank's ATMs
- Withdraw larger amounts less frequently
- Use point-of-sale (POS) for cash when possible
- Plan your cash needs ahead

### 3. SMS Alert Fees
**What It Is:** Monthly charge for transaction notifications
**Typical Cost:** ₦100-₦300 per month
**How to Avoid:**
- Use mobile banking apps instead
- Check if your tariff plan includes free SMS
- Some banks offer free alerts for certain account types
- Use USSD codes for balance checks (usually cheaper)

### 4. Inter-bank Transfer Fees
**What It Is:** Charges for sending money to other banks
**Typical Cost:** ₦50-₦200 per transaction
**How to Avoid:**
- Use fintech apps (some offer free transfers)
- Batch multiple transfers together
- Use NIBSS instant payment (NIP) during free periods
- Keep accounts in multiple banks for free internal transfers

### 5. Card Maintenance Fees
**What It Is:** Annual charge for debit/credit cards
**Typical Cost:** ₦1,000-₦3,000 annually
**How to Avoid:**
- Ask about free card options
- Bundle with other services for waivers
- Use virtual cards for online transactions
- Negotiate based on your relationship with the bank

### 6. Overdraft and Insufficient Fund Fees
**What It Is:** Penalties when your account goes negative
**Typical Cost:** ₦1,000-₦5,000 per occurrence
**How to Avoid:**
- Monitor your balance regularly
- Set up low balance alerts
- Keep a buffer in your account
- Turn off overdraft "protection" if you don't need it

## The Fee-Avoiding Strategy

### Choose the Right Account Type

**For Students:**
- Student accounts often have zero fees
- Bring student ID and admission letter
- Enjoy free ATM cards and reduced charges

**For Young Professionals:**
- Look for "youth" or "millennial" accounts
- Often have lower fees and better digital features
- Some require minimum age (usually under 30-35)

**For Everyone:**
- Compare maintenance fees across banks
- Read terms and conditions carefully
- Ask about fee waivers for salary accounts

### Master the Art of Negotiation

**What Banks Don't Tell You:** Most fees are negotiable!

**How to Negotiate:**
1. **Build a Relationship** - Regular deposits, multiple products
2. **Ask Directly** - "Can you waive this fee?"
3. **Mention Competition** - "Bank X offers this for free"
4. **Be Polite but Firm** - Customer service reps have discretion
5. **Escalate if Needed** - Ask for a manager

**Best Times to Negotiate:**
- When opening a new account
- After receiving a large deposit (salary, bonus)
- During bank promotional periods
- When you're considering closing the account

### Smart Banking Habits

**Daily Habits:**
- Check your balance before making transactions
- Use mobile apps instead of calling customer service
- Set up automatic savings to avoid "accidental" spending

**Weekly Habits:**
- Review your transaction history
- Note any unusual charges
- Plan your cash withdrawals for the week

**Monthly Habits:**
- Review your bank statement thoroughly
- Calculate total fees paid
- Research if other banks offer better deals

## Bank-Specific Tips

### Commercial Banks (GTBank, First Bank, UBA, etc.)
- Often have premium accounts with fee waivers
- Salary accounts usually get better treatment
- Negotiate based on your total relationship value

### Digital Banks (Kuda, VBank, etc.)
- Usually offer lower or zero fees
- Better mobile experience
- May have limited physical presence for complex issues

### Microfinance Banks
- Often have lower fees but limited services
- Good for basic banking needs
- Check their stability and insurance coverage

## Red Flags: When Banks Are Overcharging

**Question These Charges:**
- Multiple fees for the same service
- Fees not disclosed upfront
- Sudden increases without notice
- Charges for "account monitoring" or "file maintenance"
- International transaction fees on local purchases

**What to Do:**
1. **Document Everything** - Screenshots, receipts, statements
2. **Contact Customer Service** - Ask for fee explanation and reversal
3. **Escalate** - Branch manager, regional office, head office
4. **Report** - CBN consumer protection department if needed
5. **Switch** - Sometimes it's better to change banks

## Digital Alternatives to Reduce Fees

**For Transfers:**
- PayStack, Flutterwave for business payments
- Kuda, VBank for personal transfers
- NIBSS direct debit for recurring payments

**For Savings:**
- PiggyVest, Cowrywise (higher interest, lower fees)
- Treasury bill direct purchase (no bank middleman fees)

**For Investments:**
- Direct mutual fund purchases (avoid bank markup)
- Online stockbroking platforms

## The Monthly Fee Audit

**Track These Every Month:**
- Account maintenance fees
- ATM usage charges
- Transfer fees
- SMS charges
- Card fees
- Any "miscellaneous" charges

**Create a Simple Spreadsheet:**
- Date | Description | Amount | Avoidable? | Action Taken

## Action Plan This Week

**Day 1:** Review last 3 months of bank statements
**Day 2:** List all fees you've been charged
**Day 3:** Research alternative account types at your bank
**Day 4:** Call customer service to negotiate/clarify fees
**Day 5:** Compare with other banks and digital alternatives

**Annual Goal:** Reduce banking fees by at least 50%

## When to Consider Switching Banks

**Switch If:**
- Monthly fees exceed ₦2,000 consistently
- Poor customer service for fee disputes
- Hidden charges appearing regularly
- Better options available elsewhere
- Your needs have changed

**Before You Switch:**
- Ensure new bank meets all your needs
- Check their fee schedule thoroughly
- Consider the hassle of changing all your direct debits
- Keep old account open briefly to ensure smooth transition

💡 **FinPal Tip:** Banks make billions from fees - don't contribute more than necessary! A ₦1,000 monthly fee is ₦12,000 annually that could be in your investment account earning returns instead.

Remember: Your money should work for you, not for the bank's fee income. Be smart, be vigilant, and keep more of what you earn!
        `
      }
    ],
    advanced: [
      {
        id: 'business-finances',
        title: 'Managing Small Business Finances',
        excerpt: 'Cash flow, pricing, and financial management for Nigerian entrepreneurs.',
        readTime: '8 min',
        difficulty: 'Intermediate',
        content: `
# Managing Small Business Finances in Nigeria

Whether you're running a side hustle or a growing business, good financial management is the difference between success and failure. Here's your practical guide to managing business money like a pro.

## Business Banking: Keep It Separate

### Why You Need a Business Account
**Personal vs Business Money:**
- **Legal Protection** - Separates your personal liability
- **Tax Benefits** - Easier to track deductible expenses
- **Professionalism** - Builds credibility with customers and suppliers
- **Financial Clarity** - Know exactly how your business is performing

**Common Mistake:** Using personal account for business transactions. This creates tax nightmares and legal complications.

### Choosing a Business Account

**Best Business Accounts in Nigeria:**
- **GTBank Business Account** - Good online banking, reasonable fees
- **First Bank Corporate Account** - Wide branch network
- **UBA Business Banking** - Good for SMEs
- **Zenith Bank** - Strong digital banking platform

**What to Look For:**
- Low monthly maintenance fees
- Free or cheap transfers
- Good mobile banking
- Multiple user access
- Integration with accounting software

## Cash Flow Management: The Lifeblood

### Understanding Cash Flow
**Cash Flow = Money In - Money Out**

**Positive Cash Flow:** More money coming in than going out
**Negative Cash Flow:** Spending more than you're earning

**The Nigerian Business Reality:**
- Customers often pay late (30-90 days)
- Suppliers want payment upfront
- Government payments can take months
- Economic uncertainties affect sales

### The Cash Flow Forecast

**Create a Simple 3-Month Forecast:**

**Money Coming In:**
- Expected sales (be conservative!)
- Outstanding invoices
- Loans or investments

**Money Going Out:**
- Rent and utilities
- Staff salaries
- Inventory purchases
- Loan repayments
- Taxes and government fees

**Example: Small Trading Business**

| Month | Money In | Money Out | Net Flow | Running Balance |
|-------|----------|-----------|----------|-----------------|
| Jan   | ₦500k    | ₦400k     | +₦100k   | ₦100k          |
| Feb   | ₦300k    | ₦450k     | -₦150k   | -₦50k          |
| Mar   | ₦600k    | ₦400k     | +₦200k   | ₦150k          |

**Red Flag:** Running balance going negative means you need a plan!

## Pricing Your Products/Services Right

### The Cost-Plus Method

**Step 1: Calculate All Costs**
- **Direct Costs** - Raw materials, direct labor
- **Indirect Costs** - Rent, utilities, marketing
- **Hidden Costs** - Your time, transportation, phone calls

**Step 2: Add Your Profit Margin**
- **Survival Margin:** 20-30% (covers basic needs)
- **Growth Margin:** 40-60% (allows for expansion)
- **Premium Margin:** 70%+ (for unique value)

**Example: Food Business**
- Cost to make 1 portion: ₦200
- Indirect costs per portion: ₦100
- Total cost: ₦300
- With 50% margin: Selling price = ₦450

### Market-Based Pricing

**Research Your Competition:**
- What are similar businesses charging?
- What makes you different?
- Can you justify higher prices?

**Nigerian Market Considerations:**
- Price sensitivity is high
- Value for money is crucial
- Building trust takes time
- Word-of-mouth is powerful

## Record Keeping Made Simple

### Essential Records to Keep

**Daily Records:**
- Sales transactions
- Cash received
- Expenses paid
- Inventory changes

**Monthly Records:**
- Profit and Loss statement
- Cash flow summary
- Outstanding debts (owed to you)
- Outstanding payments (you owe)

**Annual Records:**
- Tax returns
- Equipment purchases
- Major contracts
- Insurance policies

### Tools for Small Business Accounting

**Free Options:**
- **Wave Accounting** (free, cloud-based)
- **GnuCash** (free desktop software)
- **Excel Templates** (create your own)

**Paid Options:**
- **QuickBooks** (₦15,000-₦30,000/year)
- **Zoho Books** (₦10,000-₦20,000/year)
- **Sage** (established, more expensive)

**Nigerian-Specific:**
- **VConnect Business** (local support)
- **Accounteer** (designed for Nigerian businesses)

### The Simple Spreadsheet Approach

**Create These Tabs:**
1. **Daily Sales** - Date, Customer, Amount, Payment Method
2. **Daily Expenses** - Date, Description, Amount, Category
3. **Monthly Summary** - Total Sales, Total Expenses, Profit
4. **Cash Flow** - Track money in and out by week

## Tax Management for Small Business

### Types of Business Taxes in Nigeria

**Federal Taxes:**
- **Company Income Tax** (30% for companies)
- **Personal Income Tax** (for sole proprietorships)
- **Value Added Tax (VAT)** (7.5% on goods and services)
- **Withholding Tax** (various rates)

**State/Local Taxes:**
- **Business Registration** (varies by state)
- **Signage/Advertising** permits
- **Local Government** levies

### Tax-Saving Strategies

**Legitimate Deductions:**
- Office rent and utilities
- Business equipment and software
- Professional training and books
- Business travel and transport
- Marketing and advertising costs
- Professional fees (lawyer, accountant)

**Record Requirements:**
- Keep all receipts
- Bank statements for all transactions
- Contracts and agreements
- Proof of business purpose

## Managing Business Debt

### Good Debt vs Bad Debt

**Good Business Debt:**
- **Equipment Loans** (assets that generate income)
- **Working Capital** (to fulfill large orders)
- **Expansion Financing** (proven business model)

**Bad Business Debt:**
- **Personal Expenses** on business credit
- **High-Interest** short-term loans for operations
- **Lifestyle Purchases** disguised as business needs

### Nigerian Lending Options

**Formal Lenders:**
- **Commercial Banks** (high requirements, lower rates)
- **Microfinance Banks** (easier access, higher rates)
- **Development Finance Institutions** (BOI, NEXIM)

**Alternative Lending:**
- **Fintech Lenders** (Renmoney, FairMoney, Carbon)
- **Cooperative Societies** (lower rates, group guarantee)
- **Family and Friends** (carefully document agreements)

**Warning:** Avoid loan sharks and illegal money lenders. The interest rates can destroy your business.

## Building Business Credit

### How to Build Business Credit in Nigeria

**Step 1:** Register your business properly
- CAC registration
- Tax identification numbers
- Bank account in business name

**Step 2:** Start small credit relationships
- Supplier credit terms (30 days payment)
- Small bank overdraft facility
- Business credit cards

**Step 3:** Always pay on time
- Set up payment reminders
- Pay early when possible
- Build relationships with suppliers

**Step 4:** Document everything
- Keep payment records
- Get credit reference letters
- Build a credit history file

## Planning for Growth

### Reinvestment Strategy

**How Much to Reinvest:**
- **Conservative:** 20-30% of profits
- **Aggressive:** 50-70% of profits
- **Survival Mode:** 0-10% (focus on cash flow)

**What to Invest In:**
1. **High-ROI Activities** first (marketing that works)
2. **Efficiency Tools** second (software, equipment)
3. **New Products/Services** third (after proving demand)

### Emergency Fund for Business

**Business Emergency Fund Size:**
- **Minimum:** 3 months of fixed expenses
- **Ideal:** 6 months of total operating expenses
- **Conservative:** 12 months (for seasonal businesses)

**What Qualifies as Emergency:**
- Major equipment breakdown
- Key customer payment delays
- Economic recession affecting sales
- Unexpected government policy changes

## Red Flags: When to Seek Help

**Financial Red Flags:**
- Consistently negative cash flow for 3+ months
- Borrowing for basic operating expenses
- Unable to pay suppliers on time
- Personal finances suffering due to business
- No clear understanding of profit margins

**When to Get Professional Help:**
- Hiring an accountant (when revenue exceeds ₦2M annually)
- Business consultant (for major decisions)
- Lawyer (for contracts and legal issues)
- Financial advisor (for growth planning)

## Action Plan for This Month

**Week 1:** Set up proper business banking if you haven't
**Week 2:** Create a simple cash flow forecast for next 3 months
**Week 3:** Review and adjust your pricing strategy
**Week 4:** Implement basic record-keeping system

**Monthly Habits:**
- Review cash flow weekly
- Update profit/loss monthly
- Save receipts for everything business-related
- Analyze which products/services are most profitable

💡 **FinPal Tip:** The difference between businesses that survive and those that thrive is usually financial management, not the business idea itself. You don't need to be an accounting expert, but you must understand where your money comes from and where it goes.

Remember: Every naira that leaves your business should either generate more naira or be absolutely necessary for operations. Treat business money with even more respect than personal money - your future depends on it!
        `
      }
    ]
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-600 bg-green-100',
      blue: 'text-blue-600 bg-blue-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100'
    };
    return colors[color as keyof typeof colors];
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-700',
      Intermediate: 'bg-yellow-100 text-yellow-700',
      Advanced: 'bg-red-100 text-red-700'
    };
    return colors[difficulty as keyof typeof colors] || colors.Beginner;
  };

  const renderArticleContent = (content: string) => {
    // Simple markdown-like rendering
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-4 mt-6">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-5">{line.slice(4)}</h3>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-gray-900 mb-2">{line.slice(2, -2)}</p>;
      }
      if (line.startsWith('- **') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <li key={index} className="mb-2">
            <span className="font-semibold">{parts[1]}</span>
            {parts[2] && <span className="text-gray-700">{parts[2]}</span>}
          </li>
        );
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="mb-1 text-gray-700">{line.slice(2)}</li>;
      }
      if (line.startsWith('*') && line.includes(':*')) {
        return <p key={index} className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium mb-4">{line}</p>;
      }
      if (line.startsWith('|')) {
        // Simple table rendering - would need more complex logic for real tables
        return <div key={index} className="font-mono text-sm bg-gray-100 p-2 rounded mb-1">{line}</div>;
      }
      if (line.trim() === '') {
        return <div key={index} className="mb-3"></div>;
      }
      return <p key={index} className="text-gray-700 mb-3 leading-relaxed">{line}</p>;
    });
  };

  if (selectedArticle) {
    const article = articles[selectedCategory as keyof typeof articles].find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Hub</span>
              </button>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600">{article.excerpt}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              {renderArticleContent(article.content)}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Was this helpful?</h4>
              <p className="text-gray-600 mb-4">
                FinPal is here to make financial literacy simple and practical. Keep learning, keep growing!
              </p>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Read More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Learn & Grow
            </h1>
            <p className="text-gray-600">
              Master financial concepts with practical African examples and actionable advice.
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
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? `${colorClasses} border-2 border-opacity-50`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles[selectedCategory as keyof typeof articles].map((article) => (
            <div key={article.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer"
                 onClick={() => setSelectedArticle(article.id)}>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Practical Examples</span>
                </div>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  <span className="mr-2">Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Keep Learning, Keep Growing
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Financial literacy is a journey, not a destination. Every article you read brings you closer to financial freedom and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600">100+</div>
              <div className="text-sm text-gray-600">Articles Coming Soon</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">🇳🇬</div>
              <div className="text-sm text-gray-600">Nigerian Context</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600">📊</div>
              <div className="text-sm text-gray-600">Practical Examples</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHub;