import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '../data/stitchData';
import { ArrowRight, Award, Building2, TrendingUp, AlertTriangle, School } from 'lucide-react';

export function Hero({ onGetStarted }) {

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case 'trending_up': return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-700" />;
      case 'domain': return <Building2 className="w-5 h-5 text-emerald-700" />;
      case 'school': return <School className="w-5 h-5 text-emerald-700" />;
      default: return <Award className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-14 lg:pt-20 pb-8 sm:pb-14 lg:pb-18 hero-grid-bg border-b border-outline-variant/30 overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop relative z-10 w-full max-w-full">
        
        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6 sm:space-y-8">

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="hero-title text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] sm:leading-[1.05] tracking-tight break-words max-w-3xl"
          >
            Build the skills. <br />
            <span className="text-emerald-800">
              Prove your readiness.
            </span> <br />
            Find your next opportunity.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hero-copy text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium"
          >
            SkillSetu is the centralized Ayush web platform connecting 42,000+ scholars, 536+ permitted colleges, and 7,345+ licensed pharma units for practical skill testing, 15-minute bridge courses, and direct placements.
          </motion.p>

          {/* Single Focused Login CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button 
              onClick={onGetStarted}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-label-sm text-base py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 font-bold cursor-pointer group active:scale-95"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Specializations Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-4 flex flex-wrap justify-center items-center gap-2 text-xs font-semibold text-slate-600"
          >
            <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold mr-1">Specializations:</span>
            {['Ayurveda (BAMS)', 'Yoga & Naturopathy (BNYS)', 'Unani (BUMS)', 'Siddha (BSMS)', 'Homeopathy (BHMS)'].map((disc, idx) => (
              <span 
                key={idx} 
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-slate-700 hover:border-emerald-400 transition-colors shadow-2xs font-medium"
              >
                {disc}
              </span>
            ))}
          </motion.div>

        </div>

      </div>

      {/* Trust Metrics Bar - Centered Layout */}
      <div className="max-w-container-max mx-auto px-3 sm:px-6 md:px-margin-desktop mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/80 w-full max-w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 items-stretch">
          {TRUST_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-between text-center p-3 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs backdrop-blur-sm min-w-0 w-full hover:border-emerald-300 hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center font-bold mb-2 sm:mb-3 shadow-2xs shrink-0">
                {getMetricIcon(metric.icon)}
              </div>
              <div className="w-full flex-1 flex flex-col justify-center">
                <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-700 font-semibold leading-tight sm:leading-snug mt-1 break-words">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[10px] sm:text-[11px] text-emerald-800 font-medium leading-tight mt-1.5 break-words">
                    {metric.subtext}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;
