import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Leaf, 
  HeartPulse, 
  FlaskConical, 
  Compass, 
  Microscope 
} from 'lucide-react';
import { AYUSH_DISCIPLINES } from '../data/stitchData';

const DISCIPLINE_ICON_MAP = {
  psychiatry: Leaf,
  self_improvement: HeartPulse,
  local_pharmacy: FlaskConical,
  nature_people: Compass,
  science: Microscope
};

export function AboutEcosystem() {
  const benchmarkScores = [
    { name: 'Schedule T GMP Compliance', score: '94/100', level: 'Mastered' },
    { name: 'HPTLC Standardization Assay', score: '88/100', level: 'Verified' },
    { name: 'Clinical Nadi Pariksha Protocol', score: '92/100', level: 'Mastered' },
    { name: 'Good Clinical Practices (GCP)', score: '96/100', level: 'Verified' }
  ];

  return (
    <section id="skills" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface tech-grid border-b border-outline-variant/30 relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Profile Card & Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-10 sm:mb-16 w-full max-w-full">
          
          {/* Left Column Visual: Standardized Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs relative z-10 backdrop-blur-sm w-full max-w-full overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    Standardized Scholar Profile
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    National Ayush Competency Framework
                  </p>
                  <p className="text-xs text-slate-400">NCISM & NCH Aligned · AIIA Validated Diagnostic</p>
                </div>
                <div className="bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Matrix</span>
                </div>
              </div>

              {/* Match Score Display */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-6 text-center shadow-xs">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-1">
                  88%
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600">
                  Overall Clinical Readiness Index
                </div>
                <div className="w-full h-3 bg-slate-200/80 rounded-full mt-4 overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-emerald-600 h-full rounded-full" 
                  />
                </div>
              </div>

              {/* Assessment Scores List */}
              <div className="space-y-3">
                {benchmarkScores.map((ast, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center p-3 border border-slate-200/70 rounded-xl bg-white shadow-2xs"
                  >
                    <span className="text-slate-800 text-sm font-medium">{ast.name}</span>
                    <span className="text-emerald-800 font-bold text-sm bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                      {ast.score}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Decorative Offset Backdrop Frame */}
            <div className="absolute inset-0 bg-emerald-50/50 transform translate-x-4 translate-y-4 rounded-3xl border border-emerald-200/40 z-0 hidden sm:block"></div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-semibold text-emerald-900 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
              <span>Objective Clinical Benchmarks</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight break-words">
              A clearer view of <br />
              <span className="text-emerald-800">
                candidate clinical readiness.
              </span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Moving beyond traditional marks sheets. SkillSetu provides a comprehensive profile highlighting practical competencies, standard clinical procedures, and verified achievements.
            </p>

            {/* Value Bullet Points */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-slate-900">Verified Credentials Portfolio</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Authenticated credentials and standardized assessment results backed by institutional and mentor review.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-slate-900">Granular Competency Vectors</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Detailed breakdown of clinical, diagnostic, and herbal formulation competencies across all 5 Ayush streams.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* All 5 Ayush Systems Displayed Directly as Distinct Comprehensive Cards */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
              National Ayush Scope
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-2 tracking-tight">
              Covering All 5 Ayush Fields & Skills
            </h3>
            <p className="text-sm text-slate-600">
              Comprehensive practical competency mapping across Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy.
            </p>
          </div>

          {/* 5 Distinct Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AYUSH_DISCIPLINES.map((disp, idx) => {
              const DisciplineIcon = DISCIPLINE_ICON_MAP[disp.icon] || Leaf;
              return (
                <motion.div
                  key={disp.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center font-bold shadow-2xs group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300">
                        <DisciplineIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200">
                        {disp.code}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      {disp.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {disp.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Core Practical Skills:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {disp.coreSkills.map((skill, sIdx) => (
                          <span key={sIdx} className="bg-slate-50 text-slate-800 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-slate-200/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Nationwide Learners</span>
                    <span className="font-bold text-emerald-800 font-mono text-sm">{disp.studentsCount}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutEcosystem;
