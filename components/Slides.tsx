import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps, ChartDataPoint } from '../types';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  TrendingUp, TrendingDown, DollarSign, Target, ShoppingBag, 
  Users, Zap, Truck, ShieldCheck, Percent, Globe, Award, 
  Rocket, Activity, Layers, BarChart3, Briefcase, ChevronRight, Star, User, UserRound
} from 'lucide-react';

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  }
};

// --- Brand Components ---
const ZomatoLogo = ({ className = "text-inherit", size = "text-2xl" }: {className?: string, size?: string}) => (
  <span className={`${size} font-heading font-extrabold italic tracking-tighter text-zomato-red inline-block ${className}`}>
    zomato
  </span>
);

const SwiggyLogo = ({ className = "text-inherit", size = "text-2xl" }: {className?: string, size?: string}) => (
  <span className={`${size} font-heading font-bold tracking-tight text-[#fc8019] inline-block ${className}`}>
    swiggy
  </span>
);

const BlinkitLogo = ({ className = "text-inherit", size = "text-2xl" }: {className?: string, size?: string}) => (
  <span className={`${size} font-heading font-bold tracking-tight text-[#F8CB46] inline-block ${className} drop-shadow-sm`}>
    blinkit
  </span>
);

// --- 1. Title Slide ---
export const SlideTitle: React.FC<SlideProps> = () => (
  <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden bg-zinc-50">
    <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />
    
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="z-10 relative flex flex-col items-center"
    >
      <div className="mb-8 p-12 bg-white rounded-[3rem] shadow-2xl border border-zinc-100 relative">
          <div className="absolute -top-4 -right-4 bg-black text-white px-6 py-2 rounded-full font-heading font-bold text-sm uppercase tracking-widest shadow-lg">
            Group 9
          </div>
          <ZomatoLogo size="text-[6rem] md:text-[9rem]" className="leading-none" />
      </div>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-5xl font-heading font-semibold text-zinc-800 tracking-tight mb-4"
      >
        Strategic Case Study
      </motion.h2>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-zomato-red to-red-600 text-white px-8 py-3 rounded-full shadow-lg shadow-red-200"
      >
        <p className="text-lg md:text-xl font-medium tracking-widest uppercase">
          Path to Profitability
        </p>
      </motion.div>
    </motion.div>
  </div>
);

// --- 2. Indian FoodTech Battlefield (Macro) ---
// *Requested to be before Overview*
const marketGrowthData = [
    { name: '2020', value: 4.0 }, { name: '2021', value: 5.2 },
    { name: '2022', value: 6.5 }, { name: '2023', value: 8.1 },
    { name: '2024', value: 10.2 }, { name: '2025', value: 13.0 },
    { name: '2026', value: 16.5 },
  ];
  
  export const SlideMarket: React.FC<SlideProps> = () => (
    <div className="h-full flex flex-col justify-center px-8 md:px-20 bg-white relative">
       <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top-right z-0" />
       
       <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                   <div className="bg-blue-100 p-2 rounded-lg"><Globe className="text-blue-600" size={20} /></div>
                   <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Macro Landscape</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-5xl font-heading font-bold mb-6 leading-tight text-zinc-900">
                The Indian <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">FoodTech Battlefield</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-zinc-500 text-lg mb-8 leading-relaxed">
                Rapid urbanization and the "Convenience Economy" are driving a massive shift. The market is consolidating into a duopoly.
              </motion.p>
  
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100">
                      <div className="text-4xl font-heading font-bold text-zinc-900 mb-1">~15%</div>
                      <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">CAGR (2024-2028)</div>
                  </div>
                   <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100">
                      <div className="text-4xl font-heading font-bold text-zinc-900 mb-1">$15B+</div>
                      <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Market Volume '26</div>
                  </div>
              </motion.div>
          </div>
  
          <motion.div variants={itemVariants} className="h-[450px] bg-white p-8 rounded-3xl shadow-2xl border border-zinc-50 relative">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="font-heading font-bold text-zinc-800">Market Size (USD Billions)</h3>
                  <BarChart3 className="text-zinc-300"/>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                  <AreaChart data={marketGrowthData}>
                      <defs>
                          <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} dy={10}/>
                      <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} dx={-10}/>
                      <Tooltip 
                          contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                          cursor={{stroke: '#2563eb', strokeWidth: 1}}
                      />
                      <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#2563eb" 
                          strokeWidth={4} 
                          fill="url(#colorMarket)" 
                      />
                  </AreaChart>
              </ResponsiveContainer>
          </motion.div>
       </motion.div>
    </div>
  );

