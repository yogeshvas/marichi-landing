import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Settings, Rocket, Link } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 lg:py-40 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest font-semibold text-blue-400 backdrop-blur-sm">
              Workflow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400"
          >
            From setup to scale in days. Marichi is designed for fast deployment. <br className="hidden lg:block" />
            Most teams are live within a week.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[160px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0"></div>

          {/* Step 1: Connect */}
          <StepCard
            step="01"
            title="Connect"
            description="Link your WhatsApp Business API account. We handle the technical setup."
            delay={0.1}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/20 z-10">
                <Link className="text-white w-8 h-8" />
              </div>
              <motion.div
                className="absolute inset-0 border border-dashed border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white/10 hidden lg:block" />
            </div>
          </StepCard>

          {/* Step 2: Configure */}
          <StepCard
            step="02"
            title="Configure"
            description="Set up flows, routing rules, and templates. No code required."
            delay={0.2}
          >
            <div className="relative w-full h-full p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between bg-neutral-800/50 p-2 rounded-lg border border-white/5">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="h-1 w-8 bg-neutral-600 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-4 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center px-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <div className="h-1 w-16 bg-neutral-700 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-4 bg-neutral-700/50 rounded-full flex items-center justify-end px-1">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                  </div>
                  <div className="h-1 w-12 bg-neutral-700 rounded-full" />
                </div>
              </div>
              <Settings className="absolute bottom-4 right-4 text-neutral-600 w-6 h-6 opacity-20" />
            </div>
          </StepCard>

          {/* Step 3: Launch */}
          <StepCard
            step="03"
            title="Launch"
            description="Go live with marketing campaigns, support flows, or commerce."
            delay={0.3}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent" />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="w-16 h-16 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              </motion.div>

              {/* Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400 rounded-full"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 20, opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                  style={{ left: `${50 + (i - 1) * 10}%`, top: '60%' }}
                />
              ))}
            </div>
          </StepCard>

          {/* Step 4: Optimize */}
          <StepCard
            step="04"
            title="Optimize"
            description="Track performance, refine flows, and scale what works."
            delay={0.4}
          >
            <div className="relative w-full h-full flex items-end justify-center px-6 pb-2">
              <div className="flex items-end gap-2 text-white/20 w-full h-full">
                <motion.div
                  initial={{ height: "20%" }}
                  whileInView={{ height: "40%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-1/4 bg-blue-500/30 rounded-t-lg"
                />
                <motion.div
                  initial={{ height: "20%" }}
                  whileInView={{ height: "65%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-1/4 bg-blue-500/60 rounded-t-lg"
                />
                <motion.div
                  initial={{ height: "20%" }}
                  whileInView={{ height: "85%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="w-1/4 bg-blue-500 rounded-t-lg relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                    +124%
                  </div>
                </motion.div>
              </div>
            </div>
          </StepCard>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, title, description, children, delay }: { step: string, title: string, description: string, children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group relative"
    >
      <div className="h-full bg-[#0F1117] rounded-[32px] border border-white/5 p-2 hover:border-white/10 transition-colors duration-300">
        <div className="h-[200px] bg-neutral-900/50 rounded-[24px] mb-6 overflow-hidden relative group-hover:bg-neutral-900/80 transition-colors">
          {children}
        </div>

        <div className="px-4 pb-6">
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10 mb-2 font-mono opacity-50 select-none">
            {step}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HowItWorksSection;
