import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Squares from './Squares';

const teamMembers = [
  {
    name: 'Shaubik Bhattaharya',
    role: 'Execution',
    bio: 'Driving operational excellence at Marichi, ensuring every strategy is executed with precision and impact.',
    initials: 'SB',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Hanumanth Lal Shukla',
    role: 'Execution',
    bio: 'Mastering the art of execution, bringing Marichi\'s vision to life through relentless dedicated action.',
    initials: 'HS',
    color: 'from-amber-400 to-amber-600'
  },
  {
    name: 'RituRaj',
    role: 'Product',
    bio: 'Crafting the product vision for Marichi, blending user needs with innovative solutions for a seamless experience.',
    initials: 'RR',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    name: 'Yogesh Vashisth',
    role: 'Tech',
    bio: 'Architecting the technological backbone of Marichi, building robust and scalable systems for the future.',
    initials: 'YV',
    color: 'from-purple-400 to-purple-600'
  }
];

const TiltCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full perspective-1000"
    >
      <div
        className="relative h-full w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-xl flex flex-col items-center text-center overflow-hidden group"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Avatar */}
        <motion.div
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} p-[3px] shadow-2xl mb-6 relative z-10`}
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center border-4 border-white/10">
            <span className="text-3xl font-black text-white">{member.initials}</span>
          </div>
        </motion.div>

        {/* Content */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
          <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${member.color} text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg`}>
            {member.role}
          </span>
          <p className="text-neutral-300 leading-relaxed text-sm font-medium">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={60}
          hoverFillColor="#222"
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/80 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tighter">
            The Marichi Team
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Innovators, strategists, and builders uniting to redefine the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 perspective-2000">
          {teamMembers.map((member, index) => (
            <TiltCard member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
