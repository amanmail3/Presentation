import React, { useState } from 'react';
import { getStrategicInsight } from '../services/geminiService';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await getStrategicInsight(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-zomato-red to-red-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 border border-red-400/30"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
          {!isOpen && <span className="font-bold text-sm hidden md:block">Ask Strategy Bot</span>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-96 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl p-6 z-50 text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-yellow-400" size={20} />
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Strategy AI Assistant
              </h3>
            </div>

            <div className="min-h-[150px] max-h-[300px] overflow-y-auto mb-4 bg-black/40 rounded-lg p-4 text-sm leading-relaxed border border-zinc-800">
              {loading ? (
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-2 h-2 bg-zomato-red rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-zomato-red rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-zomato-red rounded-full animate-bounce delay-200" />
                  Analyzing market data...
                </div>
              ) : response ? (
                <p>{response}</p>
              ) : (
                <p className="text-zinc-500 italic">
                  Ask about Zomato's contribution margin, Blinkit's synergies, or the Swiggy rivalry...
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Ex: Is the Gold model sustainable?"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-zomato-red transition-colors"
              />
              <button
                onClick={handleAsk}
                disabled={loading}
                className="bg-zomato-red hover:bg-red-700 p-2 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