// --- 3. Company Overview ---
export const SlideOverview: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-8 md:px-20 relative bg-zinc-50">
    <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
    
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="z-10 w-full max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="mb-12 border-l-8 border-zomato-red pl-8">
        <h2 className="text-5xl font-heading font-bold text-zinc-900 mb-2">The Giant at a Glance</h2>
        <p className="text-zinc-500 text-xl font-medium">Connecting 1.4B people through food.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
            { icon: Rocket, label: "Founded", value: "2008", sub: "Deepinder Goyal", color: "bg-red-50 text-red-600" },
            { icon: Globe, label: "Reach", value: "1,000+", sub: "Cities in India", color: "bg-blue-50 text-blue-600" },
            { icon: Users, label: "Monthly Users", value: "18M+", sub: "Transacting Customers", color: "bg-purple-50 text-purple-600" },
            { icon: Activity, label: "Partners", value: "200k+", sub: "Active Restaurants", color: "bg-orange-50 text-orange-600" }
        ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon size={28} />
                </div>
                <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-2">{item.label}</h3>
                <p className="text-3xl font-heading font-bold text-zinc-800 mb-1">{item.value}</p>
                <p className="text-sm text-zinc-500">{item.sub}</p>
            </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-zinc-100 flex items-center justify-between">
         <div>
            <h3 className="text-lg font-heading font-semibold mb-1 flex items-center gap-2 text-zinc-900">
                <Award className="text-yellow-500" size={20} /> Mission Statement
            </h3>
            <p className="text-2xl italic text-zinc-600 font-serif">
                "Better food for more people."
            </p>
         </div>
         <div className="hidden md:flex gap-4">
             <div className="bg-zinc-100 px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 uppercase tracking-wider">NSE: ZOMATO</div>
         </div>
      </motion.div>
    </motion.div>
  </div>
);

// --- 4. The Origin (Burn to Grow) ---
const lossData: ChartDataPoint[] = [
  { name: 'FY18', value: -107 }, { name: 'FY19', value: -1001 },
  { name: 'FY20', value: -2386 }, { name: 'FY21', value: -816 },
];

export const SlideOrigin: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-8 md:px-20 bg-white">
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div>
        <motion.div variants={itemVariants} className="inline-block bg-red-100 text-zomato-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Phase 1: Acquisition
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-5xl font-heading font-bold mb-6 text-zinc-900">
          The "Burn to Grow" Era
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-zinc-600 leading-relaxed mb-8">
          Aggressive customer acquisition came at a steep price. <ZomatoLogo size="text-xl" /> prioritized <span className="font-bold text-zomato-red">Gross Order Value (GOV)</span> over profitability, leading to massive cash burn.
        </motion.p>
        
        <motion.div variants={itemVariants} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
          <h3 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider flex items-center gap-2">
            <Layers size={16}/> Strategic Challenges
          </h3>
          <ul className="space-y-4 text-zinc-600">
            <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"/> Deep discounting wars
            </li>
            <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"/> High delivery cost per order
            </li>
            <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"/> Low customer loyalty
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div variants={itemVariants} className="h-[500px] bg-white rounded-3xl p-8 border border-zinc-100 shadow-2xl relative">
        <div className="absolute -top-5 -right-5 bg-zomato-red text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-red-200 flex items-center gap-2">
            <TrendingDown size={18} /> Peak Cash Burn
        </div>
        <h3 className="text-zinc-500 mb-8 font-bold text-xs uppercase tracking-widest">Net Loss (₹ Crores)</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={lossData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} dy={10}/>
            <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false}/>
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              cursor={{fill: 'rgba(0,0,0,0.02)'}}
            />
            <Bar dataKey="value" fill="#cb202d" radius={[0, 0, 6, 6]} barSize={60}>
                 {lossData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fillOpacity={index === 2 ? 1 : 0.4} />
                 ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  </div>
);

