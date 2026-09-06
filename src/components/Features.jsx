import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  FileCheck2, 
  BarChart3, 
  GraduationCap, 
  Target, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  Scale, 
  Check, 
  X 
} from 'lucide-react';
import { PLATFORM_FEATURES, SYSTEM_COMPARISON_DATA } from '../data/stitchData';

const FEATURE_ICON_MAP = {
  quiz: FileCheck2,
  analytics: BarChart3,
  school: GraduationCap,
  fact_check: Target,
  verified_user: ShieldCheck,
  work: Building2
};

export function Features() {
  return (
    <section id="features" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface-container-lowest border-b border-outline-variant/30 relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-semibold text-emerald-900 mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Core Platform Features</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-3 sm:mb-4 tracking-tight break-words"
          >
            Built for Ayush Student Success
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Everything you need in one clean, straightforward platform to test your practical skills, bridge knowledge gaps, and get verified placements.
          </motion.p>
        </div>

        {/* 6 Simplified Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {PLATFORM_FEATURES.map((feature, idx) => {
            const IconComponent = FEATURE_ICON_MAP[feature.icon] || FileCheck2;
            return (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px 0px -20px 0px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -3 }}
                key={feature.id}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center font-bold shadow-2xs group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 shadow-2xs">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>Ayush Verified</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;
