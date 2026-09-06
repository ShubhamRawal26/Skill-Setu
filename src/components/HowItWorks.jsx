import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../data/stitchData';
import { Globe, LogIn, CheckCircle2, ClipboardCheck, Briefcase, Sparkles, Award, Clock, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const getStepIcon = (stepNum) => {
    switch (stepNum) {
      case '01': return <Globe className="w-5 h-5 text-white" />;
      case '02': return <LogIn className="w-5 h-5 text-white" />;
      case '03': return <ClipboardCheck className="w-5 h-5 text-white" />;
      case '04': return <Briefcase className="w-5 h-5 text-white" />;
      case '05': return <Sparkles className="w-5 h-5 text-white" />;
      case '06': return <Award className="w-5 h-5 text-white" />;
      default: return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface tech-grid relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-4 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-wider font-bold mb-4 inline-flex items-center gap-1.5 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Step-by-Step Flow</span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight break-words">
            How SkillSetu Works for Students
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            A simple, transparent 6-step journey designed for all students across rural and urban India to learn practical skills, bridge gaps, and get placed.
          </p>
        </div>

        {/* 6 Clean Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Step Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    {getStepIcon(stepItem.step)}
                  </div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-500 font-display-lg tracking-tight select-none">
                    STEP {stepItem.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                  {stepItem.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {stepItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Benchmark Metric */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{stepItem.benchmarkMetric?.label}</span>
                </span>
                <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 text-xs">
                  {stepItem.benchmarkMetric?.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
