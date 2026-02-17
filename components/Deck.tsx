import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';
import { 
  SlideTitle, SlideMarket, SlideOverview, SlideOrigin, SlideIPO, SlideCostControl, 
  SlideSubscription, SlideCompetition, SlideBlinkit, SlideConclusion 
} from './Slides';

// Order: Title -> Battlefield (Market) -> Overview -> Origin -> ...
const slides = [
  SlideTitle,
  SlideMarket,    // Indian FoodTech Battlefield (Macro)
  SlideOverview,  // Company Overview (Micro)
  SlideOrigin,
  SlideIPO,
  SlideCostControl,
  SlideSubscription,
  SlideCompetition,
  SlideBlinkit,
  SlideConclusion
];

// Natural, Aesthetic Slide Transition (Cinematic Flow)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '105%' : '-105%',
    scale: 0.95,
    opacity: 0,
    zIndex: 2, // Incoming slide on top
    filter: "blur(8px)", // Subtle motion blur effect
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 1,
    filter: "blur(0px)",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", // Shadow for depth
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }, // Snappy but smooth
      scale: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.3 },
      filter: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-25%' : '25%', // Parallax exit (slower than enter)
    scale: 0.9,
    opacity: 0,
    zIndex: 0,
    filter: "blur(8px)",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      scale: { duration: 0.4, ease: "easeIn" },
      opacity: { duration: 0.3 },
      filter: { duration: 0.3 }
    }
  })
};

export const Deck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) < slides.length ? prev + 1 : prev);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1) >= 0 ? prev - 1 : prev);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-slate-50 text-zinc-900 overflow-hidden relative font-sans">
      
      {/* Slide Area */}
      <div className="w-full h-full relative z-10 bg-slate-100/50">
        {/* AnimatePresence without mode="wait" for simultaneous sliding */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full will-change-transform flex flex-col"
          >
            <CurrentSlideComponent isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls / Progress (Dark Glass for Contrast) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 p-3 rounded-full bg-black/80 backdrop-blur-md text-white shadow-2xl z-50 border border-white/10 transition-opacity hover:opacity-100 opacity-60 hover:scale-105 duration-300">
        
        <div className="flex gap-2">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 transition-all active:scale-90">
            <ChevronLeft size={20} />
          </button>
          <div className="w-px h-6 bg-white/20 my-auto mx-1"/>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-30 transition-all active:scale-90">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center min-w-[120px]">
             <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                Slide {currentSlide + 1} / {slides.length}
             </div>
             <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-zomato-red shadow-[0_0_10px_rgba(203,32,45,0.8)]"
                />
             </div>
        </div>

        <button onClick={toggleFullScreen} className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-90">
            {fullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>
    </div>
  );
};