// --- 5. IPO & Valuation ---
const stockData: ChartDataPoint[] = [
  { name: 'IPO', value: 76 }, { name: 'Peak', value: 169 },
  { name: 'Low', value: 40 }, { name: 'Recovery', value: 80 }, 
  { name: 'Current', value: 260 },
];

export const SlideIPO: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-8 md:px-20 relative bg-zinc-50">
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="z-10 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-heading font-bold text-zinc-900 mb-2">The Turning Point</h2>
            <p className="text-zinc-500 text-lg">Transitioning from unicorn to public giant.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-right hidden md:block">
              <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">2021 IPO</div>
              <div className="text-3xl font-heading font-bold text-zomato-red">NSE: ZOMATO</div>
          </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="col-span-2 h-[400px] bg-white rounded-3xl p-8 border border-zinc-200 shadow-xl">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stockData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#cb202d" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#cb202d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} dy={10}/>
              <YAxis stroke="#94a3b8" domain={[0, 'auto']} tick={{fontSize: 12}} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="value" stroke="#cb202d" strokeWidth={3} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-md">
                <h4 className="text-xs text-green-600 font-bold uppercase tracking-widest mb-1">Expectation</h4>
                <p className="text-xl font-bold text-zinc-800">Growth + Profits</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-yellow-500 shadow-md">
                <h4 className="text-xs text-yellow-600 font-bold uppercase tracking-widest mb-1">Reality</h4>
                <p className="text-xl font-bold text-zinc-800">Post-IPO Correction</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-zomato-red shadow-lg">
                <h4 className="text-xs text-zomato-red font-bold uppercase tracking-widest mb-1">The Pivot</h4>
                <p className="text-xl font-bold text-zinc-800">Blinkit & Gold</p>
            </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

// --- 6. Cost Control ---
export const SlideCostControl: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center px-8 md:px-20 bg-white">
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-7xl z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
             <div className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Strategic Pillar I</div>
             <h2 className="text-5xl font-heading font-bold text-zinc-900">Rationalizing Costs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
            { 
                icon: Truck, 
                color: "text-zomato-red", 
                bg: "bg-red-50", 
                title: "Delivery Efficiency", 
                desc: "Optimized zoning & batched orders. Introduced delivery fees, moving from a cost center to revenue neutral." 
            },
            { 
                icon: ShoppingBag, 
                color: "text-blue-600", 
                bg: "bg-blue-50", 
                title: "Hyperpure (B2B)", 
                desc: "Vertical integration. Supplying fresh ingredients to partners improves margins and quality control." 
            },
            { 
                icon: Percent, 
                color: "text-green-600", 
                bg: "bg-green-50", 
                title: "Platform Fees", 
                desc: "Incremental platform fees on every order directly add to the bottom line (Pure Profit)." 
            }
        ].map((item, idx) => (
            <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className={item.color} size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-zinc-900">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                    {item.desc}
                </p>
            </motion.div>
        ))}
        </div>
    </motion.div>
  </div>
);

