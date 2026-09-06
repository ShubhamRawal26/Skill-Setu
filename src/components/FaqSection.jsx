import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/stitchData';
import { HelpCircle, ChevronDown, LogIn, Sparkles, ArrowRight } from 'lucide-react';

/**
 * TypewriterAnswer Component
 * Animates text character-by-character when an accordion item opens
 */
function TypewriterAnswer({ text, isOpen }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    // Typing speed optimized for smooth, professional reading
    const speed = text.length > 220 ? 10 : 14;

    const timer = setInterval(() => {
      index += 2; // Micro-chunks for high 60fps rendering
      if (index >= text.length) {
        setDisplayedText(text);
        setIsTyping(false);
        clearInterval(timer);
      } else {
        setDisplayedText(text.slice(0, index));
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isOpen, text]);

  return (
    <div className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
      <span>{displayedText}</span>
      {isTyping && (
        <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-600 animate-pulse align-middle rounded-sm" />
      )}
    </div>
  );
}

export function FaqSection({ onOpenReadinessModal, onOpenAuthModal }) {
  const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId(prevId => prevId === id ? null : id);
  };

  return (
    <section id="faq" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface-container-lowest border-b border-outline-variant/30 overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-semibold text-emerald-900 mb-4 shadow-2xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Got Questions? Clear Answers</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight break-words"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Everything you need to know about SkillSetu assessments, skill gaps, 15-minute bridge courses, and direct placements.
          </motion.p>
        </div>

        {/* Professional Numbered Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            const numberFormatted = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                key={faq.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                    : 'bg-white border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    {/* Professional Number Badge */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-emerald-50 group-hover:text-emerald-900 group-hover:border-emerald-200'
                    }`}>
                      {numberFormatted}
                    </div>

                    {/* Question Title */}
                    <span className={`text-sm sm:text-base md:text-lg transition-colors leading-snug break-words ${
                      isOpen ? 'text-emerald-900 font-extrabold' : 'text-slate-800 group-hover:text-emerald-800 font-bold'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Expand Chevron Icon */}
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-emerald-50 text-emerald-800' : 'bg-slate-50 text-slate-400 group-hover:text-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Animated Typewriter Answer Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${faq.id}-answer`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                        <div className="pl-0 sm:pl-14">
                          <TypewriterAnswer text={faq.answer} isOpen={isOpen} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 max-w-xl mx-auto p-5 sm:p-7 bg-white border border-slate-200 rounded-3xl text-center space-y-3 shadow-xs"
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold mx-auto shadow-2xs">
            <Sparkles className="w-5 h-5 text-emerald-700" />
          </div>
          <h4 className="font-bold text-base sm:text-lg text-slate-900">Ready to access your Ayush workspace?</h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
            Sign in with your stakeholder credentials as a Student, Company, Faculty, College, or Ministry Administrator.
          </p>
          <div className="flex justify-center pt-2">
            <button 
              onClick={() => onOpenAuthModal('login')}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-xl hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Sign In to Portal</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FaqSection;