// --- 7. Subscription (Gold) ---
export const SlideSubscription: React.FC<SlideProps> = () => (
  <div className="h-full flex items-center justify-center px-8 md:px-20 relative bg-zinc-50">
    <div className="absolute right-0 top-0 w-1/3 h-full bg-yellow-50/50" />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-7xl z-10 items-center">
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-4">Strategic Pillar II</div>
        <h2 className="text-6xl font-heading font-bold mb-6 text-zinc-900">The <span className="text-yellow-500">Gold</span> Standard</h2>
        <p className="text-xl text-zinc-500 mb-10 leading-relaxed">
            Re-launching <ZomatoLogo size="text-xl"/> Gold to lock in high-frequency users. The classic "Amazon Prime" playbook.
        </p>
        
        <div className="space-y-4">
            <motion.div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <div className="bg-yellow-50 p-4 rounded-xl"><ShieldCheck className="text-yellow-500" size={28} /></div>
                <div>
                    <h4 className="font-bold text-lg text-zinc-900 mb-1">Loyalty Lock-in</h4>
                    <p className="text-zinc-500 text-sm">Members order <span className="font-bold text-zinc-900">3x more frequently</span>.</p>
                </div>
            </motion.div>
            <motion.div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <div className="bg-yellow-50 p-4 rounded-xl"><Target className="text-yellow-500" size={28} /></div>
                <div>
                    <h4 className="font-bold text-lg text-zinc-900 mb-1">Cross-Pollination</h4>
                    <p className="text-zinc-500 text-sm">Dining out benefits drive app opens.</p>
                </div>
            </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center"
      >
        <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-full blur-[60px] opacity-30 animate-pulse" />
            <div className="absolute inset-0 bg-white rounded-full shadow-[0_20px_60px_rgba(234,179,8,0.3)] flex items-center justify-center border-8 border-yellow-50">
                 <div className="text-center">
                    <h3 className="text-7xl font-heading font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600">GOLD</h3>
                    <p className="text-xs text-yellow-600 font-bold uppercase tracking-[0.4em] mt-2">Member</p>
                 </div>
            </div>
            
             {/* Orbital Badges */}
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 right-10 bg-zinc-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl">
                Frequency
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 -left-4 bg-zinc-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl">
                Data Moat
            </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);

// --- 8. Competition ---
const marketShareData = [
  { name: 'Zomato', value: 55, color: '#cb202d' },
  { name: 'Swiggy', value: 45, color: '#fc8019' },
];

export const SlideCompetition: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-8 md:px-20 bg-white">
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
      <h2 className="text-5xl font-heading font-bold mb-4 text-zinc-900">The Duopoly War</h2>
      <div className="flex items-center justify-center gap-6 text-2xl text-zinc-400">
        <ZomatoLogo size="text-3xl" /> <span className="font-light">vs</span> <SwiggyLogo size="text-3xl" />
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
      <div className="h-[450px] relative">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={marketShareData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={160}
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {marketShareData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }} itemStyle={{fontFamily: 'Inter', color: '#333'}} />
            </PieChart>
         </ResponsiveContainer>
         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-6xl font-heading font-bold text-zinc-900">55%</span>
            <span className="text-sm text-zinc-500 font-bold uppercase tracking-widest mt-2">Market Share</span>
         </div>
      </div>

      <div className="space-y-6">
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border-l-4 border-zomato-red shadow-lg"
        >
            <div className="mb-3 flex justify-between items-start">
                <ZomatoLogo size="text-2xl" />
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">PROFITABLE</span>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed">
                Dominant in <span className="font-bold text-zinc-900">Food Delivery</span>. Stronger content play (Dining Reviews) and transparency.
            </p>
        </motion.div>

        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl border-l-4 border-orange-500 shadow-lg"
        >
             <div className="mb-3 flex justify-between items-start">
                <SwiggyLogo size="text-2xl" />
                <span className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded">IPO BOUND</span>
             </div>
            <p className="text-zinc-600 text-lg leading-relaxed">
                <span className="font-bold text-zinc-900">Instamart</span> pioneer. Strong logistics tech stack. Diversified "Super App" ecosystem.
            </p>
        </motion.div>
      </div>
    </div>
  </div>
);

// --- 9. Blinkit ---
const quickCommerceData: ChartDataPoint[] = [
    { name: 'Q1', value: 10 }, { name: 'Q2', value: 25 },
    { name: 'Q3', value: 45 }, { name: 'Q4', value: 80 },
    { name: 'Q5', value: 130 },
];

export const SlideBlinkit: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-8 md:px-20 bg-zinc-50">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-2 mb-10">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="text-5xl md:text-6xl font-heading font-bold text-zinc-900">The</h2>
                  <BlinkitLogo size="text-5xl md:text-6xl" />
                  <h2 className="text-5xl md:text-6xl font-heading font-bold text-zinc-900">Bet</h2>
                </div>
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest w-fit mt-2">Quick Commerce Revolution</span>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="text-xl text-zinc-600 mb-10 border-l-4 border-yellow-400 pl-6">
                Acquired for <span className="font-bold text-zinc-900">$568M</span>. Critics called it a cash burn pit. Today, it is the primary driver of <ZomatoLogo size="text-xl"/>'s valuation.
            </motion.p>
            
            <ul className="space-y-4">
                {[
                    { icon: Zap, color: "text-yellow-600 bg-yellow-100", title: "10-Minute Delivery", desc: "Fundamental shift in consumer habit." },
                    { icon: TrendingUp, color: "text-green-600 bg-green-100", title: "Higher AOV", desc: "Grocery basket > Food order value." },
                    { icon: Target, color: "text-blue-600 bg-blue-100", title: "Ad Revenue", desc: "High margin income from CPG brands." }
                ].map((item, idx) => (
                    <motion.li 
                        key={idx}
                        initial={{ x: -20, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.3 + (idx * 0.1) } }} 
                        className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm border border-zinc-100"
                    >
                        <div className={`p-3 rounded-lg ${item.color}`}>
                            <item.icon size={24} />
                        </div>
                        <span className="text-lg text-zinc-600"><strong className="text-zinc-900">{item.title}:</strong> {item.desc}</span>
                    </motion.li>
                ))}
            </ul>
        </div>

        <div className="h-[500px] bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl relative">
             <div className="absolute top-8 left-8">
                 <h3 className="text-zinc-900 font-bold text-sm uppercase tracking-widest mb-1">Blinkit GOV Growth</h3>
                 <p className="text-xs text-zinc-400">Indexed Performance</p>
             </div>
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={quickCommerceData}>
                    <defs>
                        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#facc15" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} dy={10}/>
                    <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false}/>
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} cursor={{stroke: '#facc15', strokeWidth: 1}}/>
                    <Area type="monotone" dataKey="value" stroke="#facc15" strokeWidth={4} fill="url(#colorGreen)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  </div>
);

// --- 10. Conclusion & Team ---
const teamMembers = [
  { name: "Aman Singh", role: "Presenter", gender: "M" },
  { name: "Shruti Sinha", role: "", gender: "F" },
  { name: "Kartikeya Aggarwal", role: "", gender: "M" },
  { name: "Miss Priyashi", role: "", gender: "F" },
  { name: "Siddhi Chitmalwar", role: "", gender: "F" },
  { name: "Mayuri Radakar", role: "", gender: "F" },
];

export const SlideConclusion: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col items-center justify-center px-8 md:px-20 text-center bg-zinc-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-white" />
    <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />

    <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-5xl"
    >
        <ZomatoLogo size="text-4xl" className="mb-6 opacity-80" />
        
        <h2 className="text-6xl md:text-8xl font-heading font-extrabold mb-8 text-zinc-900 tracking-tight">
          Thank You
        </h2>
        
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-16 font-medium">
          "Profitability is not a destination, but a journey of disciplined execution."
        </p>

        <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-zinc-100 mx-auto max-w-4xl"
        >
            <div className="flex items-center justify-center gap-3 mb-10">
                 <div className="h-px w-12 bg-zinc-200" />
                 <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">Group 9 Members</span>
                 <div className="h-px w-12 bg-zinc-200" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                {teamMembers.map((member, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-sm ${member.gender === 'M' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-zomato-red'}`}>
                            {member.gender === 'M' ? <User size={24} /> : <UserRound size={24} />}
                        </div>
                        <span className="text-lg font-medium text-zinc-800">{member.name}</span>
                        {member.role && (
                             <span className="text-[10px] text-white bg-zinc-900 px-2 py-0.5 rounded-full uppercase tracking-wider mt-1">{member.role}</span>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </motion.div>
  </div>
);